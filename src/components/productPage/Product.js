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
                    <Stepper imgs={this.state.product.image}/>
                    <CardPrice id={this.props.prodId} quantity={this.state.quantity} price={this.state.product.currentprice} addCartHandle={this.props.addCartHandle}/>
                
                <section style={{marginLeft: "8%", marginRight: "8%", color: "#0C3658"}} >
                    <h1 style={{fontSize: "2em", letterSpacing: "0.09em", textTransform: "uppercase"}}>Description</h1>
                    <span style={{fontSize: "1.3em", letterSpacing: "0.07em"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac massa sagittis, eleifend augue id, varius nisl. Praesent eget sapien nisi. Maecenas in mauris vel nisi vehicula varius non quis nulla. Quisque maximus tempor mi sed scelerisque. In imperdiet ipsum ac sem congue, eget fringilla sem vehicula. Pellentesque laoreet lacus ante, et malesuada nunc ultricies eu. Nulla in maximus eros. Nunc sagittis sed tellus sit amet sodales. In vel diam nec justo scelerisque tincidunt. Curabitur ultrices mi nisi, non bibendum magna volutpat vel. Morbi sagittis pulvinar erat.

Nullam in varius magna, quis rhoncus ex. Mauris mollis eros eget dui vulputate efficitur. Cras mi felis, facilisis ut nisi a, porta rhoncus tortor. Fusce dignissim eros vehicula ligula rutrum condimentum. Cras nec arcu laoreet, consectetur erat id, finibus nisl. Vivamus a diam quam. Fusce et lectus magna. Aenean tincidunt dolor vitae ante rhoncus, vel egestas nibh hendrerit. Aenean nec tempus leo. Aenean quam ligula, ornare ac tellus quis, sagittis porttitor lorem. Morbi eget ante at augue tempus accumsan at in tortor. Donec mattis scelerisque aliquet. Donec molestie augue eu tellus lobortis, eu tempor est mollis. Mauris suscipit consectetur eleifend. Integer blandit massa eu enim vehicula, ut ornare enim faucibus. Pellentesque aliquam, ex ultricies aliquam vulputate, quam tellus ornare elit, sit amet vulputate lectus tellus eget felis. 
                    </span>
                </section>
            </div>
        )
    }
    
}

export default Product;