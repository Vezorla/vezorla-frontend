import React, { Component } from 'react'
import Cart from '../view/Cart'
let dummyData=[
    {
        product:{
            prodId: 1,
            name: "abc",
            price: 888,
            imageMain: 'asd',
        },
        quantity: 5
    },
    {
        product:{
            prodId: 2,
            name: "qwe",
            price: 777,
            imageMain: 'sda',
        },
        quantity: 10
    },
    {
        product:{
            prodId: 3,
            name: "rew",
            price: 999,
            imageMain: 'das',
        },
        quantity: 6
    },
]


class CartContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            list : dummyData,
            stage: ''
        }

        this.setList = this.setList.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    timeOutVar = [];

    //---Setter for state-----
    setList = (listVal) =>{
        this.setState({list: listVal});        
    }

    setStage = (stageVal) => {
        this.setState({stage: stageVal})
    }

    onChange = (prodId, newVal) => {
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
    onDelete = /*async*/ (prodId) => {
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

    fetchData = async () => {
		this.setStage('loading');
		
		const data = await fetch(`url`, {
            method: 'GET',
            credentials:'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				return res.json();
			})
			.catch((err) => {
				this.setStage('error');
				return null;
			});
		if (data !== null) {
			this.setList(data);
			this.setStage('done');
		}
	};

    componentDidMount(){
        this.fetchData();
    }

    render() {
        return (
            <div>
                <Cart {...this.state} onDelete={this.onDelete} onChange={this.onChange}/>
            </div>
        )
    }
}
export default CartContainer;