import { ExitToApp, LineStyle, Mail, Money, Person, Report, ShoppingCart, Timeline, VpnKey } from '@material-ui/icons';
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './sidebar.css';

const Sidebar = () => {
  let location = useLocation();

  return (
    <div className='sidebar bg-light'>
      <div className="sideWrapper">
        <div className="sidebarMenu">
          <h3 className="siebarTitle">
            Dashboard
          </h3>
          <ul className='sidebarList'>
            <li className={`sidebarListItem ${location.pathname === '/' ? 'active' : ''}`}>
              <LineStyle /> <Link to="/">Home </Link>
            </li>
            <li className='sidebarListItem'>
              <Timeline /> <a href="/">Analytics </a>
            </li>
          </ul>

          <hr className='seprator' />

          <h3 className="siebarTitle">
            Quick Menu
          </h3>
          <ul className='sidebarList'>
            <li className={`sidebarListItem ${location.pathname === '/users' ? 'active' : ''}`}>
              <Person /> <Link to="/users">Customers </Link>
            </li>
            <li className={`sidebarListItem ${location.pathname === '/productlist' ? 'active' : ''}`}>
              <ShoppingCart /> <Link to="/productlist">Products </Link>
            </li>
            <li className='sidebarListItem '>
              <Money /> <Link to="/transactions">Transactions </Link>
            </li>
            <li className='sidebarListItem'>
              <Report />  <a href="/">Reports </a>
            </li>
          </ul>

          <hr className='seprator' />

          <h3 className="siebarTitle">
            Connect
          </h3>
          <ul className='sidebarList'>
            <li className={`sidebarListItem ${location.pathname === '/mail/composemail' ? 'active' : ''}`}>
              <Mail /> <Link to="/mail/composemail">Mail </Link>
            </li>
          </ul>

          <h3 className="siebarTitle">
            Other Pages
          </h3>
          <ul className='sidebarList'>
            <li className={`sidebarListItem ${location.pathname === '/login' ? 'active' : ''}`}>
              <VpnKey /> <Link to="/login">Log In </Link>
            </li>
            <li className={`sidebarListItem ${location.pathname === '/signup' ? 'active' : ''}`}>
              <ExitToApp /> <Link to="/signup">Sign Up </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar