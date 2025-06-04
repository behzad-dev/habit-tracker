import type { AppState, Habit } from './types';

type Action =
  | { type: 'ADD_HABIT'; payload: Habit }
  | { type: 'DELETE_HABIT'; payload: { id: string } }
  | { type: 'TOGGLE_CHECKIN'; payload: { habitId: string; date: string } };

export const initialState: AppState = {
  habits: [],
  checkins: {},
};

export function habitsReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ADD_HABIT':
      return {
        ...state,
        habits: [...state.habits, action.payload],
      };

    case 'DELETE_HABIT':
      return {
        ...state,
        habits: state.habits.filter((h) => h.id !== action.payload.id),
        checkins: Object.fromEntries(
          Object.entries(state.checkins).filter(
            ([key]) => key !== action.payload.id
          )
        ),
      };

    case 'TOGGLE_CHECKIN': {
      const { habitId, date } = action.payload;
      const dates = new Set(state.checkins[habitId] || []);
      if (dates.has(date)) {
        dates.delete(date);
      } else {
        dates.add(date);
      }
      return {
        ...state,
        checkins: {
          ...state.checkins,
          [habitId]: Array.from(dates),
        },
      };
    }

    default:
      return state;
  }
}
