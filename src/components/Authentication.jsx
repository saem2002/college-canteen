import React,{useContext} from 'react'
import Login from './Login';
import { AccountContext } from '../context/AccountProvider'
import Main from './Main';





const Authentication = () => {

    const {Account} =useContext(AccountContext);

    return (
    <>
    <div>
    { Account ? <Main />: <Login /> }
    </div>
   
    </>

        
    )
}


export default Authentication
