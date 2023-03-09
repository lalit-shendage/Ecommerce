import React from 'react'

const CartItems = (props) => {
    let { title, price, id} = props;

    // calculating total amount 
    let amount=0
    const totalPrice={
        totalPrice:(amount + price)
    }

  return (
    <div>
      <div className="card-body ">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Rs.{price}</p>
    </div>
        <div key={id}>
          <p>{`${title} - ${price}`}</p>
          </div>
          <p>Total price: ${totalPrice}</p>
    </div>
  )
}

export default CartItems
