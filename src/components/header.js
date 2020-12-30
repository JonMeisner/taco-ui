import React from "react";
import { AppBar, Toolbar, IconButton, ButtonGroup, Button, makeStyles } from "@material-ui/core";
import { Link, Router } from "react-router-dom";
import ExitToApp from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    buttonGroup: {
        marginLeft: "auto",
    }
}));

const Header = ({store, closeApplication}) => {
    const classes = useStyles();

    return (
        <AppBar position="sticky" color="default">
            <Toolbar style={{ backgroundColor: store.primaryColor }}>
                <img
                    src={store.logo}
                    alt={store.logoAlt}
                    height="50"
                    width="200"
                />
                {store.name} 
                <ButtonGroup className={classes.buttonGroup}>
                    <Button component={Link} to="/" variant="outlined">Menu</Button>
                    <Button component={Link} to="/orders" variant="outlined">Orders</Button>
                </ButtonGroup>
                <IconButton
                    style={{ marginLeft: "10px" }}
                    onClick={closeApplication}
                >
                    <ExitToApp />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;