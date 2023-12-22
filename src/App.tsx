import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import stockPhoto from './assets/AdobeStock_642180565_Preview.jpeg'


function App() {


  const [communities, setCommunities] = useState( [ {id:"", name: "", imgUrl: "", group: ""}, {id:"", name: "", imgUrl: "", group: ""} ] );
  const [homes, setHomes] = useState([{id:"", communityId: "", price: 0, area: 0, type: ""}]);
  useEffect(() => {

       
    fetch("https://corsproxy.io/?https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json", {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Origin': 'none'
      }
    }) 
      .then(response => response.json())
      .then(result => setCommunities(result))
      .catch(error => console.log('error', error));
       
    fetch("https://corsproxy.io/?https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json", {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        'Origin': 'none'
      }
    }) 
      .then(response => response.json())
      .then(result => setHomes(result))
      .catch(error => console.log('error', error));

},[])





  let community_names: any[] = [];

  getCommunityInfo();

  function getCommunityInfo(){
    

    communities.forEach((community, index) => {
      community_names.push(
        <div key={index} className='community' id={community.name}>
          <h2 className='community-name'>{community.name}</h2> 
          {(getAveragePrice(community.id) > 0) && <h3 className='community-price'>Average Price: $ {getAveragePrice(community.id).toLocaleString()}</h3>}
          {! (getAveragePrice(community.id) > 0) && <h3 className='community-price'>Average Price: N/A</h3>}
          <img alt="No Photo" className='community-image' src={community.imgUrl} 
            onError={
              ({ currentTarget }) => {
                currentTarget.src=stockPhoto;
              }
            }
          />
        </div>
      );
    });
    
    sort_communities(community_names);
  }

  function sort_communities(arr: any[]){
    let result: any[] = arr.sort(function(first, second){
      console.log(first);
      return first.props.id.localeCompare(second.props.id);
    });


    return result;
  }

  function swapImage(image: HTMLImageElement){
    image.src=stockPhoto;
  }

  function getAveragePrice(id: string): number{
    var avg_price = 0;
    var total_price = 0;
    var num_homes = 0;
    homes.forEach((home, index) => {
      
      if (home.communityId == id){
        total_price = total_price + home.price;
        num_homes = num_homes + 1;
      }
    });

    if (num_homes > 0)
      avg_price = total_price / num_homes;

    return total_price;

  }





  return (
    <div className="App">
      <h1>Community List</h1>
        { community_names }
    </div>
  );
}

export default App;
