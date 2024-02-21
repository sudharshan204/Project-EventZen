import React from 'react'
import bg from '../Images/event.png'
import { Outlet, useNavigate } from 'react-router-dom'
import '../Nav/Nav.css'
import NavSlide from './NavSlide'
import img from "../Images/logO.png"
import Birthday from '../Birthday/Birthday'
const Nav = () => {
    const navigate=useNavigate();
    const Click = () =>
    {
        navigate('./b')
    }
    const ClickLogin = () =>
    {
        navigate('./')
    }
    const ClickSignUp = () =>
    {
        navigate('./s')
    }
    const ClickHome = () =>
    {
        navigate('./h')
    }
  return (
    <div>
        <br></br>
        <ul style={{listStyle:'none',display:'flex',color:'white',paddingBottom:'30px'}}>
            
            {/* <li style={{paddingLeft:'10px'}}>

                <a href="" onClick={ClickHome}>EVENTZEN</a>
            </li> */}
            <li>
                <a href='/h'><img src={img} height={50} width={50} style={{borderRadius:'50%'}}></img></a>
            </li>
            <li style={{paddingLeft:'900px'}}>
            <NavSlide/>
            </li>
            <li style={{paddingLeft:'30px'}}>
            <a href="/a" >ABOUTUS</a>
            </li>
            <li style={{paddingLeft:'30px'}}>
            <a href="/co" >CONTACTUS</a>
            </li>
            <li style={{paddingLeft:'30px'}}>
            <a href="" onClick={ClickLogin}>LOGIN</a>
            </li>
            <li style={{paddingLeft:'30px'}}>
            <a href="" onClick={ClickSignUp}>SIGN UP</a>
            </li>
        
        <br></br>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Nav