import React, { Component } from 'react'
import Discount from './Discount'
import Payment from './Payment'
import Review from './Review'
import ShippingInfo from'./ShippingInfo'
import ProcessBar from '../common/Stepper/ProcessBar'


export default class CheckoutPage extends Component {
   constructor(props){
        super(props);
        this.state ={
            stage : 1
        }
        this.setStage = this.setStage.bind(this); 
        this._switchCase = this._switchCase.bind(this); 
        
   }
   steps = ['Shipping Information', 'Discount', 'Review', 'Payment']
   setStage(newStage){
       this.setState({stage:newStage})
   }

   _switchCase(stageVal){
        switch(stageVal){
            case 2:
               return <Discount setStage={this.setStage}/>
            case 3:
                return <Review setStage={this.setStage}/>
            case 4:
                return <Payment setStage={this.setStage}/>
            default:
                return <ShippingInfo setStage={this.setStage}/>
        }
   }
   
    render() {
        return (
            <div>
                {this._switchCase(this.state.stage)}
                <ProcessBar stage={this.state.stage} steps={this.steps} />
            </div>
        )
    }
}
