import React,{Component} from 'react'
import Stepper from '../common/Stepper/Stepper'
import CardPrice from './CardPrice'

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

//this need function pass from App so it can associate with cart in header also match is for react route
class Product extends Component{

    constructor(props){
        super(props);
        this.state = {
            product: dummydata[0],
            quantity: 10
        }
        this.setProduct = this.setProduct.bind(this)
        this.setQuantity = this.setQuantity.bind(this)
    }
    //setter for state
    setProduct(productVal){
        this.setState({product: productVal})
    }

    setQuantity(quantityVal){
        this.setState({quantity: quantityVal})
    }

    //fetch on load
    componentDidMount(){
        // this.fetchData();
        console.log(this.props.prodId)
    }

    //fetch quantity and product information
    fetchData = async ()=>{
        const jsonQuantity = await fetch(`url/${this.props.prodId}`);
        const quantity = await jsonQuantity.json();
    
        const jsonData = await fetch(`url/${this.props.prodId}`);
        const data = await jsonData.json();

        this.setQuantity(quantity);
        this.setProduct(data); //need to set [0] maybe
    }

    

    render(){
        return (
            <div>
                <h1>{this.state.product.name}</h1>
                <Stepper imgs={this.state.product.image}/>
                <CardPrice id={this.props.prodId} quantity={this.state.quantiy} price={this.state.product.currentprice} addCartHandle={this.props.addCartHandle}/>
                <section>
                    <h1>Description</h1>
                    <span>
                        {this.state.product.description}
                    </span>
                </section>
            </div>
        )
    }
    
}

export default Product;