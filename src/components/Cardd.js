import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Cardd({movie}) {
    console.log()
  return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
            </Card.Body>
            <iframe width="285" height="200" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Link to={'/'}><Button variant="outline-success" >Home</Button></Link>
        </Card>
    </div>
  )
}

export default Cardd