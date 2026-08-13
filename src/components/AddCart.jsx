import React, { useState } from 'react'

let AddCart = () => {
    const [quantity,setQuantity]=useState(false);
    function addcarthandle(){

    }
  return (
    <>
    <center>
        <div>
            <br/><br/>
            <img src="https://images.unsplash.com/flagged/photo-1580234820596-0876d136e6d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbnRyb2xsZXIlMjBmb3IlMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D" 
            style={{height:"250px",width:"250px"}} alt="Game"></img>  <br/><br/>
            <input type='number' value={setQuantity}></input>
            <p>{quantity}</p>
            <button onClick={addcarthandle}>Add to Cart</button>
         </div>
    </center>
    </>
  )
}

export default AddCart
