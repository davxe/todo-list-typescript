import React, { useState } from 'react'
interface IProps{
    match:{
        params:{
            name:string;
        }
    }
}
export const Todo:React.FC<IProps>=(props:IProps)=>{
    console.log('params data',props.match.params.name)
    const [todo,setTodo]=useState<string>('')
    const [todoArray,setTodoArray]=useState<Array<string>>([])
    const [todoError,setTodoError]=useState<string>('')
    // on change of input
    const handleTodo=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTodo(e.target.value)
        setTodoError('')
    }
    // validation
    const validation=()=>{
        let todoError=''
        if(!todo){
            todoError='todos cannot be empty'
        }
        else if(todo.length<9){
            todoError='todos can be of minimum 10 character long'
        }
        if(todoError){
            setTodoError(todoError)
            return false  
        }
        return true
    }
    // add todo to the array on click of add button
    const addTodoArray=()=>{
        const isValid=validation()
        if(isValid){
            setTodoArray([...todoArray,todo])
            setTodo('')
        }
    }
    // on double click of list remove todo
    const deleteTodo=(id:number)=>{
        const deleteTodo=todoArray.filter((ele?:string,i?:number)=>id!==i)
        setTodoArray(deleteTodo)
    }
    return(
        <div>
            <div>
                <h2>Hello {props.match.params.name}</h2>
            </div>
            <div>
                <div>
                    <input type='text' value={todo} onChange={handleTodo}/>
                    <div>{todoError}</div>
                </div>
                <div>
                    <button onClick={addTodoArray}>Add</button>
                </div>
            </div>
            <div>
                <ul>
                    {
                        todoArray.map((ele:string,i:number)=><li key={i} onDoubleClick={()=>deleteTodo(i)}><p>{ele}</p></li>)
                    }
                </ul>
            </div>
        </div>
    )
}