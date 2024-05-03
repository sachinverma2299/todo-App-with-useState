
const Form = (props) =>
{
    const {data,setData,todoValue,setTodoValue,isEdit,setIsEdit,temp} = props;

    const onSubmitForm = (e) =>
    {
        e.preventDefault();
        setData((x)=>{
            return [...x,{id:x.length+1,val:todoValue}];
        });
        setTodoValue('')
        console.log(data)
    }
    const onChangeHandler=(e)=>
    {
        setTodoValue(e.target.value);
    }
    const onEditHandler=(e) =>{
        e.preventDefault();
        const newData = data.find((x)=>{return x.id === temp.id})
        newData.val=todoValue;
        setIsEdit(false)
        setTodoValue('')
    }
    return(
        <div>
            <form>
                <div className="container text-center">
                    <label className="form-label">Task</label>
                    <input type="text" value={todoValue} onChange={(e)=>onChangeHandler(e)}></input>
                    {!isEdit ?<button className="btn btn-primary ms-4" onClick={(e)=>onSubmitForm(e)}>Add</button>:<button className="btn btn-primary" onClick={(e)=>onEditHandler(e)}>Edit</button> }

                </div>
            </form>
        </div>
    )
}
export default Form