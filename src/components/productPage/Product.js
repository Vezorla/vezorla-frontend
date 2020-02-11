import React,{Component} from 'react'
import Stepper from '../common/Stepper/Stepper'
import CardPrice from './CardPrice'
import CircularProgress from '@material-ui/core/CircularProgress';
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import img1 from '../../assets/images/img-1.JPG'
import img2 from '../../assets/images/img-2.JPG'

const dummydata = [{
    name:'hello',
    description: 'helloA',
    subdescription:'helloB',
    currentprice: 123,
    oldprice: 1235,
    prodId: 1,
    image: [img1, img2]
}
]


//TODO make css for width 

//this need function pass from App so it can associate with cart in header also match is for react route
class Product extends Component{

    constructor(props){
        super(props);
        this.state = {
            product: dummydata[0],
            quantity: 10,
            loading: false,
        }
        this.setProduct = this.setProduct.bind(this)
        this.setQuantity = this.setQuantity.bind(this)
        this.setLoading = this.setLoading.bind(this)
        
    }

    //setter for state
    setProduct(productVal){
        this.setState({product: productVal})
    }

    setQuantity(quantityVal){
        this.setState({quantity: quantityVal})
    }

    setLoading(loadingVal){
        this.setState({loading: loadingVal})
    }

    //fetch quantity and product information
    fetchData = async ()=>{
        this.setLoading(true);
        const jsonQuantity = await fetch(`url/${this.props.prodId}`);
        const quantity = await jsonQuantity.json();
    
        const jsonData = await fetch(`url/${this.props.prodId}`);
        const data = await jsonData.json();

        this.setQuantity(quantity);
        this.setProduct(data); //need to set [0] maybe
        this.setLoading(false);
    }

    componentDidMount(){
        // this.fetchData();
        console.log('av');
    }

    render(){
        return (
            this.state.loading?
            <CircularProgress />
            :
            <div>
                <h1>{this.state.product.name}</h1>
                <Grid container xs={12} justify='center' spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Stepper imgs={this.state.product.image}/>  
                    </Grid>
                    <CardPrice id={this.props.prodId} quantity={this.state.quantity} price={this.state.product.currentprice} addCartHandle={this.props.addCartHandle}/>
                </Grid>
                
                <section style={{marginLeft: "8%"}} >
                    <h1 >Description</h1>
                    <span>
                        {this.state.product.description}
                    </span>
                </section>
            </div>
        )
    }
    
}

export default Product;