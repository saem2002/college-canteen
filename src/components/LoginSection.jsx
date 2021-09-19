import React, { useContext} from 'react'

import { AccountContext } from '../context/AccountProvider'
import { clientId } from '../constants/data'
import { GoogleLogin } from 'react-google-login'
import {  addUser } from '../service/Api'



const LoginSection = () => {
    
    const { setAccount } = useContext(AccountContext);
    
    const onLoginSuccess = async (res) => {
        console.log("login successfully", res.profileObj)
        setAccount(res.profileObj);
        await addUser(res.profileObj);
    }
    const onLoginFailure = () => {
        console.log("login failed")
    }
 

    return (
        <div className="login">
            <p className="googleLogin" >Choose your google account to enter</p>
        <GoogleLogin   
        clientId={clientId} buttonText="Continue With Google" isSignedIn={true} onSuccess={onLoginSuccess} onFailure={onLoginFailure}
            cookiePolicy={'single_host_origin'} />
        </div>    

        
    )
}

export default LoginSection
