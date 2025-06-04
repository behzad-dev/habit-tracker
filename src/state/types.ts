export type Habit = {
  id: string;
  name: string;
  color: string; // hex or Tailwind color class
  createdAt: string;
};

export type CheckinMap = {
  [habitId: string]: string[]; // ISO dates: '2025-05-29'
};

export type AppState = {
  habits: Habit[];
  checkins: CheckinMap;
};
export type Action =
  | { type: 'ADD_HABIT'; payload: Habit }
  | { type: 'DELETE_HABIT'; payload: { id: string } }
  | { type: 'TOGGLE_CHECKIN'; payload: { habitId: string; date: string } };
