import List from './components/List.jsx';
import Form from './components/Form.jsx';
import './styles/Stylesheet.css';
import { useState } from 'react'
let defaultList = [{
  id:1,
  content:'saunaにいく'
},{
  id:2,
  content:'reactの勉強をする'
},{
  id:3,
  content:'授業の予習をする'
}];
const App=()=>{
  let [todoList,setTodoList] = useState(defaultList);
  const deleteFunc=(id)=>{
    let newTodos=todoList.filter(todo=>todo.id!==id);
    setTodoList([...newTodos]);
  }
  return (
    <>
    <div className='container'>
      <h1>React Todo list</h1>
      <List todoList={todoList} deleteFunc={deleteFunc}/>
      <Form todoList={todoList} setTodoList={setTodoList}/>
    </div>
    
    </>
  )}

export default App
