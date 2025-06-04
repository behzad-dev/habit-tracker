import { CalendarDay } from './CalendarDay';
import { getMonthMatrix } from '../utils/calendar';
import type { AppState, Action } from '../state/types';

type Props = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

export function CalendarMonth({ state, dispatch }: Props) {
  const today = new Date();
  const matrix = getMonthMatrix(today.getFullYear(), today.getMonth());

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div>
      <div className="grid grid-cols-7 gap-2 text-center font-medium text-sm mb-2">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {matrix.flat().map((date) => (
          <CalendarDay
            key={date.toISOString()}
            date={date}
            state={state}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}
