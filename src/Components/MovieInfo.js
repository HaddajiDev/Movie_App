import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function MovieInfo() {
    const location = useLocation();
    const { state } = location;
  return (
    <div className='container'>
        <div className='con_1'>
            <div className='info_con'>
                <h1><b>{state?.Title}</b></h1>
                <h4>{state?.Plot}</h4>
                <h5><b>Genre : </b>{state?.Genre}</h5>
                <h5><b>Language : </b>{state?.Language}</h5>
                <h5><b>Country : </b>{state?.Country}</h5>
                <h5><b>Actors : </b>{state?.Actors}</h5>
                <h5><b>Director : </b>{state?.Director}</h5>
                <h5><b>Writer : </b>{state?.Writer}</h5>
                <h5><b>Awards : </b>{state?.Awards}</h5>
                <h5><b>Released : </b>{state?.Released}</h5>
                <h5><b>Runtime : </b>{state?.Runtime}</h5>
                <h5><b>BoxOffice : </b>{state?.BoxOffice}</h5>
            </div>
            <div className='img_Con'>
                <img src={state?.Poster} />
            </div>
            
        </div>
        
    </div>
  )
}

export default MovieInfo