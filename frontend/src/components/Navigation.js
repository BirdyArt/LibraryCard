import React, { useState, useEffect } from 'react';
import Login from'./Login';
import Register from'./Register';
import Hero from'./Hero';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/1.png';
import { getCards } from '../actions';
import { useDispatch } from 'react-redux';
import Displaycards from './Displaycards';
import Addcard from './Addcard';



function Navigation() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  const [modalLoginShow, setModalLoginShow] = useState(false);
  const [modalRegShow, setModalRegShow] = useState(false);
  const [modalCardShow, setModalCardShow] = useState(false);

  const logout =() =>{
    dispatch({ type: 'LOGOUT'});
    setUser(null);
  }
  
  return (
  <>
  <Navbar fixed="top" collapseOnSelect expand="md" bg="primary" variant="dark">
    <Navbar.Brand className="text-secondary brandText">
      <img
        alt=""
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}
      LibraryCard
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        {user ?
        <>
        {user.result.imageUrl ? <Image src={user.result.imageUrl} roundedCircle /> : <div id="profileImage">{user.result.name.charAt(0)}</div>}
        <p>{user.result.name}</p>
        <Button className="text-secondary" variant="danger" onClick={() => setModalCardShow(true)}>Add Card</Button>
        <Button className="text-secondary" variant="warning" onClick={logout}>Log Out</Button>
        </>
         : 
        <>
        <Button className="text-secondary" variant="danger" onClick={() => setModalLoginShow(true)}>Log In</Button>
        <Button className="text-secondary" variant="warning" onClick={() => setModalRegShow(true)}>Register</Button>
        </>}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    <Login show={modalLoginShow} setUser={setUser} onHide={() => setModalLoginShow(false)} />
    <Register show={modalRegShow} setUser={setUser} onHide={() => setModalRegShow(false)} />
    <Addcard show={modalCardShow} onHide={() => setModalCardShow(false)} />
    {user ? <Displaycards /> : <Hero />}
  </>
  );
}

export default Navigation;