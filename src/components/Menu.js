import React from 'react';
import * as apis from '../apis/apis'; // Connections
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles, Button, ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        // marginLeft: '8px',
        // maringRight: '8px',
    },
    longRoot: {
        display: 'flex',
        maxWidth: '100%'
        
    },
    media: {
        height: 140,
    },
    buttonGroup: {
        marginBottom: '10px',
    },
    orderButton: {
        marginLeft: 'auto',
        marginRight: '5px',
        height: '30px',
        marginTop: '40px',
    },
});

export default function Menu() {
    const classes = useStyles();
    const [totalCost, setTotalCost] = React.useState(0);
    const [numSpicy, setNumSpicy] = React.useState(0);
    // const [numAsada, setNumAsada] = React.useState(0);
    const [numGreen, setNumGreen] = React.useState(0);
    const [numCorona, setNumCorona] = React.useState(0);
    const [customerName, setCustomerName] = React.useState('');
    let order = [{Customer: customerName, Spicy: numSpicy, Green: numGreen, Rona: numCorona, Cost: totalCost}];
    const [totalOrder, setTotalOrder] = React.useState(order);

    window.addEventListener('message', (event) => { // Listens for name signal
        if (event.data.customerName) {
            setCustomerName(event.data.customerName);
        }
    });

    const handlePlus = (item) => {
        if (item === 'spicy') {
            if (numSpicy === 5) {
                setNumSpicy(numSpicy)
            } else {
                setNumSpicy(numSpicy+1)
                setTotalCost(totalCost + 300)
            }
        };
        if (item === 'green') {
            if (numGreen === 5) {
                setNumGreen(numGreen)
            } else {
                setNumGreen(numGreen+1)
                setTotalCost(totalCost + 200)
            }
        };
        if (item === 'corona') {
            if (numCorona === 5) {
                setNumCorona(numCorona)
            } else {
                setNumCorona(numCorona+1)
                setTotalCost(totalCost + 150)
            }
        };
    };

    const handleMinus = (item) => {
        if (item === 'spicy') {
            if (numSpicy === 0) {
                setNumSpicy(numSpicy)
            } else {
                setNumSpicy(numSpicy-1)
                setTotalCost(totalCost - 300)
            }
        };
        if (item === 'green') {
            if (numGreen === 0) {
                setNumGreen(numGreen)
            } else { 
                setNumGreen(numGreen-1)
                setTotalCost(totalCost - 200)
            }
        };
        if (item === 'corona') {
            if (numCorona === 0) {
                setNumCorona(numCorona)
            } else {
                setNumCorona(numCorona-1)
                setTotalCost(totalCost - 150)
            } 
        };
    };

    const resetRegister = () => {
        setTotalCost(0);
        setNumSpicy(0);
        setNumGreen(0);
        setNumCorona(0);
        setCustomerName('');
    };

    const orderTacos = (orderPass) => {
        console.log(order)
        apis.orderTacos(orderPass)
        resetRegister()
    };

    return (
        <div>
            <div style={{display:'flex', textAlign: 'center', justifyContent: 'center', marginTop: '30px'}}>
            <Card className={classes.root} style={{marginRight: '5px', marginLeft: '5px'}}>
                <CardActionArea>
                    <CardMedia
                    component='img'
                    alt='spicy_taco'
                    height='300px'
                    width='300px'
                    image='img\spicy_taco.png'
                    title='A Spicy Ass Taco'
                    />
                    <CardContent>
                        <Typography variant='h5' style={{marginBottom: '20px', fontStyle: 'italic'}}><strong>Spicy Taco</strong></Typography>
                        <Typography variant='body2' color='textSecondary'>A Spicy Taco that is said to make you really move it move it</Typography>
                        <Typography variant='h6' style={{marginTop: '20px'}}><strong>$300</strong></Typography>
                    </CardContent>
                </CardActionArea>
                <ButtonGroup className={classes.buttonGroup}>
                    <Button onClick={() => handleMinus('spicy')}><strong>-</strong></Button>
                    <Button>{numSpicy}</Button>
                    <Button onClick={() => handlePlus('spicy')}><strong>+</strong></Button>
                </ButtonGroup>
            </Card>
            <Card className={classes.root} style={{marginRight: '5px', marginLeft: '5px'}}>
                <CardActionArea>
                    <CardMedia
                    component='img'
                    alt='carne_asada_taco'
                    height='300px'
                    width='300px'
                    image='img\carne_asada_taco.png'
                    title='A Thick and Hearty Taco'
                    />
                    <CardContent>
                        <Typography variant='h5' style={{marginBottom: '20px', color: 'Tomato', fontStyle: 'italic'}}><strong>COMING SOON!</strong></Typography>
                        <Typography variant='body2' color='textSecondary'>A Truly Beefy Taco that is said to be served containing bits of kevlar.</Typography>
                        <Typography variant='h6' style={{marginTop: '20px'}}>[ Coming Soon ]</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={classes.root} style={{marginRight: '5px', marginLeft: '5px'}}>
                <CardActionArea>
                    <CardMedia
                    component='img'
                    alt='green_taco'
                    height='300px'
                    width='300px'
                    image='img\green_taco.png'
                    title='A Thick and Hearty Taco'
                    />
                    <CardContent>
                        <Typography variant='h5' style={{marginBottom: '20px', fontStyle: 'italic'}}><strong>The Green Farmer</strong></Typography>
                        <Typography variant='body2' color='textSecondary'>The Taco Farmer SPECIAL! Don't tell your parole officer about this one.</Typography>
                        <Typography variant='h6' style={{marginTop: '20px'}}><strong>$200</strong></Typography>
                    </CardContent>
                </CardActionArea>
                <ButtonGroup className={classes.buttonGroup}>
                    <Button onClick={() => handleMinus('green')}><strong>-</strong></Button>
                    <Button>{numGreen}</Button>
                    <Button onClick={() => handlePlus('green')}><strong>+</strong></Button>
                </ButtonGroup>
            </Card>
            <Card className={classes.root} style={{marginLeft: '5px', marginRight: '5px'}}>
                <CardActionArea>
                    <CardMedia
                    component='img'
                    alt='corona'
                    height='300px'
                    width='300px'
                    image='img\beer.png'
                    title='A Cold Corona'
                    />
                    <CardContent>
                        <Typography variant='h5' style={{marginBottom: '20px', fontStyle: 'italic'}}><strong>Corona</strong></Typography>
                        <Typography variant='body2' color='textSecondary'>An ice cold beer with your tacos. NO not the virus.</Typography>
                        <Typography variant='h6' style={{marginTop: '20px'}}><strong>$150</strong></Typography>
                    </CardContent>
                </CardActionArea>
                <ButtonGroup className={classes.buttonGroup}>
                    <Button onClick={() => handleMinus('corona')}><strong>-</strong></Button>
                    <Button>{numCorona}</Button>
                    <Button onClick={() => handlePlus('corona')}><strong>+</strong></Button>
                </ButtonGroup>       
            </Card>
            </div>
            <div>
            <Card className={classes.longRoot} style={{marginTop: '10px', marginLeft: '5px', marginRight: '5px'}}>
                <CardContent>
                    <Typography variant='h5' style={{marginBottom: '20px', fontStyle: 'italic'}}><strong>Total: {customerName}</strong></Typography>
                    <Typography variant='h4' style={{marginButtom: '20px', fontStyle: 'italic'}}><strong>${totalCost}</strong></Typography>
                </CardContent>
                <Button className={classes.orderButton} variant='contained' onClick={() => orderTacos(order)}>ORDER</Button>
            </Card>
            </div>
        </div>
    )
}