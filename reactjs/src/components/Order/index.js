import React from 'react'
import OrderForm from './OrderForm'
import { useForm } from "../../hooks/useForm";
import { Grid } from '@material-ui/core';
import SearchFoodItems from './SearchFoodItems';
import OrderedFoodItems from './OrderedFoodItems';

const generateOrderNumber = () => Math.floor(100000 + Math.random() * 900000).toString();

  const getFreshMethodObject = () =>({
    orderMasterId : 0,
    orderNumber : generateOrderNumber(),
    customerId : 0,
    pMethod : 'none',
    gTotal : 0,
    deletedOrderItemIds : '',
    orderdetails : []
  })

export default function Order(){

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetFormControls
  } = useForm(getFreshMethodObject);

  const addFoodItem = foodItem => {

    let x = {
      orderMasterId : values.orderMasterId,
      orderDetailId : 0,
      foodItemId : foodItem.foodItemId,
      quantity : 1,
      foodItemPrice : foodItem.foodItemPrice,
      foodItemName:  foodItem.foodItemName
    }
    setValues({
      ...values,
      orderdetails : [...values.orderdetails, x]
    })
  }

    return(
   
            <Grid container>
                <Grid item xs = {12}>
                     <OrderForm
                {...{ values, errors, handleInputChange }}
                     />
                </Grid>
                   <Grid item xs = {6}>
                     <SearchFoodItems 
                        {...{ addFoodItem }}
                     />  
                   </Grid> 
                   <Grid item xs = {6}>
                     <OrderedFoodItems 
                      {...{OrderedFoodItems : values.orderdetails}}
                     />  
                   </Grid> 
            </Grid>
    )
}