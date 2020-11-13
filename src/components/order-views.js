import React from 'react';
import { makeStyles, Button, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {

    },
    paper: {
        margin:'5px',
        display: 'flex',
        justifyContent:'space-between',
    },
    paperBottom: {
        margin:'5px',
        display: 'flex',
        justifyContent:'space-between',
    },
    title: {
        
    },
    labels: {
        margin:'8px',
    },
    customerName: {
        margin: '8px',
        minWidth: '300px',
        maxWidth: '300px',
    }
}));


const OrderViews = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.main}>
                {props.data.length === 0 ? 
                <Paper className={classes.paper}>
                    <Typography className={classes.labels} variant="h6">No Open Orders</Typography>
                </Paper> : null}

                {props.data.map((Label,index) => (
                <Paper className={classes.paper} key={index} elevation={3}>
                    <Typography className={classes.customerName} variant='h6' >{props.data[index].customer}</Typography>
                    <Typography className={classes.labels} variant='h6' >Spicy: {props.data[index].spicy}</Typography>
                    <Typography className={classes.labels} variant='h6' >Carne Asada: {props.data[index].carne}</Typography>
                    <Typography className={classes.labels} variant='h6' >Green: {props.data[index].green}</Typography>
                    <Typography className={classes.labels} variant='h6' >Corona: {props.data[index].corona}</Typography>
                    <Typography className={classes.labels} variant='h6' >Cost: ${props.data[index].cost}</Typography>
                    <Button variant="outlined" className={classes.labels} onClick={() => props.cookOrder(props.data[index])}>Cook</Button>
                    <Button variant="outlined" className={classes.labels} color="secondary" onClick={() => props.deleteOrder(props.data[index])}>Delete</Button>
                </Paper>
                ))}
            </div>
        </div>
    )
}

export default OrderViews;