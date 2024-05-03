import Form from "./component/form";
import Todo from "./component/todo";

import './App.css';
import { useState } from "react";

function App() {
  // main data
  const [data,setData] = useState([]);
  // data which we see in input of form
  const [todoValue,setTodoValue] = useState('');
  // toggle button for edit and add
  const [isEdit,setIsEdit]=useState(false);
  // data for editing
  const [temp,setTemp]=useState();

  return (
    <div className="App">
      
      <Form data={data} todoValue={todoValue} setData={setData} setTodoValue={setTodoValue} isEdit={isEdit} setIsEdit={setIsEdit} temp={temp}></Form>
      <Todo data={data} setData={setData} setTodoValue={setTodoValue} setIsEdit={setIsEdit} setTemp={setTemp}></Todo>
    </div>
  );
}

export default App;
