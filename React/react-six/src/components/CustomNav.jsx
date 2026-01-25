import React from 'react'
import {Link} from 'react-router-dom'

const CustomNav = (props) => {
    console.log(props.children);
    
  return (
    <div className='container bg-body-tertiary l'>
        <ul className='d-flex justify-content-around'>
            <li><Link to={'/'}>Home </Link></li>
            <li><Link to={'/about'}>about</Link></li>
            <li><Link to={'/contact'}>contact</Link></li>
            <li><Link to={'/product'}>product</Link></li>
        
        </ul>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default CustomNav