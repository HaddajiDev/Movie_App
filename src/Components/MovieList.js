import React, { useEffect, useState } from 'react'
import Names, { Get_Movie } from './Static_Movies';
import MoviesCard from './MoviesCard';

function MovieList() { 
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const Get_Data = async () => {
        try {
            const movieData = await Promise.all(Names.map((el) => Get_Movie(el)));
            setMovie(movieData);     
            console.log(movieData);
        } catch (error) {
            console.error(error);
        }
        };        
        Get_Data();
    }, []);

  return (
    <div className='container list'>
      {movie ? (
        movie.map((el) => (
          <MoviesCard movie={el} />
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );

}

export default MovieList;