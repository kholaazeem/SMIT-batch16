import React from 'react'
import ThemeBtn from '../utils/ThemeBtn'
import { RiLogoutCircleRLine } from "react-icons/ri";


const Navbar = ({title,roll,email}) => {
    
    
  return (
    <>
    <ThemeBtn/>
    <div>{title}</div>
    <h3>{roll}</h3>
    <h4>{email}</h4>
    <RiLogoutCircleRLine />
    </>
  )
}

export default Navbar