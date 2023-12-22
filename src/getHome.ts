

const getHome = () =>{

        
  
    // getCommunities();
    // getHomes();
    // console.log(getCommunities());
    // console.log(getHomes());
};

interface Community {
    id: string
    name: string
    imgUrl: string
    group: string
  }

interface Home{
    id: string
    communityId: string
    price: number
    area: number
    type: string
}
 
// var communities: Community[] = [];
// var homes: Home[] = [];
// function getCommunities(){

//     var home: Home[] = [{id:"",communityId:"",price:0,area:0,type:""}];
  
//     fetch("https://corsproxy.io/?https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json", {
//         method: 'GET',
//         redirect: 'follow',
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//           'Access-Control-Allow-Methods': "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//           'Origin': 'none'
//         }
//       }) 
//         .then(response => response.json())
//         .then(result =>  {home = result})
//         .catch(error => console.log('error', error));

//         return home;
// }
// function getHomes() {

  
//     fetch("https://corsproxy.io/?https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json", {
//         method: 'GET',
//         redirect: 'follow',
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//           'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
//           'Access-Control-Allow-Methods': "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//           'Origin': 'none'
//         }
//       }) 
//         .then(response => response.json())
//         .then(result => {return result})
//         .catch(error => console.log('error', error));

// }
  

  


export default getHome;
