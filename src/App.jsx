import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navigation from "./components/Navigation";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [watchList,setWatchList] = useState([])

  let handelSetWatchList = (movieObj) =>{
    let newWatchList = [...watchList,movieObj]
    localStorage.setItem('movieApp',JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  let handeRemoveWatchList = (movieObj)=>{
    let filterWatchList = watchList.filter((movie)=>{
        return movie.id != movieObj.id
    })
    setWatchList(filterWatchList)
    localStorage.setItem('movieApp', JSON.stringify(filterWatchList))
  }

  useEffect(()=>{
    let movieInLocalStorage = localStorage.getItem('movieApp')
    if(!movieInLocalStorage)
      return
    setWatchList(JSON.parse(movieInLocalStorage))
  },[]

)

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<><Banner/><Movies handleSetWatchList={handelSetWatchList} handelRemoveWatchList={handeRemoveWatchList} watchlist={watchList}/></>} />
          <Route path="/watchlist" element={<Watchlist watchlist={watchList} setWatchList={setWatchList} handeRemoveWatchList={handeRemoveWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
