const List=({todoList,deleteFunc})=>{

  return (<>
    {todoList.map((todo)=>{
      return (
      <div key={todo.id}>{todo.content}
      <button onClick={()=>deleteFunc(todo.id)}>完了</button>
      </div>
      )})}
  </>)
}
export default List;