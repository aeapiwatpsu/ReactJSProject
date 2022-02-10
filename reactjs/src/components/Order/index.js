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

    return(
   
            <Grid container>
                <Grid item xs = {12}>
                     <OrderForm
                {...{ values, errors, handleInputChange }}
                     />
                </Grid>
                   <Grid item xs = {6}>
                     <SearchFoodItems />  
                   </Grid> 
                   <Grid item xs = {6}>
                     <OrderedFoodItems />  
                   </Grid> 
            </Grid>
    )
}