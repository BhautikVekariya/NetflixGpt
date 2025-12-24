import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import Header from "./Header"


const Browse =()=>{
   const getNowPlayingMoives = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);

    const json = await data.json();
    console.log(json.results);
   };
  
useEffect(()=>{
  getNowPlayingMoives();
},[])   

    return (
        <div>
            <Header/>
        </div>
    )
}
export default Browse