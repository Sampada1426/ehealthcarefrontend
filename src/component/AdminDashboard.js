import React, { Component } from 'react';
import AdminNav from './AdminNav';
import './AdminMed.css';

import { Link } from 'react-router-dom';

export class AdminDashboard extends Component{
    render(){
        return(
            <div className='App'>
                <AdminNav/>
                <div className='dashboard'>
                    <p className='dashtext'>Welcome Admin,</p>
                    <p className='dashtext1'>Checkout the User List & Medicine List below.</p>
                    <div className='dash'>
                        <div className='dashbox'>
                            <p className='addview'>User List</p>
                            <Link className='icon1' to="/admin/userlist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 86 86" fill="none">
  <path d="M43 43C54.8787 43 64.5 33.3787 64.5 21.5C64.5 9.62125 54.8787 0 43 0C31.1213 0 21.5 9.62125 21.5 21.5C21.5 33.3787 31.1213 43 43 43ZM43 10.75C48.9125 10.75 53.75 15.5875 53.75 21.5C53.75 27.4125 48.9125 32.25 43 32.25C37.0875 32.25 32.25 27.4125 32.25 21.5C32.25 15.5875 37.0875 10.75 43 10.75ZM43 48.375C28.6488 48.375 0 55.5775 0 69.875V86H86V69.875C86 55.5775 57.3512 48.375 43 48.375ZM75.25 75.25H10.75V69.9287C11.825 66.0588 28.4875 59.125 43 59.125C57.5125 59.125 74.175 66.0587 75.25 69.875V75.25Z" fill="url(#paint0_linear_2_1803)"/>
  <defs>
    <linearGradient id="paint0_linear_2_1803" x1="38.4737" y1="86" x2="38.4737" y2="-1.29801e-06" gradientUnits="userSpaceOnUse">
      <stop stop-color="#40B3DA"/>
      <stop offset="1" stop-color="#073667"/>
    </linearGradient>
  </defs>
</svg>
                            </Link>
                        </div>
                        <div className='dashbox'>
                            <p className='addview'>Medicine List</p>
                            <Link className='icon2' to="/admin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 122 122" fill="none">
  <path d="M30.1948 15.25H87.5281V24.8056H30.1948V15.25ZM82.7503 29.5833H34.9725C29.717 29.5833 25.417 33.8833 25.417 39.1389V91.6944C25.417 96.95 29.717 101.25 34.9725 101.25H82.7503C88.0059 101.25 92.3059 96.95 92.3059 91.6944V39.1389C92.3059 33.8833 88.0059 29.5833 82.7503 29.5833ZM77.9726 72.5833H66.0281V84.5278H51.6948V72.5833H39.7503V58.25H51.6948V46.3056H66.0281V58.25H77.9726V72.5833Z" fill="url(#paint0_linear_2_1813)"/>
  <defs>
    <linearGradient id="paint0_linear_2_1813" x1="55.341" y1="101.25" x2="55.341" y2="15.25" gradientUnits="userSpaceOnUse">
      <stop stop-color="#40B3DA"/>
      <stop offset="1" stop-color="#073667"/>
    </linearGradient>
  </defs>
</svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }    
}
