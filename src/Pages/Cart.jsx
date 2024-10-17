import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../Redux/slice/cartSlice'

function Cart() {
  const cart=useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()

const[total,setTotal]=useState(0)

useEffect(()=>{
  if(cart?.length>0){
  setTotal(cart?.map(product=>product.totalPrice).reduce((p1,p2)=>p1+p2))
  
  }else{
    setTotal(0)
  }
})





  return (
    <div className='container ' style={{marginTop:"100px"}}>
{
  cart?.length>0?
      <div className="row">
   <div className="col-lg-8">
        <table className='table shadow'>

       <thead>
          <tr>
           <th>#</th>
              <th>Title</th>
              <th>Image</th>
              
              <th>quantity</th>

              <th>Price</th>
              <th>Action</th>
            </tr>
       </thead>

       <tbody>


        {cart?.map((product,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{product.title}</td>
          <td>   <img  style={{width:"300px", height:"150px"}} src={product?.thumbnail} alt="" /></td>
          <td><input type="text"  value={product?.quantity} readOnly/></td>
          <td className='text-danger'>${product.totalPrice}</td>
          <td><button className='btn ' onClick={()=>dispatch(  removeFromCart(product?.id))}><i class="fa-solid fa-trash"></i></button></td>
        </tr>
          ))  }
       </tbody>

    
        </table>

<div className="d-flex justify-content-between">
  <button className='btn btn-danger' onClick={()=>dispatch(emptyCart())}>Empty cart</button>
  <Link to={'/'} style={{textDecoration:"none"}} className='btn btn-success'>Shop-More</Link>

</div>

</div>


      <div className="col-lg-1"> </div>


  <div className="col-lg-3">
        <div className="container border rounded shadow mt-5 p-5 w-100">
       <h1>cart summary</h1>
       <h4>Total products:{cart.length}</h4>
       <h5>Total: <span className='text-danger fw-bolder'>{total}</span></h5>
        </div>
<div className="d-grid">
  <button className='btn btn-success m-3 rounded'>Checkout</button>
</div>
    </div>

   </div>
          :<div className=''>
     <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" />
  <h1 className='text-danger' >your wishlist is empty</h1>

</div>

}



 </div>
  )
}

export default Cart
