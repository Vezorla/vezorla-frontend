import React,{Component} from 'react'
import Stepper from '../common/Stepper/Stepper'
import CardPrice from './CardPrice'
import CircularProgress from '@material-ui/core/CircularProgress';

/**
 * @author Minh Lam
 * @description Class Component for Product Page.
 * This component contains Stepper (slider for img) and CardPrice (quantity selection and add to cart button)
 * props:
 *      - prodId: product id
 *      - addCartHandle: add to cart function handler. This function associate with header component
 */
//TODO make css for width
class Product extends Component{

    //---Constructor-----
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

    //----Setter for state---
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

    //----fetch quantity and product information---
    fetchData = async ()=>{
        //TODO fetch type of customer and then fetch product base on customer type

        //--fetch for stock quantity---
        this.setLoading(true);
        const jsonQuantity = await fetch(`http://localhost:8080/api/customer/inventory/product/quantity/${this.props.prodId}`);
        if(jsonQuantity.ok){
            const quantity = await jsonQuantity.json();
            this.setQuantity(quantity);
        }
        //---fetch for product information----
        const jsonData = await fetch(`http://localhost:8080/api/customer/inventory/product/${this.props.prodId}`);
        const data = await jsonData.json();
        this.setProduct(data);
        this.setImgs(data.imageOne, data.imageTwo, data.imageThree, data.imageMain);
        this.setLoading(false);
    }

    //---fetch onload---
    componentDidMount(){
        this.fetchData();
    }

    render(){
        return (
            // If fetching then display loading else display the product information
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