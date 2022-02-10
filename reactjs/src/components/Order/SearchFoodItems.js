import React, { useState, useEffect } from 'react'
import { createAPIEndpoint, ENDPIONTS } from "../../api";
import { List, ListItem, ListItemText, Paper, InputBase, IconButton, makeStyles, ListItemSecondaryAction } from '@material-ui/core';

export default function SearchFoodItem() {

  const [foodItems,SetFoodItems] = useState([])

  useEffect(()=>{
    createAPIEndpoint(ENDPIONTS.FOODITEM).fetchAll()
    .then(res =>{
      SetFoodItems(res.data)
    })
    .catch(err=>console.log(err))
  },[])

  return (
    <List>
      {
        foodItems.map((item,idx)=>(
          <ListItem
          key = {idx}>
              <ListItemText
              primary = {item.foodItemName}/>                      
          </ListItem>
        ))
      }
    </List>
  )
}
