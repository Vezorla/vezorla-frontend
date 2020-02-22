import React from 'react'
import LineItem from './LineItem'

function Cart(props) {
    return (
        <div>
            {props.list.map(lineItem => <LineItem key={lineItem.product.prodId} product={lineItem.product} quantity={lineItem.quantity} onDelete={props.onDelete} onChange={props.onChange}/> )}
        </div>
    )
}
export default Cart;