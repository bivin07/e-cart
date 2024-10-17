import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../Redux/slice/productSlice';


function Header( {insideHome}) {
  const dispatch = useDispatch()

  const[wishlistcount,setwishlistCount]=useState(0)
  const [cartCount,setCartCount]=useState(0)

  const{wishlist}=useSelector((state)=>state.wishlistReducer)

  const cart =useSelector((state)=>state. cartReducer)


useEffect(()=>{
  setwishlistCount(wishlist?.length)
setCartCount(cart.length)
},[wishlist,cart])




  return (
    <div>
       <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:1}}>
      <Container>
        <Navbar.Brand > <Link to={'/'} style={{color:"white",fontWeight:"bold",textDecoration:"none"}}> <i class="fa-solid fa-cart-shopping fa-beat"></i> E-cart </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


          <Nav className="ms-auto">
       {insideHome&&   <Nav.Link  >
       <input type="text" className='form-control ' style={{width:"500px"}} placeholder='Serch products' onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} />
         </Nav.Link>
}

            <Nav.Link className='btn btn-outline-light' > <Link to={'/Wishlist'} style={{color:"black",fontWeight:"bold",textDecoration:"none"}}> <i class="fa-solid fa-heart text-danger"></i> Wishlist 
             <Badge bg="success rounded ms-2">{wishlistcount}</Badge>  </Link></Nav.Link>
            
           
            <Nav.Link className='btn btn-outline-light' > <Link to={'/Cart'} style={{color:"black",fontWeight:"bold",textDecoration:"none"}}>  <i class="fa-solid fa-cart-shopping"></i> cart  
            <Badge bg="success rounded ms-2">{cartCount}</Badge>  </Link></Nav.Link>
       </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
