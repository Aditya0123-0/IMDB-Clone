import React, { useEffect, useState } from 'react'
import geners from '../utilities/Geners'

function Watchlist({watchlist,setWatchList,handeRemoveWatchList}) {

  const [search, setSearch] = useState('')
  const [generList, setGenerList] = useState(['All Geners'])
  const [currGener, setCurrGener] = useState('All Gener')

  let handelSearch = (e)=>{
    setSearch(e.target.value)
  }

  let handleCurrGener =(gener)=>{
    setCurrGener(gener)
  }

let setIncreasing = () => {
  let sortedIncreasing = [...watchlist].sort((movieA, movieB) => {
    return movieA.vote_average - movieB.vote_average;
  });

  setWatchList(sortedIncreasing);
};

let setDecreasing = () => {
  let sortedDecreasing = [...watchlist].sort((movieA, movieB) => {
    return movieB.vote_average - movieA.vote_average;
  });

  setWatchList(sortedDecreasing);
};

useEffect(()=>{
  let temp = watchlist.map((movieObj)=>{
    return geners[movieObj.genre_ids[0]]
  })
  setGenerList(['All Geners',...temp])
  console.log(temp)
},[watchlist])

  return (
    <>
    <div className='flex justify-center flex-wrap m-4'>
      {generList.map((gener)=>{
       return <div onClick={()=>{handleCurrGener(gener)}} key={gener} className={currGener== gener?'flex justify-center items-center h-[3rem] w-[9rem] bg-blue-600 rounded-xl text-white font-bold mx-4':'flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4'}>{gener}</div>
      })}

    </div>
    <div className='flex justify-center my-4'>
      <input onChange={handelSearch} value={search} type="text" placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-blue-600 outline-none px-4'/>

    </div>
    <div className=' overflow-hidden rounded-lg border m-8'>
      <table className='w-full text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th className='flex justify-center'>
              <div onClick={setIncreasing} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
              <div className='p-2'>Rating</div>
              <div onClick={setDecreasing} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
            </th>
            <th>Popularity</th>
            <th>Gener</th>
          </tr>
        </thead>
        <tbody >
          {watchlist.filter((movieObj)=>{
            if(currGener == 'All Gener'){
              return true
            }else{
              return geners[movieObj.genre_ids[0]]== currGener;
            }
          })
          .filter((movieObj)=>{
            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
          }).map((movieObj)=>{
            return (<tr key={movieObj.id} className='border-b-2'>
          <td className='flex item-center px-4 py-6'>
            <img className='h-[6rem] w-[10rem]' src={`https://media.themoviedb.org/t/p/w600_and_h900_face/${movieObj.poster_path}`} alt="" />
            <div className='px-10'>{movieObj.title}</div>
          </td>
          <td>{movieObj.vote_average}</td>
          <td>{movieObj.popularity}</td>
          <td>{geners[movieObj.genre_ids[0]]}</td>
          <td onClick={handeRemoveWatchList} className='text-red-800'>Delete</td>
          </tr>);
          })}
        </tbody>
      </table>
    </div>
    </>
    
  )
}

export default Watchlist