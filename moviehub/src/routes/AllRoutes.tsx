import TvShowsList from "./../components/TvShowsList"
import MovieList from "./../components/MovieList"
import { Route, Routes } from "react-router"
import SearchList from "./../components/SearchList"
import Trending from "./../components/Trending/Trending"
import Player from "./../components/Player"
import Player1 from "./../components/Player1"



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Trending/>} />
        <Route path = "/movies" element = {<MovieList/>}/>
        <Route path = "/tvshows" element = {<TvShowsList/>}/>
        <Route path = "/search/:searchName/" element={<SearchList/>} />
        <Route path = "/player/:playerId" element={<Player/>}/>
        <Route path = "/player1/:playerId" element={<Player1/>}/>
       
    </Routes>
  )
}

export default AllRoutes