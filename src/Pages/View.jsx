import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../Redux/slice/wishlistSlice'
import { addToCart } from '../Redux/slice/cartSlice'


function View() {

  const[product,setProduct]=useState({})
  const{loading}=useSelector((state)=>state.productReducer)

  const{wishlist}=useSelector((state)=>state.wishlistReducer)
  const dispatch=useDispatch()


  const cart=useSelector((state)=>state.cartReducer)

  const{id}=useParams()
  // console.log(id)

useEffect(()=>{
  const products=JSON.parse(localStorage.getItem("products"))
  setProduct(products?.find(product=>product?.id==id))
},[])

const handleWishList=(product)=>{
  const existingProduct=wishlist.find(item=>item.id==product.id)
  if(existingProduct){
    alert("product alredy exist")
  }else{
    dispatch(addToWishlist(product))
  }
}
const handleCart=(product)=>{
  const existingProduct=cart?.find(item=>item.id==product.id)
  if(existingProduct){
    dispatch(addToCart(product))
    alert("items added")
  }else{
    dispatch(addToCart(product))
    alert("item added sucessfully")
  }

}


// console.log(product)


  return (
   

    <div className='mt-5 ' style={{marginTop:'75px'}}>{
      loading?  <div  className='mt-5 text-center fw-bolder'>
         <Spinner animation="border" variant="primary" />Loading....
            </div>:
   
   <div className='container row' style={{marginTop:"100px"}}>
      <div className="col-lg-4">
      <img  style={{width:"100%", height:"400px"}} src={product?.thumbnail} alt="" />
      </div>
      <div className="col-lg-2"></div>
      <div className="col-lg-6">

        <p>Pid:{product?.id}</p>
        <h1>{product.title}</h1>
        <h5 className='fw-bolder'>price: <span style={{color:"red"}}>{product?.price}</span></h5>
        <p>{product.description}</p>
        <div className='d-flex justify-content-between mt-4'>
          
        <Button  className="btn btn-outline-dark" onClick={()=>handleWishList(product)}><i class="fa-solid fa-heart text-danger"></i> Wishlist</Button>
          <Button className="btn btn-outline-dark"onClick={()=>handleCart(product)}><i class="fa-solid fa-cart-shopping"></i> cart</Button>

        </div>
      </div>
    </div>


}
</div>
  )
}

export default View
