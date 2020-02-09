import React from 'react'
import Card from '@material-ui/core/Card'
import  {Link} from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

//props: product obj
function CardItem(props) {
  const {prodId,name,subdescription,harvest,image,oldprice,currentprice} = props.product
  const url = "/product/"+ prodId;


  return (
    <Grid item xs={10} md={5} lg={3} >
      <Link to={url}>
        <Card key={prodId} >
          <h1>{name}</h1>
          <h2>{subdescription}</h2>
          <p>{harvest}</p>
          <CardMedia
            component="img"
            alt={name}
            height="140"
            image={image[0]}
            title="props.name"
          />
          <div className="card--price">
            <p>{oldprice}</p>
            <p>{currentprice}</p>
          </div>
        </Card>
      </Link>
    </Grid>

  )
}
export default CardItem;