import React from 'react'
import Watchlist from './Watchlist'

function MoviePoster({movieObj,image,title,handleSetWatchList,handeRemoveWatchList,watchlist}) {

  function doseContain(movieObj){
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id === movieObj.id)
        return true
    }
    return false
  }
  return (
    <div className='h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col items-end justify-between'  style={{backgroundImage:`url(https://media.themoviedb.org/t/p/w600_and_h900_face/${image})`}}>
      {doseContain(movieObj)?
      <div onClick={()=>{handeRemoveWatchList(movieObj)}} className='m-4 flex justify-center h-8 w-9 items-center rounded-l bg-black'>&#10060;</div>
      :
      <div onClick={()=>{handleSetWatchList(movieObj)}} className='m-4 flex justify-center h-8 w-9 items-center rounded-l bg-black '>&#128525;</div>
      }

        <div className='text-white bg-cover bg-blue-900/60 p-4  mt-40 w-full'>{title}
        </div>
    </div>
  )
}

export default MoviePoster