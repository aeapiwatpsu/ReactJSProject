import { List, ListItemText, Paper, ListItem, ListItemSecondaryAction, IconButton, ButtonGroup, Button, makeStyles } from '@material-ui/core';
import React from 'react'

export default function OrderedFoodItems(props) {
  const {OrderedFoodItems} = props;
  
  return (
    <List>
      {
        OrderedFoodItems.map((item,idx)=>(
          <Paper key={idx}>
            <ListItem>
              <ListItemText
              primary={item.foodItemName}
              primaryTypographyProps={{
                style: {
                    textAlign: 'center',
                    fontStyle: 'italic'
                }
            }}
            />
            </ListItem>
          </Paper>
        ))
      }
    </List>
  )
}
