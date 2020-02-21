import React, { Component } from 'react'
import LineItemList from './LineItemList'
import img1 from '../../assets/images/img-1.JPG'
import img2 from '../../assets/images/img-2.JPG'
import img3 from '../../assets/images/img-3.JPG'

let dummyData=[
    {
        product:{
            prodId: 1,
            name: "abc",
            price: 888,
            imageMain: img1,
        },
        quantity: 5
    },
    {
        product:{
            prodId: 2,
            name: "qwe",
            price: 777,
            imageMain: img2,
        },
        quantity: 10
    },
    {
        product:{
            prodId: 3,
            name: "rew",
            price: 999,
            imageMain: img3,
        },
        quantity: 6
    },
]

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            list : dummyData,
        }

        this.setList = this.setList.bind(this);
        this.onChangeValueHandler = this.onChangeValueHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    timeOutVar = [];

    //---Setter for state-----
    setList = (listVal) =>{
        
        this.setState({list: listVal});
        
    }

    onChangeValueHandler = (prodId, newVal) => {
        this.timeOutVar.forEach(timeout => clearTimeout(timeout))
        let tempList = this.state.list.map(lineItem => {
            if(lineItem.product.prodId === prodId){
                lineItem.quantity = newVal;
            }
            return lineItem;
        });

        this.setList(tempList);
        this.timeOutVar.push( setTimeout(()=>{
            console.log('a')
            //put data.
        },5000) );
    }


    //-----function delete product----
    onDeleteHandler = /*async*/ (prodId) => {
        // let jsonData = await fetch(`http://url/${prodId}`, {
        //     method: 'DELETE',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(prodId)
        // })

        // if(jsonData.ok){
        //     let data = await jsonData.json();
        //     if(data === true){
                
                let newList = this.state.list.filter(lineItem => 
                    lineItem.product.prodId !== prodId
                );
                
                this.setList(newList)
        //     }
        // }      
    }


  
    render() {
        return (
            <div>
                <LineItemList list={this.state.list} onDeleteHandler={this.onDeleteHandler} onChangeValueHandler={this.onChangeValueHandler}/>
            </div>
        )
    }
}
