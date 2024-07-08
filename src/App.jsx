import { useEffect } from "react";
import { useState } from "react";

function App() {
 
  
  let [imageurl,seturl]=useState('');

  let fetchapi=async()=>{
    let url ='https://dog.ceo/api/breeds/image/random';
    let data =await fetch(url);
    console.log(data);
    let jsondata =await data.json();
    console.log(jsondata);
    console.log(jsondata.message);
    seturl(jsondata.message);

  }
  useEffect(()=>{
  fetchapi()
  },[])

  
  
  return(
    <>
    
    <img src={imageurl} ></img>
    <button onClick={fetchapi}>new image</button>
    
    
    
    </>
  )
}

export default App
