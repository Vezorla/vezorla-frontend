import React,{Component} from 'react'
import Stepper from '../common/Stepper/Stepper'
import CardPrice from './CardPrice'


//this need function pass from App so it can associate with cart in header also match is for react route
class Product extends Component{

    constructor(props,match){
        super(props);
        this.matchs = match
        this.state = {
            product: '',
            quantity: ''
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
        this.fetchData();
    }

    //fetch quantity and product information
    fetchData = async ()=>{
        const jsonQuantity = await fetch(`url/${this.match.params.productid}`);
        const quantity = await jsonQuantity.json();
    
        const jsonData = await fetch(`url/${this.match.params.productid}`);
        const data = await jsonData.json();

        this.setQuantity(quantity);
        this.setProduct(data);
    }

    

    render(){
        return (
            <div>
                <h1>{this.state.product.name}</h1>
                <Stepper imgs={this.state.product.image}/>
                <CardPrice id={this.match.params.productid} quantity={this.state.quantiy} price={this.state.product.currentprice} addCartHandle={this.props.addCartHandle}/>
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