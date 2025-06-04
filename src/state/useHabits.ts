import { useReducer, useEffect } from 'react';
import { habitsReducer, initialState } from './habitsReducer';

const STORAGE_KEY = 'habit-tracker-state';
export function useHabits() {
  const [state, dispatch] = useReducer(habitsReducer, initialState, () => {
    return {
      habits: [
        {
          id: 'test-habit',
          name: 'Test Habit',
          color: 'border-blue-500', // Tailwind class
          createdAt: new Date().toISOString(),
        },
      ],
      checkins: {},
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return { state, dispatch };
}
