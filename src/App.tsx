import { CalendarMonth } from './components/CalendarMonth';
import { StreakBadge } from './components/StreakBadge';
import { useHabits } from './state/useHabits';
import { v4 as uuidv4 } from 'uuid';
import { HabitForm } from './components/HabitForm';
import { HabitList } from './components/HabitList';

function App() {
  const { state, dispatch } = useHabits();

  return (
    <div className="p-4 max-w-screen-md mx-auto space-y-4">
      <h1 className="text-xl font-semibold">Habit Tracker</h1>
      <h2 className="text-2xl text-green-500 font-bold">Tailwind Test Text</h2>

      <div className="overflow-x-auto">
        <CalendarMonth state={state} dispatch={dispatch} />
      </div>{' '}
      <HabitForm
        onAdd={(name, color) =>
          dispatch({
            type: 'ADD_HABIT',
            payload: {
              id: uuidv4(),
              name,
              color,
              createdAt: new Date().toISOString(),
            },
          })
        }
      />
      <HabitList
        habits={state.habits}
        onDelete={(id) => dispatch({ type: 'DELETE_HABIT', payload: { id } })}
      />{' '}
    </div>
  );
}

export default App;
