import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
interface IHistory{
    push(url:string):void;
}
interface IProps{
    match:{
        params:{
            name:string;
        }
    },history:IHistory;
}
const Wrapper=styled.div`
    width:800px;
    margin:110px auto;
    height:auto;
    background-size:auto;
    display:grid;
    grid-template-rows:90px 100px auto;
`;
const HeaderContainer=styled.div`
    width:400px;
    display:grid;
    grid-template-columns:400px 400px;
`;
const HeaderChild=styled.div`
    text-align:justify;
`;
const HeaderChild1=styled(HeaderChild)`
    text-align:end;
    padding-top:20px;
    padding-right:10px;
`;
export const Header=styled.h2`
    padding:5px;
    margin-bottom:5px;
`;
const HeaderRule=styled.hr`
    height:4px;
    width:300px;
    margin-left:0px;
    justify-content:left;
    background-color:lightgray;
`;
const FormContainer=styled.div`
    width:500px;
    display:grid;
    grid-template-columns:400px 100px;
`;
const InputContainer=styled.div`
`;
const FormField=styled.input`
    height:37px;
    grid-column:1/2;
    width:400px;
    outline:none;
    font-size:larger;
`;
const FormButton=styled.button`
    grid-column:2/3;
    width:80px;
    margin-left:10px;
    height:43px;
    outline:none;
    font-size:18px;
    background-color:cornflowerblue;
`;
export const ErrorDetail=styled.div`
    color:red;
    font-size:20px;
`;
const TodoListContainer=styled.div`
    width:490px;
`;
const TodoList=styled(TodoListContainer)`
    display:grid;
    border:1px double rgba(0,0,0,.4);
    grid-template-rows:auto;
    grid-template-columns:400px 40px;
`;
const Paragraph=styled.p`
    grid-column:1/2;
    grid-row:auto;
    overflow:auto;
`;
export const Todo:React.FC<IProps>=(props:IProps)=>{
    const [todo,setTodo]=useState<string>('')
    const [todoArray,setTodoArray]=useState<Array<string>>([])
    const [todoError,setTodoError]=useState<string>('')
    // on change of input
    const handleTodo=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTodo(e.target.value)
        setTodoError('')
    }
    // validation
    const validation=():boolean=>{
        let todoError=''
        if(!todo){
            todoError='*todos cannot be empty'
        }
        else if(todo.length<9){
            todoError='*todos can be of minimum 10 character long'
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
    const month=new Date().toLocaleString("en-us",{day:"numeric",month:"short"})
    return(
        <Wrapper>
            <HeaderContainer>
                <HeaderChild>
                    <Header>Hello {props.match.params.name}</Header>
                    <HeaderRule/>
                </HeaderChild>
                <HeaderChild1>
                    <Link to='/' onClick={()=>localStorage.clear()}>Logout</Link>
                </HeaderChild1>
            </HeaderContainer>
            <FormContainer>
                <InputContainer>
                    <FormField type='text' value={todo} onChange={handleTodo}/>
                    <ErrorDetail>{todoError}</ErrorDetail>
                </InputContainer>
                <InputContainer>
                    <FormButton onClick={addTodoArray}>Add</FormButton>
                </InputContainer>
            </FormContainer>
            <TodoListContainer>
                {
                    todoArray.map((ele:string,i:number)=>(
                    <TodoList key={i} onDoubleClick={()=>deleteTodo(i)}>
                        <Paragraph>{i+1}. {ele}</Paragraph>
                        <p className='date'>{month}</p>
                    </TodoList>))
                }
            </TodoListContainer>
        </Wrapper>
    )
}