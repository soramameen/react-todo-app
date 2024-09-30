import { useState } from 'react';
const Form=({todoList,setTodoList})=>{
  let [getTodo,setGetTodo]=useState('');
  const setTodo = setTodoList;
  const enterTodo=(e)=>{
    e.preventDefault(); // デフォルトのフォーム送信を防ぐ
    setGetTodo(e.target.value);
    let newTodo = {
      id:Math.floor(Math.random() * 1e5),
      content:getTodo,
    }
    setTodo([...todoList,newTodo]);
    console.log('追加されました');
    setGetTodo('');
  }
  return (<>
   <form onSubmit={enterTodo}>
      <label>
        やること:
        <input
          type="text"
          name="name"
          value={getTodo}
          onChange={(e) => setGetTodo(e.target.value)} // 入力値を状態に設定


        />
       </label>
       <button type="submit">追加</button>

    </form> 
  </>)
}
export default Form;