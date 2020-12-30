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

const MenuItem = ({item, orderQuantity, handleMinus, handlePlus}) => {
    const classes = useStyles();

    return (
        <Card key={item.name} className={classes.root}>
            <CardActionArea disabled>
                <CardMedia
                    component='img'
                    alt={item.altString}
                    height='300px'
                    width='300px'
                    image={item.img}
                    title={item.title}
                />
                <CardContent>
                    <Typography variant='h5' className={classes.typography_title} >{item.name}</Typography>
                    <Typography variant='body2' color='textSecondary'>{item.description}</Typography>
                    <Typography variant='h6' className={classes.typography_body}>{item.price}</Typography>
                </CardContent>
            </CardActionArea>
            <ButtonGroup className={classes.buttonGroup}>
                <Button onClick={() => handleMinus(item)}>-</Button>
                <Button>{orderQuantity}</Button>
                <Button onClick={() => handlePlus(item)}>+</Button>
            </ButtonGroup>
        </Card>
    )
}

export default MenuItem;