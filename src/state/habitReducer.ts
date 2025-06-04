import type { AppState, Action } from './types';

export const intialState: AppState = {
  habits: [],
  checkins: {},
};
export function habitreducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ADD_HABIT':
      return { ...state, habits: [...state.habits, action.payload] };
    default:
      return state;
  }
}
