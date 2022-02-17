import React from 'react';
import {Card,Button} from 'react-bootstrap'
import { Rate } from 'antd';
import { Link } from 'react-router-dom';
function MovieCard({movie,ff}) {
    return (
        <div>
            
            
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.posterUrl} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Card.Text> <a href={movie.trailer}>{movie.trailer}</a> </Card.Text>
                <Rate  defaultValue={movie.rate} />
                
            </Card.Body>
            <Link to={`/movie/${movie.title}`}><Button variant="outline-success" onClick={()=>ff(movie)} >info</Button></Link>
            </Card>
            
        </div>
    )
}

export default MovieCard;
