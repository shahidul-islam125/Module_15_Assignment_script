import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

    return (
     <div>
        <div className='navBar'>
            <NavLink className="nav_item" to="/">Home</NavLink> 
            
            <NavLink className="nav_item" to="/register">Register</NavLink> 
        </div>
     </div>
          
    );
};

export default NavBar;

