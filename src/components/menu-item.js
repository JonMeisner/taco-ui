import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles, Button, ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
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
                    <Typography variant='h5' className={classes.typography_title} style={props.itemName === 'Carne Asada Taco' ? props.style : null}>{props.itemName}</Typography>
                    <Typography variant='body2' color='textSecondary'>{props.itemDescription}</Typography>
                    <Typography variant='h6' className={classes.typography_body}>{props.itemPrice}</Typography>
                </CardContent>
            </CardActionArea>
            {props.itemName !== 'Carne Asada Taco' ?
                <ButtonGroup className={classes.buttonGroup}>
                    <Button onClick={() => props.handleMinus(props.alt)}>-</Button>
                    <Button>{props.numSpicy}</Button>
                    <Button onClick={() => props.handlePlus(props.alt)}>+</Button>
                </ButtonGroup>
            : null}

        </Card>
        // <Card className={classes.root}>
        //     <CardActionArea>
        //         <CardMedia
        //             component='img'
        //             alt='carne_asada_taco'
        //             height='300px'
        //             width='300px'
        //             image='img\carne_asada_taco.png'
        //             title='A Thick and Hearty Taco'
        //         />
        //         <CardContent>
        //             <Typography variant='h5' className={classes.typography_title} style={{ color: 'Tomato' }}>COMING SOON!</Typography>
        //             <Typography variant='body2' color='textSecondary'>A Truly Beefy Taco that is said to be served containing bits of kevlar.</Typography>
        //             <Typography variant='h6' style={{ marginTop: '20px' }}>[ Coming Soon ]</Typography>
        //         </CardContent>
        //     </CardActionArea>
        // </Card>
        // <Card className={classes.root}>
        //     <CardActionArea>
        //         <CardMedia
        //             component='img'
        //             alt='green_taco'
        //             height='300px'
        //             width='300px'
        //             image='img\green_taco.png'
        //             title='A Green Taco'
        //         />
        //         <CardContent>
        //             <Typography variant='h5' className={classes.typography_title}>The Green Farmer</Typography>
        //             <Typography variant='body2' color='textSecondary'>The Taco Farmer SPECIAL! Don't tell your parole officer about this one.</Typography>
        //             <Typography variant='h6' style={{ marginTop: '20px' }}>$200</Typography>
        //         </CardContent>
        //     </CardActionArea>
        //     <ButtonGroup className={classes.buttonGroup}>
        //         <Button onClick={() => props.handleMinus('green')}>-</Button>
        //         <Button>{props.numGreen}</Button>
        //         <Button onClick={() => props.handlePlus('green')}>+</Button>
        //     </ButtonGroup>
        // </Card>
        // <Card className={classes.root}>
        //     <CardActionArea>
        //         <CardMedia
        //             component='img'
        //             alt='corona'
        //             height='300px'
        //             width='300px'
        //             image='img\beer.png'
        //             title='A Cold Corona'
        //         />
        //         <CardContent>
        //             <Typography variant='h5' className={classes.typography_title}>Corona</Typography>
        //             <Typography variant='body2' color='textSecondary'>An ice cold beer with your tacos. NO not the virus.</Typography>
        //             <Typography variant='h6' style={{ marginTop: '20px' }}>$150</Typography>
        //         </CardContent>
        //     </CardActionArea>
        //     <ButtonGroup className={classes.buttonGroup}>
        //         <Button onClick={() => props.handleMinus('corona')}>-</Button>
        //         <Button>{props.numCorona}</Button>
        //         <Button onClick={() => props.handlePlus('corona')}>+</Button>
        //     </ButtonGroup>
        // </Card>
    )
}

export default MenuItem;