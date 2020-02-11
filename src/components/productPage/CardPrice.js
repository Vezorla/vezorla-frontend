import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grid from '@material-ui/core/Grid';

// props: productid, price, quantity, maybe oldPrice?

// TODO change helper props to better phrase
function CardPrice(props) {

    const [max, setMax] = React.useState(props.quantity);
    const [value, setValue] = React.useState('1')

    let onChangeHandle = (e)=>{
        setValue(e.target.value);
    }

    function temp(){
        onClickHandler();
    }

    const onClickHandler = async () =>{
        let data = '';

        let jsonData = await fetch(`http://10.185.150.236:28590/api/customer/cart/add/${props.id}`, {
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
        
        //add to cart sucess
         if(data === true){
            props.addCartHandle(value)  

         }
        
    }

    const getNewQuantity = async () =>{
        let jsonData = await fetch('url');
        let data = await jsonData.json();
        setMax(data);
    }

    return (
        <Grid item xs={12} md={6}>
            <Grid container justify="center">
                <Grid item xs={10} md={6}>
                    {/* Card container for the price, quantity, add to card */}
                    <Card>    
                        <CardContent>
                            <form className="someclass" noValidate autoComplete="off">
                                <h1>${props.price}</h1>
                                <TextField
                                    id="standard-number"
                                    label="Quantity"
                                    helperText={(value > max || value < 0)?"Invalid quantity":" "}
                                    type="number"
                                    value={value}
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
                                        onClick={temp} //this addCartHanle need to be pass from App so it can trigger with header
                                        disabled={(value > max || value < 1)?true:false}
                                    >
                                        Add to Cart
                                    </Button>
                                </CardActions>
                            </form>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>      
        </Grid>
    )
}

export default CardPrice;