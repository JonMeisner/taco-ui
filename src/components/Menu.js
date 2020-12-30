import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles, Button, ButtonGroup } from '@material-ui/core';
import MenuItem from './menu-item';

const useStyles = makeStyles({
    main: {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'space-evenly',
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
        marginRight: 15,
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
    const order = [{type: 0, customer: props.customerName, spicy: props.numSpicy, carne: props.numCarne, green: props.numGreen, corona: props.numCorona, cost: props.totalCost}]

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div>
            <div className={classes.main}>
                <MenuItem
                    handleMinus={props.handleMinus}
                    handlePlus={props.handlePlus}
                    itemName={'Spicy Taco'}
                    itemDescription={'A Spicy Taco that is said to make you really move it move it'}
                    itemPrice={'$600'}
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
                    itemPrice={'$1000'}
                    numSpicy={props.numCarne}
                    alt={'carne_asada_taco'}
                    img={'img/carne_asada_taco.png'}
                    title={'A Thick and Hearty Taco'}
                    // style={{marginBottom: '20px', color:'Tomato'}}
                />
                <MenuItem
                    handleMinus={props.handleMinus}
                    handlePlus={props.handlePlus}
                    itemName={'Green Taco'}
                    itemDescription={"The Taco Farmer SPECIAL! Don't tell your parole officer about this one!"}
                    itemPrice={'$200'}
                    numSpicy={props.numGreen}
                    alt={'green'}
                    img={'./src/assets/green_taco.png'}
                    title={'A Green Taco'}
                />
                <MenuItem
                    handleMinus={props.handleMinus}
                    handlePlus={props.handlePlus}
                    itemName={'Corona'}
                    itemDescription={"An ice cold beer with your tacos."}
                    itemPrice={'$100'}
                    numSpicy={props.numCorona}
                    alt={'corona'}
                    img={'img/beer.png'}
                    title={'A Cold Corona'}
                />
            </div>
            <div>
                <Card className={classes.longRoot}>
                    <CardContent>
                        <Typography variant='h5' className={classes.typography_title}> Customer: {props.customerName}</Typography>
                        <Typography variant='h4' className={classes.typography_cost}> Total: ${numberWithCommas(props.totalCost)}</Typography>
                    </CardContent>
                    <Button className={classes.orderButton} variant='outlined' onClick={() => props.orderTacos(order)}>ORDER</Button>
                </Card>
            </div>
        </div>
    );
};

export default Menu;