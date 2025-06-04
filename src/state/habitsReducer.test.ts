import { habitsReducer, initialState } from './habitsReducer';
import type { Habit } from './types';

const sampleHabit: Habit = {
  id: '1',
  name: 'Read',
  color: '#f87171',
  createdAt: new Date().toISOString(),
};

it('adds a habit', () => {
  const next = habitsReducer(initialState, {
    type: 'ADD_HABIT',
    payload: sampleHabit,
  });
  expect(next.habits).toHaveLength(1);
  expect(next.habits[0].name).toBe('Read');
});

it('toggles a checkin on', () => {
  const stateWithHabit = {
    ...initialState,
    habits: [sampleHabit],
    checkins: {},
  };
  const date = '2025-05-29';
  const next = habitsReducer(stateWithHabit, {
    type: 'TOGGLE_CHECKIN',
    payload: { habitId: '1', date },
  });
  expect(next.checkins['1']).toContain(date);
});

it('toggles a checkin off', () => {
  const date = '2025-05-29';
  const stateWithCheckin = {
    ...initialState,
    habits: [sampleHabit],
    checkins: { '1': [date] },
  };
  const next = habitsReducer(stateWithCheckin, {
    type: 'TOGGLE_CHECKIN',
    payload: { habitId: '1', date },
  });
  expect(next.checkins['1']).not.toContain(date);
});
