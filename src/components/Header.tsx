import React from 'react';
import { useState, useEffect } from "react";
import stockPhoto from '../assets/AdobeStock_642180565_Preview.jpeg';
import { Link } from 'react-router-dom';


function Header(props: any) {

  return (
    <header>
        
        <ul className='desktop-only'>
            <li><a style={{color: "black"}} href='/'><strong>Home</strong></a></li>
          {props.community_names.map((community: any) => (
          <li><a href={"/#"+community}>{community}</a></li>
        ))}
        </ul>
          
        <h1 className='mobile-only'><a style={{color: "black"}} href='/'>Home</a></h1>
          
  
    </header>
  );
}

export default Header;
