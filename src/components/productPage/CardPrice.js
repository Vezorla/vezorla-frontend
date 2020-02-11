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

    let max = props.quantity;
    const [value, setValue] = React.useState('1')

    let onChangeHandle = (e)=>{
        setValue(e.target.value);
    }

    const onClickHandler = async (e) =>{
        // let json = await fetch(`url/${props.id}`, {
        //     method: 'post',
        //     headers:{
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(value)
        // })
        // let data = await json.json();

        //add to cart sucess
        // if(data === true){
            props.addCartHandle()
        // }
        
    }

    return (
        <Grid item xs={12} md={6}>
            <Grid container justify="center">
                <Grid item xs={10} md={6}>
                    {/* Card container for the price, quantity, add to card */}
                    <Card style={{border: "1px solid black", color: "#0C3658"}}>    
                        <CardContent>
                            <form className="someclass" noValidate autoComplete="off">
                                <h1>${props.price}</h1>
                                <TextField
                                    id="standard-number"
                                    label="Quantity"
                                    helperText={(value > max || value < 1)?"Number is wrong":" "}
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
                                        onClick={onClickHandler} //this addCartHanle need to be pass from App so it can trigger with header
                                        style={{backgroundColor: "#D0C50A", color: "#0C3658", padding: ".75em", boxShadow: "0 5px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}}
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