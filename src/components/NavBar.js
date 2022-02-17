import React from 'react';
import{Navbar,Container,Form,Button,FormControl}from 'react-bootstrap'
import { Rate } from 'antd';
import AddMoviee from './AddMovie';
function NavBar({setInput,StarSearsh,setStarSearsh,AddMovie}) {

    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Form className="d-flex">
                    <FormControl onChange={(e)=>setInput(e.target.value)}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <AddMoviee  AddMovie={AddMovie}/>
                </Form>
            </Container>
            </Navbar>
            <br/>
            <Rate allowHalf  defaultValue={StarSearsh} onChange={(e)=>setStarSearsh(e)} /> 
            <br/>
            <br/>
        </div>
    )
}

export default NavBar;

