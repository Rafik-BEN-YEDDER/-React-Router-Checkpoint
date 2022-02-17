import React from 'react';
import MovieCard from './MovieCard';


function ListeOfMovies({input,StarSearsh,movies,ff}) {
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {movies.filter(el=> el.title.toLowerCase().includes(input.toLowerCase()) && el.rate >= StarSearsh ).map(el=><MovieCard movie={el} ff={ff}/> ) }
        </div>
    )
}

export default ListeOfMovies;
