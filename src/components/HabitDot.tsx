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
      className={`w-4 h-4 rounded-full border-2 ${
        checked ? habit.color : 'border-gray-300'
      }`}
    >
      <span className="sr-only">
        {habit.name} {checked ? 'checked' : 'not checked'}
      </span>
    </button>
  );
}
