import React, { useEffect, useState } from "react";
import MoviePoster from "./MoviePoster";
import axios from'axios';
import Pagination from "./Pagination";

function Movies({handleSetWatchList,handelRemoveWatchList,watchlist}) {

  const[movies,setMovies] = useState([])
  const[pageNo, setPageNo] = useState(1)

  const handlePrev = ()=>{
    if(pageNo ===1 ){
      setPageNo(1)
    }else{
    setPageNo(pageNo - 1)
    }
  }

  const handleNext = () =>{
    setPageNo(pageNo + 1)
  }



  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eee92387eded86c9217596d114fe6760&language=en-Us&page=${pageNo}`).then(function(res){
        console.log(res.data.results)
        setMovies(res.data.results)
    })
  },[pageNo])

  return (
    <div className="p-5">
      <div className="text-2xl font-bold m-5 text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-5">

        {movies.map((movie)=>{
          return <MoviePoster key={movie.id} movieObj={movie} image={movie.poster_path} title={movie.original_title} handleSetWatchList={handleSetWatchList} handeRemoveWatchList={handelRemoveWatchList} watchlist={watchlist}/>
        })}
  
      </div>
      <Pagination handlePrev={handlePrev} handleNext={handleNext} page={pageNo} />
    </div>
  );
}

export default Movies;
