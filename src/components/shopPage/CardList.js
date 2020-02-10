import React from 'react'
import CardItem from './CardItem'
import Grid from '@material-ui/core/Grid';

import {makeStyles} from '@material-ui/core'

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





export default function CardList(props) {
    
    const listCard = props.list.map((item) => (
        <CardItem 
            product={item}
        />  
    )
        
    );

    return (
        <div>
            <Grid container xs={12} spacing={2} justify='center'>
                {listCard}
            </Grid>
        </div>
    )
}
