import React, {Component} from 'react';
import { Navbar, Container, Nav, FormControl, Button, Form} from 'react-bootstrap';
import logo from './logo192.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
import Table from '../Pages/Tableca';
import Tableca from '../Pages/Tableca';

export default class Header extends Component{
    render() {
        return(
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img 
                        src={logo}
                        heigt="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/table"> Table </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/table" component={Tableca} />
                </Switch>
            </Router>
            </>
        )
    }
}