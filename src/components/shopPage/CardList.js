import React from 'react'
import CardItem from './CardItem'

import { Grid } from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles'

//props: list of product object
//product object need to have format
// const list = [{
//     id: 1,
//     name: "abc",
//     subdescription: "abcsd",
//     harvest: "12-2-1231",
//     image: [img1,img2],
//     oldprice: 123,
//     currentprice: 1234
//   },{
//     id: 2,
//     name: "asc",
//     subdescription: "aqd",
//     harvest: "12-2-4321",
//     image: [img2,img3],
//     oldprice: 123,
//     currentprice: 1234
//   }] 

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



export default function CardList(props) {
    
    const classes = useStyle();

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
