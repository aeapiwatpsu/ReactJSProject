import { List, ListItemText, Paper, ListItem, ListItemSecondaryAction, IconButton, ButtonGroup, Button, makeStyles } from '@material-ui/core';
import React from 'react'
import DeleteOutlineTwoTone from '@material-ui/icons/DeleteOutlineTwoTone';
import { roundTo2DecimalPoint } from "../../utils";

export default function OrderedFoodItems(props) {
  const {values, setValues} = props;
  
  let orderedFoodItems = values.orderDetails;

  const removeFoodItem = (index, id) => {
    let x = {...values};
    x.orderDetails = x.orderDetails.filter ((_, i) => i != index)
    setValues ({...x});
  }

  const updateQuantity = (idx, value) => {
    let x = {...values};
    let foodItem = x.orderDetails[idx];
    if(foodItem.quantity + value > 0){    
       foodItem.quantity += value;
       setValues({...x});
    }
  }

  return (
    <List>
      {
        orderedFoodItems.map((item,idx)=>(
          <Paper key={idx}>
            <ListItem>
              <ListItemText
              primary={item.foodItemName}
              primaryTypographyProps={{
                component : 'h1',
                style: {
                    fontWeight : '300',
                    fontSize: '1.2em'
                }
            }}
            secondary = {
              <>
                <ButtonGroup size="small">
                  <Button
                    onClick={e=>updateQuantity(idx, -1)}
                  >-</Button>
                  <Button
                    disabled
                  >{item.quantity}</Button>
                  <Button
                    onClick={e=>updateQuantity(idx, 1)}
                  >+</Button>                
                </ButtonGroup>
                <span>
                  { '$' + roundTo2DecimalPoint (item.quantity * item.foodItemPrice)}
                </span>
              </>
            }
            secondaryTypographyProps = {{
              component: 'div'
            }}
            />
              <ListItemSecondaryAction>
                <IconButton
                disableRipple
                onClick={e=>removeFoodItem(idx, item.orderDetailsId)}>
                  <DeleteOutlineTwoTone />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Paper>
        ))
      }
    </List>
  )
}
