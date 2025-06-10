import type { Habit } from '../state/types';

type Props = {
  habit: Habit;
  checked: boolean;
  onToggle: () => void;
};

export function HabitDot({ habit, checked, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      title={habit.name}
      className={`w-4 h-4 rounded-full transition-colors duration-200
        ${
          checked
            ? `${habit.color} border-0`             // filled circle
            : 'border-2 border-gray-300 bg-white'   // empty circle
        }`}
    >
      <span className="sr-only">
        {habit.name} – {checked ? 'done' : 'not done'}
      </span>
    </button>
  );
}
