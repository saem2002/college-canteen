import React, {  useEffect, useState } from 'react'
import squareOne from './pics/squareOne.jpg'
import MenuCard from './MenuCard'
import { getItems } from '../service/Api'




const Home = ({handleAddItem}) => {
    const [items, setitems] = useState([])
    useEffect(() => {
        const fetchData=async()=>{
            const data=await getItems()
            setitems(data)
        }
        fetchData();
    },[])


    return (
        <>
        <div>
     
        </div>
            <div className="collegeInfo">
                <div >
                    <img src={squareOne} alt="pic" className="collegePic" ></img>
                </div>
                <div className="CollegeDetails">
                    <p>Wanna Check The Details of Your College Food Court?</p>
                </div>
                </div>
            <div className="MenuInfo">
                <div className="Menudetails">
                    <p>Menu of SQUARE ONE </p>  
                    
                </div>

       
            </div>
            <div className="itemslist">
            {items.map((all)=>(
              <div >
              <div className="ItemCards"> 
              <MenuCard all={all} avatarName={all.avatar} title={all.name} img={all.image} aboutdish={all.about} handleAddItem={handleAddItem}/>
              </div>
         
              </div>
        ))}
        </div>
        

        </>
    )
}

export default Home
