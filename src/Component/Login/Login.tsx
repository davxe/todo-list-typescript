import React, { useState } from 'react'
interface IHistory{
    push(url:string):void;
}
interface IProps{
    history:IHistory;
}
export const Login:React.FC<IProps>=(props:IProps)=>{
    const [userName,setUserName]=useState<string>('')
    const [password,setPassword]=useState<string>('')

    const handleChangeUsername=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserName(e.target.value)
    }

    const handleChangePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=()=>{
        const formData={
            username:userName,
            password:password
        }
        console.log('form data',formData)
        console.log('props data',props.history.push)
        props.history.push(`/todo`)
    }
    return(
        <div>
            <div>
                <h1>Login here</h1>
            </div>
            <div>
                <table>
                    <tr>
                        <th><label htmlFor='username'>Username</label></th>
                        <td><input id='username' type="text" value={userName} onChange={handleChangeUsername}/></td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <th><label htmlFor='password'>Password</label></th>
                        <td><input id='password' type="password" value={password} onChange={handleChangePassword}/></td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <input type='button' onClick={handleSubmit} value='Login'/>
                    </tr>
                </table>
            </div>   
        </div>
    )
}