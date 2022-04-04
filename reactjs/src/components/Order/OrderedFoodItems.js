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
                component : 'h1',
                style: {
                    fontWeight : '300',
                    fontSize: '1.2em'
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
