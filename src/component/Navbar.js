import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar =() =>{
    return(
        <div >
            <nav className='navbar'>
                <div className='photoname'>
                    <img paddingLeft='10px' paddingRight='10px' className='logo' alt='LOGO' width='50px' src='https://cdn-icons-png.flaticon.com/512/2966/2966327.png' />
                    <h3 style={{color:"black",paddingRight:"10px"}}>ABC Healthcare</h3>
                </div>
            
              <ul className='navbar-nav'>
                <div className='links'>
                <li className='nav-item m-1'>
                    <Link className='adminbtn' to='/admindashboard'>Admin</Link>
                </li>
                <li className='nav-item m-1'>
                    <Link className='loginbtn' to='/login'>Login</Link>
                </li>
                </div>
              </ul>
            </nav>
        </div>
    )
}
export default Navbar