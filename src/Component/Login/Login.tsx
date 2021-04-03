import React, { useState } from 'react'
import styled from 'styled-components'
import {ErrorDetail,Header} from '../Todo/Todo'
interface IHistory{
    push(url:string):void;
}
interface IProps{
    history:IHistory;
}
const MainContainer=styled.div`
    border:2px solid black;
    border-radius:5px;
    width:800px;
    height:400px;
    margin:110px auto;
    display:grid;
    grid-template-rows:repeat(4,100px);
    grid-template-columns:1fr;
`;
const HeaderContainer=styled.div`
    background-color:rgb(0,174,255);
    grid-column:1fr;
    font-size:22px;
`;
const FormContainer=styled.div`
    display:grid;
    grid-template-rows:100px;
    grid-template-columns:0.3fr 0.7fr;
`;
const FormLevel=styled.div`
    padding-top:25px;
    font-size:22px;
    padding-left:30px;
`;
const Label=styled.label``;
const Input=styled.input`
    width:400px;
    height:37px;
    font-size:22px;
`;
const InputButton=styled.button`
    border:2px solid;
    grid-column:2/3;
    width:200px;
    height:42px;
    margin-left:30px;
    font-size:22px;
`;
export const Login:React.FC<IProps>=(props:IProps)=>{
    const [userName,setUserName]=useState<string>('')
    const [password,setPassword]=useState<string>('')
    const [userNameError,setUserNameError]=useState<string>('')
    const [passwordError,setPasswordError]=useState<string>('')
    //on Change od user name 
    const handleChangeUsername=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserName(e.target.value)
        setUserNameError('')
    }
    //on change of password
    const handleChangePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
        setPasswordError('')
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
            <HeaderContainer>
                <Header>Login here</Header>
            </HeaderContainer>
            <FormContainer>
                <FormLevel>
                    <Label htmlFor='username'>Username</Label>
                </FormLevel>
                <FormLevel>
                    <Input id='username' type="text" value={userName} onChange={handleChangeUsername}/>
                    <ErrorDetail>{userNameError}</ErrorDetail>
                </FormLevel>
            </FormContainer>
            <FormContainer>
                <FormLevel>
                    <Label htmlFor='password'>Password</Label>
                </FormLevel>
                <FormLevel>
                    <Input id='password' type="password" value={password} onChange={handleChangePassword}/>
                    <ErrorDetail>{passwordError}</ErrorDetail>
                </FormLevel>
            </FormContainer>
            <FormContainer>
                <InputButton type='button' onClick={handleSubmit}>Login</InputButton>
            </FormContainer>   
        </MainContainer>
    )
}