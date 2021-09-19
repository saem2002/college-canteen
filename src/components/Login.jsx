import { Box, Dialog} from '@material-ui/core'
import React,{useState} from 'react'
import LoginSection from './LoginSection'






const Login = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <>
        <div className="FoodSite">
        
        <p className="entry"  >Welcome to our site </p>
        <Dialog open={open} onClose={handleClose} >
            <Box >
                <LoginSection />
            </Box>
        </Dialog>
        <div className="hidden">
            <LoginSection />
        </div>
        <button onClick={handleOpen} className="  login-btn" >Get Started </button>
        </div>         


        </>
    )
}

export default Login