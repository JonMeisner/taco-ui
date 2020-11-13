import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles, Button, ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
        minWidth: 250,
        marginLeft: '5px',
        marginRight: '5px',
    },
    buttonGroup: {
        marginBottom: '20px',
    },
    typography_title: {
        marginBottom: '20px',
        fontStyle: 'italic',
    },
    typography_body: {
        marginTop: '20px',
    }
})

const MenuItem = (props) => {
    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardActionArea disabled>
                <CardMedia
                    component='img'
                    alt={props.alt}
                    height='300px'
                    width='300px'
                    image={props.img}
                    title={props.title}
                />
                <CardContent>
                    <Typography variant='h5' className={classes.typography_title} >{props.itemName}</Typography>
                    <Typography variant='body2' color='textSecondary'>{props.itemDescription}</Typography>
                    <Typography variant='h6' className={classes.typography_body}>{props.itemPrice}</Typography>
                </CardContent>
            </CardActionArea>
            <ButtonGroup className={classes.buttonGroup}>
                <Button onClick={() => props.handleMinus(props.alt)}>-</Button>
                <Button>{props.numSpicy}</Button>
                <Button onClick={() => props.handlePlus(props.alt)}>+</Button>
            </ButtonGroup>


        </Card>
    )
}

export default MenuItem;