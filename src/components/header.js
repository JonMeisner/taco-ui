import React from "react";
import { AppBar, Toolbar, IconButton, ButtonGroup, Button, makeStyles } from "@material-ui/core";
import { Link, Router } from "react-router-dom";
import ExitToApp from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    buttonGroup: {
        marginLeft: "auto",
    }
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <AppBar position="sticky" color="default">
            <Toolbar style={{ backgroundColor: "#EED414" }}>
                <img
                    src="img/theTacoFarmer.png"
                    alt="taco"
                    height="50"
                    width="200"
                />
                {props.job === "taco" ?                 
                <ButtonGroup className={classes.buttonGroup}>
                    <Button component={Link} to="/" variant="outlined">Menu</Button>
                    <Button component={Link} to="/orders" variant="outlined">Orders</Button>
                </ButtonGroup> :
                <ButtonGroup className={classes.buttonGroup}>
                    <Button component={Link} to="/" variant="outlined">Menu</Button>
                    <Button component={Link} to="/orders" variant="outlined" disabled>Orders</Button>
                </ButtonGroup>}

                <IconButton
                    style={{ marginLeft: "10px" }}
                    onClick={() => props.closeApplication()}
                >
                    <ExitToApp />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;