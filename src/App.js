import React from 'react';

import './App.css';
import AccountProvider from './context/AccountProvider';

import Authentication from './components/Authentication';






function App() {
 
  return (
    <>

        <AccountProvider >
          <Authentication />
        </AccountProvider>
  

    </>
  );
}

export default App;
