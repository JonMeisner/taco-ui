import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles, Button, ButtonGroup } from '@material-ui/core';
import MenuItem from './menu-item';

const useStyles = makeStyles({
    main: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'space-between',
        marginTop: '20px',
    },
    longRoot: {
        display: 'flex',
        maxWidth: '100%',
        marginLeft: '5px',
        marginRight: '5px',
        marginTop: '20px',

    },
    orderButton: {
        marginLeft: 'auto',
        marginRight: '5px',
        height: '30px',
        marginTop: '47px',
    },
    typography_title: {
        marginBottom: '20px',
        fontStyle: 'italic',
    },
    typography_cost: {
        marginTop: '20px',
        fontStyle: 'italic',
    }
});

const Menu = (props) => {
    const classes = useStyles();
    const order = [{Customer: props.customerName, Spicy: props.numSpicy, Green: props.numGreen, Corona: props.numCorona, Cost: props.totalCost}]


    return (
        <div>
            <div className={classes.main}>
                <MenuItem
                    handleMinus={props.handleMinus}
                    handlePlus={props.handlePlus}
                    itemName={'Spicy Taco'}
                    itemDescription={'A Spicy Taco that is said to make you really move it move it'}
                    itemPrice={'$300'}
                    numSpicy={props.numSpicy}
                    alt={'spicy'}
                    img={'img/spicy_taco.png'}
                    title={'A Spicy Taco'}
                />
                <MenuItem
                    handleMinus={props.handleMinus}
                    handlePlus={props.handlePlus}
                    itemName={'Carne Asada Taco'}
                    itemDescription={"A Truly Beefy Taco that is said to be served containing bits of kevlar"}
                    itemPrice={'COMING SOON!'}
                    numSpicy={props.numGreen}
                    alt={'carne_asada_taco'}
                    img={'img/carne_asada_taco.png'}
                    title={'A Thick and Hearty Taco'}
                    style={{marginBottom: '20px', color:'Tomato'}}
                />
                <MenuItem
                    handleMinus={props.handleMinus}
                    handlePlus={props.handlePlus}
                    itemName={'Green Taco'}
                    itemDescription={"The Taco Farmer SPECIAL!"}
                    itemPrice={'$200'}
                    numSpicy={props.numGreen}
                    alt={'green'}
                    title={'A Green Taco'}
                />
                <MenuItem
                    handleMinus={props.handleMinus}
                    handlePlus={props.handlePlus}
                    itemName={'Corona'}
                    itemDescription={"An ice cold beer with your tacos."}
                    itemPrice={'$150'}
                    numSpicy={props.numCorona}
                    alt={'corona'}
                    img={'img/beer.png'}
                    title={'A Cold Corona'}
                />
            </div>
            <div>
                <Card className={classes.longRoot}>
                    <CardContent>
                        <Typography variant='h5' className={classes.typography_title}>Total: {props.customerName}</Typography>
                        <Typography variant='h4' className={classes.typography_cost}>${props.totalCost}</Typography>
                    </CardContent>
                    <Button className={classes.orderButton} variant='outlined' onClick={() => props.orderTacos(order)}>ORDER</Button>
                </Card>
            </div>
        </div>
    );
};

export default Menu;