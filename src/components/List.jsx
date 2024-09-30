const List=({todoList,deleteFunc})=>{

  return (<>
    {todoList.map((todo)=>{
      return (
      <div key={todo.id}>
        <button onClick={()=>deleteFunc(todo.id)}>完了</button>
        {todo.content}
      </div>
      )})}
  </>)
}
export default List;