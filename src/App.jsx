import { store } from "./app/store";

import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <TodoForm />
      <TodoItem />
    </Provider>
  );
}

export default App;
