import React from 'react'
import Card from '@material-ui/core/Card'
import  {Link} from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';



//props: product obj
function CardItem(props) {
  const {prodId,name,subdescription,harvestTime,imageMain,oldPrice,price, active} = props.product
  const url = "/product/"+ prodId;


  return (
    <Grid  item xs={12} sm={6} md={4} >
      <Link to={url}>
        <Card key={prodId} justifyContent="center">
          <h1>{name}</h1>
          <h2>{subdescription}</h2>
          <p>{harvestTime}</p>
          <CardMedia
            component="img"
            alt={name}
            height="140"
            image={imageMain}
            title="props.name"
          />
          <div className="card--price">
            <p>{oldPrice}</p>
            <p>{price}</p>
          </div>
        </Card>
      </Link>
    </Grid>

  )
}
export default CardItem;