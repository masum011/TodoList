import './App.css';
import { TodoList } from './TodoList';
import Reducer from './Reducer';
import ReducerCounter from './ReducerCounter';
import Counter2 from './Counter2';
import Counter1 from './Counter1';
function App() {
  return (
    <div className="App">
      
      <TodoList/>
      <Reducer/>
      <ReducerCounter/>
      <Counter2/>
      <Counter1/>
    </div>
  );
}

export default App;
