import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


/**
 * @author Minh Lam
 * @description Function Component for  CardPrice
 * This component contains TextField component (quantity selector) and Button (add to cart button)
 * props:
 *      - productId: product id
 *      - price: price of the product
 *      - quantity: stock quantity
 *      - oldPrice: maybe not now
 */
// TODO change helper props to better phrase
// TODO: REMOVE NUMBER INCREMENTER/DECTEMENTER
function CardPrice(props) {

    //---state---
    const [max, setMax] = React.useState(props.quantity);
    const [value, setValue] = React.useState('1')

    //---handler for change the value of quantity input---
    let onChangeHandle = (e)=>{
        setValue(e.target.value);
    }

    //---handler for add item to cart---
    const onClickHandler = async () =>{
        let data = '';

        let jsonData = await fetch(`http://localhost:8080/api/customer/cart/add/${props.id}`, {
            method: 'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(value)
        })

        if(jsonData.ok){
            data = await jsonData.json();
        }

        //add to cart success
         if(data === true){
            props.addCartHandle(value)

         }
        
    }

    //---when add to cart, check the quantity again---
    const getNewQuantity = async () =>{
        let jsonData = await fetch('url');
        let data = await jsonData.json();
        setMax(data);
    }

    return (

        <Card style={{border: "1px solid black", color: "#0C3658", width: "65%", marginLeft: "auto", marginRight: "auto", marginTop: "5vh", marginBottom: "5vh", textAlign: "center"}}>
            <CardContent>
                <form className="someclass" noValidate autoComplete="off">
                    <h1>${props.price}</h1>
                    <TextField
                        id="standard-basic"
                        label="Quantity"
                        helperText={(value > max || value < 0)?(max===0?"Out of stock":"Invalid quantity"):" "}
                        type="number"
                        value={max===0 ?0 : value}
                        placeholder="Enter Quantity"
                        error={(value > max || value < 1)?true:false}
                        inputProps={{
                            max: max,
                            min: 1,
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={onChangeHandle}
                    />
                    <CardActions>
                        <Button
                            size="medium"
                            endIcon={<ShoppingCartIcon/>}
                            onClick={onClickHandler} //this addCartHanle need to be pass from App so it can trigger with header
                            style={{backgroundColor: "#D0C50A", color: "#0C3658", padding: ".75em", boxShadow: "0 5px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)", margin: "auto", maxWidth: "65%"}}
                            disabled={(value > max || value < 1)?true:false}
                        >
                            Add to Cart
                        </Button>
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    )
}

export default CardPrice;