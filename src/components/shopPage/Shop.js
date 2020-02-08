import React,{Component} from 'react'
import CardList from './CardList'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   }));

const style = {
    minWidth: '120'
}

class Shop extends Component{   

    constructor(props){
        super(props);
        this.state = {
            filter: '',
            order: '',
            list: '',
        }
        this.setFilter = this.setFilter.bind(this);
        this.setOrder = this.setOrder.bind(this);
        this.setList = this.setList.bind(this);
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

    // event handler of filter and order. Use to fetch and set the value display
    handleChangeFilter = event => {
        this.setFilter(event.target.value);
    };

    handleChangeOrder = event =>{
       this.setOrder(event.target.value);
    }
       
    fetchData = async () => {
        const json = await fetch('url');
        const data = await json.json();
        this.setList(data);
    }
    
    // ------fetch on load-------
    componentDidMount(){
         this.fetchData();
    }
    
    

    

    render(){
        return (
            <div>
                {/* ------Filter and Order section--------- */}
                <Grid className="shop--filter" container spacing={5} xs={12} justify='center'>

                    {/*-------- Filter --------*/}
                    <Grid item>   
                        <FormControl className="shop--form" style={style}>
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
                    <Grid item>  
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
                <CardList list={this.props.list}/>{/* TODO: change this into this.state.list */}
            </div>
        )
    }
    
    }
export default Shop;