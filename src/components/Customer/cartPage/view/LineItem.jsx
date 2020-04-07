import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {TextField, IconButton, Typography, Divider, Container} from '@material-ui/core';
import '../style.css';

/**
 * @file LineItem View Component
 * @author MinhL4m
 * @version 1.0
 */

class LineItem extends React.PureComponent {
  render() {
    return (
      <Container>
        <div className="lineItem">
          <div className="lineItem-img">
            <img className="productImg" src={`data:image/jpeg;base64,${this.props.img}`} alt="Product"/>
          </div>
          <div className="lineItem-name">
            <Typography>
              {this.props.name}
            </Typography>
          </div>
          <div className="lineItem-quantity">
            <TextField
              id="standard-number"
              type="number"
              value={this.props.quantity}
              InputLabelProps={{
                shrink: true
              }}
              onChange={(e) => this.props.onChange(this.props.prodID, e.target.value)}
              inputProps={{
                min: 1,
                max: this.props.max
              }}
              helperText={this.props.quantity < 1 ? 'Invalid quantity' : ' '}
              error={this.props.quantity < 1 ? true : false}
            />
          </div>
          <div className="lineItem-price">
            <Typography>
              ${(this.props.quantity * this.props.price).toFixed(2)}
            </Typography>
          </div>
          <div className="lineItem-delete">
            <IconButton aria-label="delete" onClick={() => this.props.onDelete(this.props.prodID)}>
              <DeleteForeverIcon/>
            </IconButton>
          </div>
        </div>
		  <Divider/>
      </Container>
    );
  }
}

export default LineItem;
