import React from 'react'
import LineItem from './LineItem'
export default function LineItemList(props) {

    //render list

    const lineItems = props.list.map(lineItem =>
        <LineItem key={lineItem.product.prodId} product={lineItem.product} quantity={lineItem.quantity} onDeleteHandler={props.onDeleteHandler} onChangeValueHandler={props.onChangeValueHandler}/>
    );
    

    return (
        <div>
            {lineItems}
        </div>
    )
}

