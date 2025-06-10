import type { Habit } from '../state/types';

type Props = {
  habits: Habit[];
  onDelete: (id: string) => void;
};

export function HabitList({ habits, onDelete }: Props) {
  return (
    <ul className="flex flex-col gap-2">
      {habits.map((habit) => (
        <li
          key={habit.id}
          className="flex justify-between items-center border p-2 rounded"
        >
<span className={`w-4 h-4 mr-2 rounded-full ${habit.color}`}></span>

          <span className="flex-1">{habit.name}</span>
          <button
            onClick={() => onDelete(habit.id)}
            className="text-sm text-red-600 hover:underline"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
