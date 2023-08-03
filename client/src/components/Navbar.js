import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar' >
        <img className='Logo' src="/img/Logo.png" alt="" />
        <ul>
            <li><Link className='nav-link'>Über uns</Link></li>
            <li><Link className='nav-link'>Leistungen</Link></li>
            <li><Link to='/login'><button className="redbtn">Einloggen</button></Link></li>
        </ul>
    </div>
  )
}

export default Navbar;