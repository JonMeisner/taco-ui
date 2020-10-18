import React, {useEffect, useState} from 'react';
import * as apis from './apis/apis';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './components/header';
import { makeStyles, Button, List, Tab, Tabs, Paper } from '@material-ui/core';

//store
import { useDispatch, connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './store/actions/taco.actions';
import * as selectors from './store/selectors/taco.selectors';
import * as cookActions from './store/actions/order.actions';
import * as cookSelectors from './store/selectors/order.selectors';

import MenuContainer from './containers/menu-container';
import OrderContainer from './containers/order-container';

const useStyles = makeStyles((theme) => ({
    show: {
        display: 'auto',
        position: 'relative',
        width: '1180px',
        height: '850px',
        top: '80px',
        margin: 'auto',
        borderStyle: 'solid',
        backgroundColor: '#b6b6b6',
    },
    root: {
        display: 'auto',
    },
    hide: {
        display: 'none',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    selectionButtons: {
        flexGrow: 0,
        justifyContent: 'center',
    }
}))

const mapStateToProps = createStructuredSelector({
    toggleState: selectors.getMenuData,
    cookStuff: cookSelectors.getOrderData,

})

const App = (toggleState,cookStuff) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const showMenu = useSelector(state => state.getMenuData);
    const [job, setJob] = React.useState('');

    const orderTacos = (orderPass) => {
        //console.log(orderPass)
        apis.orderTacos(orderPass)
    }
    
    const closeApplication = () => {
        apis.closeTacos();
        dispatch(actions.clearMenu());
        dispatch(cookActions.ClearOrderData());
        //dispatch(actions.hideMenuToggler());
        //dispatch(cookActions.HideCookMenu());
    };

    useEffect(() => {
        document.addEventListener("keydown", (e) => onKeyPress(e));
        return (e) => {
            
            if (e.keyCode === 27) {
                document.removeEventListener("keydown", (e) => onKeyPress(e));
            }
        };
    }, []);

    const onKeyPress = (e) => {
        if (e.keyCode === 27) {
            closeApplication();
        }
    }

    useEffect(() => {
        window.addEventListener("message", (e) => onMessage(e));
        return () => {
            window.removeEventListener("message", (e) => onMessage(e));
        };
    }, []);

    const onMessage = (event) => {
        if (event.data.openMenu === true && showMenu.showMenuToggler == false && showMenu.customerName === '') {
            dispatch(actions.setMenuData(event.data.openMenu,event.data.customerName))
            dispatch(cookActions.SetOrderList(event.data.orderList))
            // dispatch(actions.showMenuToggler())
            // dispatch(actions.setCustomerName(event.data.customer))
            //dispatch(cookActions.SetOrderList([{Customer: 'Derek Fhreebs', Spicy: 2, Carne: 0, Green: 1, Rona: 2, Cost: 1500},{Customer: 'Eduardo', Spicy: 11, Carne: 0, Green: 2, Rona: 6, Cost: 20000}]))
            setJob(event.data.job);
        }
        if (event.data.openMenu === false) {
            dispatch(actions.hideMenuToggler())
        }
        // if (event.data.openCook === true) {
        //     dispatch(cookActions.ShowCookMenu())
        //     dispatch(cookActions.SetOrderList([{Customer: 'Sax', Spicy: 2, Carne: 0, Green: 1, Rona: 2, Cost: 1500}]))
        //     setJob(event.data.job);
        // }
        // if (event.data.openCook === false) {
        //     dispatch(cookActions.HideCookMenu())
        // }
    }

    return (

        <div className={showMenu.showMenuToggler ? classes.show : classes.hide}>
            
            <Router>
                <Header closeApplication={closeApplication} job={job}/>

                <Switch>

                    <Route exact path="/">
                        <MenuContainer orderTacos={orderTacos} />
                    </Route>

                    <Route exact path="/orders">
                        <OrderContainer />
                    </Route>
 
                </Switch>
            </Router>

        </div>
    );
};



export default connect(mapStateToProps)(App);