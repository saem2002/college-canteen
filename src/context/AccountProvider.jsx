import React,{ createContext,useState} from 'react'

export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
    const [Account, setAccount] = useState();
   
    
    return (
        <div>
            <AccountContext.Provider value={{Account,setAccount}}>
                {children}
            </AccountContext.Provider>
        </div>
    )
}

export default AccountProvider
