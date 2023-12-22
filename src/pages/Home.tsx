import React from 'react';
import { useState, useEffect } from "react";
import stockPhoto from '../assets/AdobeStock_642180565_Preview.jpeg';
import '../css/Home.css';
import Header from '../components/Header';
import Filter from '../components/Filter';

function Home(props: any) {

    var communities = props.communities;
    var homes = props.homes;
    

  let community_list: any[] = [];
  let filter_list: string[] = [];

  getCommunityInfo();

  // Extracts data from JSON response and arranges it into HTML elements.
  function getCommunityInfo(){
    

    communities.forEach((community: {id:"", name: "", imgUrl: "", group: ""}, index: number) => {
      community_list.push(
        <div key={index} className={'community ' + community.group.split(" ").join("-")} id={community.name}>
          <h2 className='community-name'>{community.name}</h2> 
          {(getAveragePrice(community.id) > 0) && <h3 className='community-price'>Average Price: $ {getAveragePrice(community.id).toLocaleString()}</h3>}
          {(! (getAveragePrice(community.id) > 0)) && <h3 className='community-price'>Average Price: No Properties found</h3>}
          <p><a href={"/community/"+community.name}>See Details</a></p>
          <img alt="No Photo" className='community-image' src={community.imgUrl} 
            onError={
              ({ currentTarget }) => {
                currentTarget.src=stockPhoto;
              }
            }
          />
        </div>
      );
      if (! filter_list.includes(community.group))
        filter_list.push(community.group);

    });
    
    sort_communities(community_list);
  }

  // Alphabetically sorts the array of HTML elements so that it would render in order 

  function sort_communities(arr: any[]){
    let result: any[] = arr.sort(function(first, second){
      return first.props.id.localeCompare(second.props.id);
    });


    return result;
  }

  // Calculates the average price of a community by matching properties' community ID, adding up the total and dividing by number of properties
  function getAveragePrice(id: string): number{
    var avg_price = 0;
    var total_price = 0;
    var num_homes = 0;
    homes.forEach((home: any, index: number) => {
      
      if (home.communityId == id){
        total_price = total_price + home.price;
        num_homes = num_homes + 1;
      }
    });

    if (num_homes > 0)
      avg_price = total_price / num_homes;

    return Math.round(avg_price);

  }


  const error_message = <h1>API call failed</h1>;


  return (
    <div className="home">
      <Header community_names={props.community_names} />
      <div className='main-body'>
        { (props.apiFail == false) &&
          <div>
            
            <h1>Community List</h1>
            <Filter filter_list={filter_list} />
          </div>
        }
        { (props.apiFail == false) &&
          community_list 
        }
        { (props.apiFail == true) && error_message }
      </div>
    </div>
  );
}

export default Home;
