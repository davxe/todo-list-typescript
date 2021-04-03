import React, { useState } from 'react'
import styled from 'styled-components'
import {ErrorDetail} from '../Todo/Todo'
interface IHistory{
    push(url:string):void;
}
interface IProps{
    history:IHistory;
}
const MainContainer=styled.div`
    border:2px solid black;
    width:800px;
    height:400px;
    margin:110px auto;
    display:grid;
    grid-template-rows:repeat(4,100px);
    grid-template-columns:1fr;
`;
export const Login:React.FC<IProps>=(props:IProps)=>{
    const [userName,setUserName]=useState<string>('')
    const [password,setPassword]=useState<string>('')
    const [userNameError,setUserNameError]=useState<string>('')
    const [passwordError,setPasswordError]=useState<string>('')
    //on Change od user name 
    const handleChangeUsername=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserName(e.target.value)
    }
    //on change of password
    const handleChangePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }
    // validation for username and password
    const validation=()=>{
        let userNameError='',passwordError=''
        if(!userName){
            userNameError='*userName Cannot be empty'
        }
        else if(userName.length<6){
            userNameError='*username must be of 6 character'
        }
        if(!password){
            passwordError='*password cannot be empty'
        }
        else if(password.length<6){
            passwordError='*password should not less than 6'
        }
        if(userNameError||passwordError){
            setUserNameError(userNameError)
            setPasswordError(passwordError)
            return false
        }
        return true
    }
    // on click of login button
    const handleSubmit=()=>{
        const isValid=validation()
        if(isValid){
            const formData={
                username:userName,
                password:password
            }
            // console.log('form data',formData)
            // console.log('props data',props.history.push)
            setPassword('')
            setUserName('')
            props.history.push(`/todo/${userName}`)
        }
    }
    return(
        <MainContainer>
            <div>
                <h1>Login here</h1>
            </div>
            <div>
                <div>
                    <label htmlFor='username'>Username</label>
                </div>
                <div>
                    <input id='username' type="text" value={userName} onChange={handleChangeUsername}/>
                    <ErrorDetail>{userNameError}</ErrorDetail>
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor='password'>Password</label>
                </div>
                <div>
                    <input id='password' type="password" value={password} onChange={handleChangePassword}/>
                    <ErrorDetail>{passwordError}</ErrorDetail>
                </div>
            </div>
            <div>
                <input type='button' onClick={handleSubmit} value='Login'/>
            </div>   
        </MainContainer>
    )
}