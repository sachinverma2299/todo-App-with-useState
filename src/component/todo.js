
const Todo = (props) =>
{
    const{data,setTodoValue,setIsEdit,setTemp,setData} =props;
    const onEditHandler = (x) =>{
        setTodoValue(x.val)
        setIsEdit(true);
        setTemp(x);
    }
    const onDeleteHandler=(x)=>{
        const deletedValue = data.filter((a)=> a.id !== x.id)
        setData(deletedValue)

    }
    return (
        <div className="container text-center">
            <h4>Todo</h4>
            <ul>
                {data.map((x)=>{
                    return <div className="mx-4 my-4">
                                <li key={x.id}>
                                    {x.val}
                                    <button className="btn btn-primary mx-4" onClick={()=>onEditHandler(x)}>
                                        Edit
                                    </button>
                                    <button className="btn btn-primary mx-4" onClick={()=>onDeleteHandler(x)}>
                                        Delete
                                    </button>
                                </li>
                            </div>
                })}
            </ul>
        </div>
    )

}
export default Todo