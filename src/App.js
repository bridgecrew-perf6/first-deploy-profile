import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavUI from './components/header/Nav';
import { Container } from 'react-bootstrap';
import { Navbar, Form, FormControl, Button, Nav, NavDropdown, Image, Col, Row } from 'react-bootstrap';

import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import News from './components/news/News';
import Login from './components/auth/login/Login-container';
import Profile from './components/profile/Profile-container';
import HeaderConnect from './components/header/Nav-container';
import Auth from './components/auth/Auth-container';
import { repeatLogin } from './redux/header-reducer';


function App() {

  

  return (
    <Container className="App">
      <header className="">
        <HeaderConnect/>
      </header>

      
      <Row className="main__box">
        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/news" element={<News/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    
      </Row>
    </Container>

  );
}




export default App;
