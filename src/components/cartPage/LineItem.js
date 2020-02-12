import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import TextField from '@material-ui/core/TextField';
import img1 from '../../assets/images/img-1.JPG'
import './style.css'

//need product{imageMain, name, price}, quantity, onDeleteHandler
export default function LineItem(props) {

    return (
        <div className="lineItem">
            <div className="lineItem--img">
                <img className="productImg" src={props.product.imageMain} alt='Product'/>
            </div>
            <div clasName="lineItem--name">
                <p>{props.product.name}</p>
            </div>
            <div className="lineItem--quantity">
                <TextField
                        id="standard-number"
                        label="Quantity"
                        type="number"
                        value={props.quantity}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange= {(e)=>props.onChangeValueHandler(props.product.prodId,e.target.value)}
                        inputProps={{
                            min: 1,
                        }}
                        helperText={(props.quantity < 1)?"Invalid quantity":" "}
                        error={(props.quantity < 1)?true:false}
                />
            </div>
            <div className="lineItem--price">
                <p>{props.quantity * props.product.price}</p>
            </div>
            <div className="lineItem--delete">
                <IconButton edge="end" aria-label="delete">
                        <DeleteIcon onClick={() => props.onDeleteHandler(props.product.prodId)} />
                </IconButton>
            </div>
           
        </div>
    )
}


 {/* <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    <FolderIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="Single-line item"
                    secondary={true ? 'Secondary text' : null}
                />
                <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                />
                <ListItemSecondaryAction>
                    
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            </List> */}