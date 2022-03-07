import { Comment, Feedback, LineStyle, Mail, Money, Person, Report, ShoppingCart, Timeline } from '@material-ui/icons';
import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar bg-light'>
      <div className="sideWrapper">
        <div className="sidebarMenu">
          <h3 className="siebarTitle">
            Dashboard
          </h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyle /> <a href="/">Home </a>
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
            <li className='sidebarListItem '>
              <Person /> <a href="/">Users </a>
            </li>
            <li className='sidebarListItem'>
              <ShoppingCart /> <a href="/">Products </a>
            </li>
            <li className='sidebarListItem '>
              <Money /> <a href="/">Transactions </a>
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
            <li className='sidebarListItem'>
              <Mail/> <a href="/">Mail </a>
            </li>
            <li className='sidebarListItem'>
              <Feedback/> <a href="/">Feedback </a>
            </li>
            <li className='sidebarListItem'>
              <Comment/> <a href="/">Messages </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar