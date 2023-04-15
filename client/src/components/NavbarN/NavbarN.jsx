import React, {useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import decode from 'jwt-decode'

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser'

import "./NavbarN.css"
const NavbarN = () => {
    var User = useSelector((state) => (state.currentUserReducer))
    const dispatch=useDispatch()
    const navigate=useNavigate();

    const handleLogout = () =>{
      dispatch({type:'LOGOUT'});
      navigate('/')
      dispatch(setCurrentUser(null))
  }
       useEffect(() => { 
        const token =User?.token;
        if(token){
          const decodedToken = decode(token)
          if(decodedToken.exp * 1000 < new Date().getTime()){
            handleLogout()
          }
        }
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
       },[User?.token, dispatch])
  return (
    <>
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">Authentication</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {User=== null ? 
     <Link to='/' className='nav-item nav-links'>      
       <Button variant="primary" className='nav-item nav-links' >LogIn</Button>
     </Link> :

<Link to='/' className='nav-item nav-links li'>  
<div className='logout-'>
<section style={{textDecoration:"none",textAlign:"center",padding:"8px",background:"#009dff",color:"white",borderRadius:'50%'}}>{User.result.username?.charAt(0).toUpperCase()}</section>
<Button variant="primary" className='nav-item nav-links' onClick={handleLogout}>LogOut</Button>
</div>    
</Link>
}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarN