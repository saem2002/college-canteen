import React, { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Cart from './Cart';








const Main = () => {
  const [progress, setProgress] = useState(0)
  const [cartitems, setcartitems] = useState(() => {
    const localdata = localStorage.getItem('cartitems');
    return localdata ? JSON.parse(localdata) : [];
  })
 
  


  const handleAddItem = async (product) => {
    const exist = cartitems.find((item) => item.id === product.id)
    if (exist) {
      setcartitems(cartitems.map((item) => item.id === product.id ?
        { ...exist, quantity: exist.quantity + 1 } :
        item)
      )


    } else {
      setcartitems([...cartitems, { ...product, quantity: 1 }]);
    }


  }

  const handleDecrease = (product) => {
    const exist = cartitems.find((item) => item.id === product.id)
    if (exist.quantity === 1) {
      setcartitems(cartitems.filter((item) => item.id !== product.id));
    }
    else {
      setcartitems(
        cartitems.map((item => item.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : item))
      )
    }
  }
  const handleclearcart = () => {
    setcartitems([])
  }
  useEffect(() => {
    localStorage.setItem('cartitems', JSON.stringify(cartitems))
  }, [cartitems])

  return (
    <>

      <Router>

      <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)} />
            <Navbar setProgress={setProgress} />
        <Switch>
       
        
        <Route exact path="/">
            <Home handleAddItem={handleAddItem} />

          </Route>
          <Route path="/cart">
            <Cart cartitems={cartitems} setcartitems={setcartitems} handleAddItem={handleAddItem} handleDecrease={handleDecrease} handleclearcart={handleclearcart} />
          </Route>
        

        </Switch>
        <Footer />
      </Router>



    </>
  )
}

export default Main
