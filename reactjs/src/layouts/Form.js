import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Input from "../controls/Input";

const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root':{
            width: '90%',
            margin: theme.spacing(1)
        }
    }
}))

export default function Form(props) {
    const classes = useStyles();
    const { children, ...other } = props;

    return(
        <form className={classes.root} noValidate autoCapitalize="off" {...other}>
                {children}
        </form>
    )
}