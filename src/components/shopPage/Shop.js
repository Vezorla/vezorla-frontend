import React, {
    Component
} from 'react'
import CardList from './CardList'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';


/**
 * @author Minh Lam
 * @description Class Component for Shop Page.
 * This component contains 2 FormControl (dropdown filters) and 1 CardList (list of product)
 */
class Shop extends Component {

    //----Constructor---
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
            order: '',
            list: [],
            loading: false,
        }
        this.setFilter = this.setFilter.bind(this);
        this.setOrder = this.setOrder.bind(this);
        this.setList = this.setList.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.fetchData = this.fetchData.bind(this);

    }

    //-------Setter for state-----
    setFilter(filterVal) {
        this.setState({
            filter: filterVal
        });
    }
    setOrder(orderVal) {
        this.setState({
            order: orderVal
        })
    }
    setList(listVal) {
        this.setState({
            list: listVal
        })
    }
    setLoading(loadingVal) {
        this.setState({
            loading: loadingVal
        })
    }

    //---- event handler of filter and order. Use to fetch and set the value display----
    handleChangeFilter = event => {
        this.setFilter(event.target.value);
    };

    handleChangeOrder = event => {
        this.setOrder(event.target.value);
    }

    // -----load data-----
    fetchData = async () => {
        //TODO check type of customer then if esle for different type of fetch

        this.setLoading(true);
        const response = await fetch('http://10.187.224.141:28590/api/customer/inventory/products/all',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        this.setList(data);
        this.setLoading(false);
    }

    // ------fetch on load-------
    componentDidMount() {
        this.fetchData();
    }

    render() {
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