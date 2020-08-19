import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";

const Header = (props) => {
    return (
        <AppBar position="relative" color="default">
            <Toolbar style={{ backgroundColor: "#EED414" }}>
                <img
                    src="img/theTacoFarmer.png"
                    alt="taco"
                    height="50"
                    width="200"
                />
                <IconButton
                    style={{ marginLeft: "auto" }}
                    onClick={() => props.closeApplication}
                >
                    <ExitToApp />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
