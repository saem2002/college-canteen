import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './pics/logo.png'
import { NavLink } from 'react-router-dom';
import { makeStyles, ClickAwayListener, Dialog, DialogContent, DialogContentText} from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { AccountContext } from '../context/AccountProvider'

import { GoogleLogout } from 'react-google-login'
import { clientId } from '../constants/data'
import { useHistory } from 'react-router';



const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    dropdown: {
        position: 'absolute',
        height: "auto",
        width: 'fit-content',
        top: 50,
        borderRadius: '10px',
        padding: '10px',
        right: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f7f7f7"


    },
    logout:{
        fontSize:"40px",
        fontFamily:"cursive",
    }
  

})

const Navbar = ({ setProgress }) => {
    const history=useHistory();
    const { Account } = useContext(AccountContext)
    const [open, setOpen] = useState(false)
    const [dialogopen, setdialogOpen] = useState(false)
 
    

    const classes = useStyles();
    const handleClickAway = () => {
        setOpen(false);
    };
    const handleOpen =()=>{
       setdialogOpen(true) 
    }
    function clearwindow() {
        setTimeout(function(){ window.location.reload(); }, 2000);
    }
  
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    const onSignoutSuccess = () => {
        handleOpen();
        history.push('/')
        console.clear();
        clearwindow()
    };

    return (
        <>

            <nav className="navbar navbar-expand-lg  navbar-light bg-light sticky-top" >
                <div className="container-fluid  ">
                    <NavLink className="navbar-brand " to="/" onClick={() => setProgress(100)}>
                        <img className="brand " src={logo} alt="error" />
                        College Canteen
                    </NavLink>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="navbar-brand  " onClick={() => setProgress(100)} to="/cart">
                                    <ShoppingCartOutlined className="brand" />
                                </NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item ">
                                <NavLink className="nav-link active" onClick={() => setProgress(100)} aria-current="page" to="/">Home</NavLink>
                            </li> */}
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <div className={classes.root}>
                                    <li className="nav-item" >
                                        <img src={Account.imageUrl} alt="dp" className="DP me-auto" onClick={handleClick}></img>
                                    </li>
                                    {open ? (
                                        <div className={classes.dropdown} >
                                            Wants to log out?
                                            <GoogleLogout className="brand"
                                                
                                                clientId={clientId}
                                                buttonText="Logout"
                                                onLogoutSuccess={onSignoutSuccess}
                                            ></GoogleLogout>
                                        </div>
                                    ) : null}
                                </div>
                            </ClickAwayListener>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="#">
                                    <h5>Welcome {Account.name}</h5>
                                 
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
           
            <Dialog open={dialogopen} className={classes.logout}
            BackdropProps={{style:{backgroundColor:'unset'}}}>
                 <DialogContent>
          <DialogContentText id="alert-dialog-description">
           You have been logged out successfully
          </DialogContentText>
        </DialogContent>
            </Dialog>

        </>
    )
}

export default Navbar
