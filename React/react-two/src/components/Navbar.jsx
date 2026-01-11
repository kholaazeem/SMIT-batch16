import React from 'react'
import ThemeBtn from '../utils/ThemeBtn'

const Navbar = ({title,roll,email}) => {
    
    
  return (
    <>
    <ThemeBtn/>
    <div>{title}</div>
    <h3>{roll}</h3>
    <h4>{email}</h4>
    </>
  )
}

export default Navbar