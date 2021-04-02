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

    const handleTodo=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTodo(e.target.value)
    }
    const addTodoArray=()=>{
        setTodoArray([...todoArray,todo])
        setTodo('')
    }
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
                <table>
                    <tr>
                        <th><input type='text' value={todo} onChange={handleTodo}/></th>
                        <td><button onClick={addTodoArray}>Add</button></td>
                    </tr>
                </table>
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