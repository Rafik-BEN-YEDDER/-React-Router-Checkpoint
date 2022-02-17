
import './App.css';
import {moviesData} from './data/data'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cardd from './components/Cardd';

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [film, setFilm] = useState({})
  const [input, setInput] = useState('')
  const [StarSearsh, setStarSearsh] = useState(0);
  const AddMovie=(x)=>{
    return setMovies([...movies,x])
  }
  const ff=(x)=>{
    return setFilm(x)
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home input={input} setInput={setInput} StarSearsh={StarSearsh} setStarSearsh={setStarSearsh} AddMovie={AddMovie} movies={movies} ff={ff}/>} />
        <Route path='/movie/:name' element={<Cardd movie={film} />}/>
      </Routes>
    </div>
  );
}

export default App;
