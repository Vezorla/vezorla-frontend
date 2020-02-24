import React from 'react'
import CardItem from './CardItem'
import { Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles(theme => ({
    grid: {
        [theme.breakpoints.between('sm','xs')]:{
            width:"100%"
        },
        [theme.breakpoints.up('xs')] : {
            width:"80%",
            margin:"0 auto"
        },
    }
}));


/**
 * @author Minh Lam
 * @description Function Component for Cart List
 * This component contains list of card (product)
 * props: 
 *      - list: array contain objects describe products
 */
export default function CardList(props) {
    
    const classes = useStyle();

    //-----Create a list of component from props---------
    const listCard = props.list.map((item) => (
        <CardItem 
            key={item.prodId}
            product={item}
        />  
    ));


    return (
        <div>
            <Grid className={classes.grid} container xs={12} spacing={3}>
                {listCard}
            </Grid>
        </div>
    )
}
