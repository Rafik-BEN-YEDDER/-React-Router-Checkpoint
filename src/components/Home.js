import React from 'react'
import ListeOfMovies from './ListeOfMovies'
import NavBar from './NavBar'

function Home({input,setInput,StarSearsh,setStarSearsh,AddMovie,movies,ff}) {
  return (
    <div>
        <NavBar input={input} setInput={setInput} StarSearsh={StarSearsh} setStarSearsh={setStarSearsh} AddMovie={AddMovie} />
        <ListeOfMovies movies={movies} input={input} StarSearsh={StarSearsh} ff={ff}/>
    </div>
  )
}

export default Home