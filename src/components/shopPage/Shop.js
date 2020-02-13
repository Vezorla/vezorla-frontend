import React,{Component} from 'react'
import CardList from './CardList'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import img1 from '../../assets/images/img-1.JPG'
import img2 from '../../assets/images/img-2.JPG'
import img3 from '../../assets/images/img-3.JPG'

// const useStyles = makeStyles(theme => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   }));

const dummydata = [{
    name:'hello',
    description: 'helloA',
    subdescription:'$35.00',
    currentprice: '$35',
    oldprice: '$35',
    prodId: 1,
    image: [img1, img2]
},{
    name:'hello2',
    description: 'helloB',
    subdescription:'helloC',
    currentprice: 456,
    oldprice: 9999,
    prodId: 2,
    image: [img2, img3]
},{
    name:'hello2',
    description: 'helloB',
    subdescription:'helloC',
    currentprice: 456,
    oldprice: 9999,
    prodId: 2,
    image: [img2, img3]
},{
    name:'hello2',
    description: 'helloB',
    subdescription:'helloC',
    currentprice: 456,
    oldprice: 9999,
    prodId: 2,
    image: [img2, img3]
},{
    name:'hello2',
    description: 'helloB',
    subdescription:'helloC',
    currentprice: 456,
    oldprice: 9999,
    prodId: 2,
    image: [img2, img3]
}
]

class Shop extends Component{   

    constructor(props){
        super(props);
        this.state = {
            filter: '',
            order: '',
            list: dummydata,
            loading: false,
        }
        this.setFilter = this.setFilter.bind(this);
        this.setOrder = this.setOrder.bind(this);
        this.setList = this.setList.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.fetchData = this.fetchData.bind(this);  
         
    }

    //-------Setter for state-----
    setFilter(filterVal){
        this.setState({filter: filterVal});
    }
    setOrder(orderVal){
        this.setState({order: orderVal})
    }
    setList(listVal){
        this.setState({list: listVal})
    }
    setLoading(loadingVal){
        this.setState({loading:loadingVal})
    }

    // event handler of filter and order. Use to fetch and set the value display
    handleChangeFilter = event => {
        this.setFilter(event.target.value);
    };

    handleChangeOrder = event =>{
       this.setOrder(event.target.value);
    }
       
    fetchData = async () => {
        this.setLoading(true);
        const json = await fetch('url');
        const data = await json.json();
        this.setList(data);
        this.setLoading(false);
    }
    
    // ------fetch on load-------
    componentDidMount(){
        // this.fetchData();  
        console.log('a');
    }
    
    render(){
        return (
            <div>
                {/* ------Filter and Order section--------- */}
                <Grid className="shop--filter" container xs={12} justify='space-around'>

                    {/*-------- Filter --------*/}
                    <Grid item >   
                        <FormControl className="shop--form">
                            <InputLabel id="filter--label">Filter</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.filter}
                            onChange={this.handleChangeFilter}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl> 
                    </Grid>

                

                    {/*-------- Order --------*/}
                    <Grid item >  
                        <FormControl className="shop--form">   
                            <InputLabel id="order--label">Order</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.order}
                            onChange={this.handleChangeOrder}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl> 
                    </Grid>
                </Grid>

                {/* ------List of product ---------*/}
                {this.state.loading?
                <CircularProgress/>:
                <CardList list={this.state.list}/>}
            </div>
        )
    }
    
    }
export default Shop;