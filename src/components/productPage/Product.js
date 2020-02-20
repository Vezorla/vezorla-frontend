import React,{Component} from 'react'
import Stepper from '../common/Stepper/Stepper'
import CardPrice from './CardPrice'
import CircularProgress from '@material-ui/core/CircularProgress';

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


const trueData ={

    name:'hello',
    description: 'helloA',
    subdescription:'helloB',
    currentprice: 123,
    oldprice: 1235,
    prodId: 1,
    imageOne: "imageOne",
    imageTwo: "imageTwo",
    imageThree: "temp",
    imageFour: "temps"

}


//TODO make css for width

//this need function pass from App so it can associate with cart in header also match is for react route
class Product extends Component{

    //constructor
    constructor(props){
        super(props);
        this.state = {
            product: '',
            quantity: 0,
            loading: false,
            imgs: [],
        }
        this.setProduct = this.setProduct.bind(this)
        this.setQuantity = this.setQuantity.bind(this)
        this.setLoading = this.setLoading.bind(this)
        this.setImgs = this.setImgs.bind(this)
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

    setImgs(imageMain, imageOne, imageTwo, imageThree){
        let images = [];
        if(imageOne != null){
            images.push(imageOne);
        }
        if(imageTwo != null){
            images.push(imageTwo);
        }
        if(imageThree != null){
            images.push(imageThree);
        }
        if(imageMain != null){
            images.push(imageMain);
        }

        this.setState({imgs:images});
    }

    //fetch quantity and product information
    fetchData = async ()=>{
        this.setLoading(true);
        const jsonQuantity = await fetch(`http://localhost:8080/api/customer/inventory/product/quantity/${this.props.prodId}`);
        if(jsonQuantity.ok){
            const quantity = await jsonQuantity.json();
            this.setQuantity(quantity);
        }

        const jsonData = await fetch(`http://localhost:8080/api/customer/inventory/product/${this.props.prodId}`);
        const data = await jsonData.json();
        this.setProduct(data);
        this.setImgs(data.imageOne, data.imageTwo, data.imageThree, data.imageMain);
        this.setLoading(false);
    }

    // fetch data again when the component mount
    componentDidMount(){
        this.fetchData();
    }

    render(){
        return (
            this.state.loading?
            <CircularProgress />
            :
            <div>
                <h1>{this.state.product.name}</h1>
                    <Stepper imgs={this.state.imgs}/>
                    <CardPrice id={this.props.prodId} quantity={this.state.quantity} price={this.state.product.price} addCartHandle={this.props.addCartHandle}/>
                
                <section style={{marginLeft: "8%", marginRight: "8%", color: "#0C3658"}} >
                    <h1 style={{fontSize: "2em", letterSpacing: "0.09em", textTransform: "uppercase"}}>Description</h1>
                    <span style={{fontSize: "1.3em", letterSpacing: "0.07em"}}>
                    {this.state.product.description}
                    </span>
                </section>
            </div>
        )
    }
    
}

export default Product;