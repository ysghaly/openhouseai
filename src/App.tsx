import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import stockPhoto from './assets/AdobeStock_642180565_Preview.jpeg';
import Home from "./pages/Home";
import Community from './pages/Community';

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



let router_list: any[] = [];
let community_names: string[] = [];

createCommunityPages();



communities.forEach((community: any, index: number) => {
  community_names.push(community.name);
  community_names.sort();
});


function createCommunityPages(){
  

  communities.forEach((community: any, index: number) => {
    router_list.push(
      <Route path={"community/"+community.name} element={<Community community_data={communities[index]} homes={homes} community_names={community_names}/>} />
    );
  });
}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home communities={communities} homes={homes} community_names={community_names} />} />
          {router_list}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
