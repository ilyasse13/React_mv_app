import React from 'react';
import {useState,} from 'react' ;
import './styles.css';
 import SearchIcon from './search.svg';
 import MovieCard from './movieCard';
// 41630271
const API_URL='http://www.omdbapi.com?apikey=41630271'

const App = ()=> {
const[movies,setMovies]= useState([]);
const[searchTerm,setSearchTerm] = useState()
const searchmovie = async (title)=>{
  const response= await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
setMovies(data.Search);
}
const takeval=(event)=>{
  setSearchTerm(event.target.value);
}


  return (
  
    <div className="App">
      <h1>Movie Time</h1>
      <div className='search'>
            <input  placeholder='search for movie' value={searchTerm} onChange={takeval}/>
            <img src={SearchIcon} alt='search' onClick={()=>searchmovie(searchTerm)}/> 
      </div>
     {
      movies?.length>0
      ?(
        <div className="container">
        {movies.map((movie)=>
        <MovieCard movie={movie}/>
        )}
        </div>
      ):(
        <div className="empty">
          <h2>no movie found</h2>
        </div>
      )
     }
      
    
   
   </div>
     
    
  );
}

export default App;
