import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function MoviesCard({movie}) {
  return (
    <Link to={`/movie/${movie.imdbID}`} state={movie} style={{textDecoration: "none", color: "black"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Plot}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default MoviesCard