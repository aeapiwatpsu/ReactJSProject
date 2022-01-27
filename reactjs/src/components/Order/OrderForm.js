import React from "react";
import Form from "../../layouts/Form";
import { Grid } from "@material-ui/core";                       
import Input from "../../controls/Input";
import Select from "../../controls/Select";

export default function OrderForm() {
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
            <Input
                disabled = { true }
                label = "Order Number"
                name = "orderNumber"
            />
            <Select
                label = "Customer"
                name = "customerId"
                options = {[
                    {id:0, title : 'Select'},                                                  
                    {id:1, title : 'Customer 1'},                                                  
                    {id:2, title : 'Customer 2'},                                                  
                    {id:3, title : 'Customer 3'},                                                  
                    {id:4, title : 'Customer 4'},                                                  
                ]}
            />
        </Grid>
        <Grid item xs={6}>
        <Input
                disabled = { true }
                label = "Grand Total"
                name = "gTotal"
            />
        </Grid>
      </Grid>
    </Form>
  );
}
