import React from 'react';
import { makeStyles, Button, Typography, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

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
    const [open, setOpen] = React.useState(false);
    const [currentOrder, setCurrentOrder] = React.useState();

    const handleClickOpen= (order) => {
        setOpen(true)
        setCurrentOrder(order)
    }

    const handleClose = (ready) => {
        if (ready === true) {
            props.deleteOrder(currentOrder);
            setOpen(false)
        } else {
            setOpen(false)
        }        
    }

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
                    <Button variant="outlined" className={classes.labels} color="secondary" onClick={() => handleClickOpen(props.data[index])}>Delete</Button>
                </Paper>
                ))}
                <Dialog
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>Delete Order Confirmation</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Are you sure you want to delete this order?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="secondary" onClick={() => handleClose(true)}>Yes</Button>
                        <Button variant="outlined" onClick={() => handleClose(false)}>No</Button>
                    </DialogActions>

                </Dialog>
            </div>

        </div>
    )
}
//onClick={() => props.deleteOrder(props.data[index])}
export default OrderViews;