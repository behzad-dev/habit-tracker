import { format } from 'date-fns';
import type { AppState, Action } from '../state/types';
import { HabitDot } from './HabitDot';

type Props = {
  date: Date;
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

export function CalendarDay({ date, state, dispatch }: Props) {
  const isoDate = date.toISOString().split('T')[0];

  return (
    <div className="border h-24 w-24 p-1 flex flex-col items-center justify-start text-xs">
      <div className="text-gray-500">{format(date, 'd')}</div>

      <div className="flex flex-wrap justify-center mt-1 gap-1">
        {state.habits.map((habit) => (
          <HabitDot
            key={habit.id}
            habit={habit}
            checked={state.checkins[habit.id]?.includes(isoDate)}
            onToggle={() =>
              dispatch({
                type: 'TOGGLE_CHECKIN',
                payload: {
                  habitId: habit.id,
                  date: isoDate,
                },
              })
            }
          />
        ))}
      </div>
    </div>
  );
}
