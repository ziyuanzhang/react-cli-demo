import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';

const NavBar = () =>(
<div>
    <div>
        <NavLink exact  className="blue" to='/'>Home</NavLink> |&nbsp;
        <NavLink className="blue" activeClassName='active' to='/HomeB' >HomeB</NavLink> |&nbsp;
        <NavLink className="blue" activeClassName='active' to='/HomeC'>HomeC</NavLink> |&nbsp;
        <NavLink className="blue" activeClassName='active' to='/routeParam/123'>route Param</NavLink> |&nbsp;
        <NavLink className="blue" activeClassName='active' to='/404' >404</NavLink> |&nbsp;
        <NavLink className="blue" activeClassName='active' to='/redirect' >Redirect</NavLink>
    </div>
</div>
)
   
export default NavBar;