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
}));


const OrderViews = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div style={{margin:'10px',justifyContent:"space-between",display:"flex"}}>
            </div>
            <div className={classes.main}>
                {props.data.length === 0 ? 
                <Paper className={classes.paper}>
                    <Typography className={classes.labels} variant="h6">No Open Orders</Typography>
                </Paper> : <div></div>}

                {props.data.map((Label,index) => (
                <Paper className={classes.paper} key={index} elevation={3}>
                    <Typography className={classes.labels} variant='h6' >{props.data[index].Customer}</Typography>
                    <Typography className={classes.labels} variant='h6' >Spicy: {props.data[index].Spicy}</Typography>
                    <Typography className={classes.labels} variant='h6' >Green: {props.data[index].Green}</Typography>
                    <Typography className={classes.labels} variant='h6' >Corona: {props.data[index].Rona}</Typography>
                    <Typography className={classes.labels} variant='h6' >Cost: ${props.data[index].Cost}</Typography>
                    <Button variant="outlined" className={classes.labels} onClick={() => props.cookOrder(props.data[index])}>Cook</Button>
                </Paper>
                ))}
            </div>
            {/* <Paper className={classes.paperBottom}>
                <Typography className={classes.labels}>
                    Work In Progress
                </Typography>
            </Paper> */}
        </div>
    )
}

export default OrderViews;