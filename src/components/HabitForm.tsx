import { useState } from 'react';

type Props = {
  onAdd: (name: string, color: string) => void;
};

const COLORS = [
  'bg-blue-500',
  'bg-green-500',
  'bg-red-500',
  'bg-yellow-500',
  'bg-purple-500',
];

export function HabitForm({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [color, setColor] = useState(COLORS[0]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name.trim(), color);
    setName('');
    setColor(COLORS[0]);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 sm:flex-row items-center"
    >
      <input
        type="text"
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded p-2"
      />
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="border rounded p-2"
      >
        {COLORS.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <button
  type="submit"
  className="btn bg-blue-500 hover:bg-blue-600"
>
  Add
</button>
    </form>
  );
}
