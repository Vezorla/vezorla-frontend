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
    <Grid  item xs={12} sm={6} md={4} >
      <Link to={url}>
        <Card key={prodId} justifyContent="center" style={{border: "1px solid black", marginTop: "3em", }}>
        <CardMedia
            component="img"
            alt={name}
            height="140"
            image={image[0]}
            title="props.name"
          />
          <h1 style={{textAlign: "center",}}>{name}</h1>
          <h2>{subdescription}</h2>
          <p>{harvest}</p>
          
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