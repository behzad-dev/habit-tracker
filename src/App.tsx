import { CalendarMonth } from './components/CalendarMonth';
import { StreakBadge } from './components/StreakBadge';
import { useHabits } from './state/useHabits';

function App() {
  const { state, dispatch } = useHabits();

  return (
    <div className="p-4 max-w-screen-md mx-auto space-y-4">
      <h1 className="text-xl font-semibold">Habit Tracker</h1>
      <div className="overflow-x-auto">
  <CalendarMonth state={state} dispatch={dispatch} />
</div>    </div>
  );
}

export default App;
