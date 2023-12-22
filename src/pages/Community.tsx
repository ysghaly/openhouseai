import React from 'react';
import { useState, useEffect } from "react";
import stockPhoto from '../assets/AdobeStock_642180565_Preview.jpeg';
import '../css/Community.css';
import Header from '../components/Header';



function Community(props: any) {
  
  var homes = props.homes;


  function getProperties(){
  
    var properties: any[] = [];
    homes.forEach((home: any, index: number) => {
      
      if (home.communityId == props.community_data.id){
        properties.push(
          <div key={index} className='property'>
            <h3>{home.type}</h3>
            <h4 className='property-price'>Price: ${(home.price).toLocaleString()}</h4>
            <h5>Area: {home.area}</h5>
          </div>
        );
      }
    });

    return properties;

  }

  var community_homes = getProperties();



  return (
    <div className="community">
      <Header community_names={props.community_names} />
      
      <h1 className='community-title'>{props.community_data.name}, {props.community_data.group}</h1>
      
      <div className='main-body'>

        <div className='main-left'>

          <img alt="No Photo" className='community-image' src={props.community_data.imgUrl} 
              onError={
                ({ currentTarget }) => {
                  currentTarget.src=stockPhoto;
                }
              }
            />
        </div>

        <div className='main-right'>

          <h2>Properties:</h2>

          <div className='property'>
            {((community_homes.length > 0) && props.apiFail == false)  && community_homes}
            {((community_homes.length == 0) && props.apiFail == false)  && <p>No Properties</p>}
            {(props.apiFail == true)  && <p>API call failed. Could not retrieve property info.</p>}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Community;
