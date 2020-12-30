import React, {useEffect} from 'react';
import * as apis from './apis/apis';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { makeStyles} from '@material-ui/core';

//store
import { useDispatch, connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './store/actions/taco.actions';
import * as selectors from './store/selectors/taco.selectors';
import * as cookActions from './store/actions/order.actions';
import * as cookSelectors from './store/selectors/order.selectors';

import MenuContainer from './containers/menu-container';
import OrderContainer from './containers/order-container';
import { tacoShop } from './menus/TacoMenu';
import { pizzaShop } from './menus/pizzaMenu';

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
        overflow: 'auto',
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

    useEffect(() => {
        dispatch(actions.clearMenu());
    }, [])

    const onMessage = (event) => {
        if (event.data.openMenu === true && showMenu.showMenuToggler == false && showMenu.customerName === '') {
            dispatch(actions.setMenuData(event.data.openMenu, event.data.customerName))
            dispatch(cookActions.SetOrderList(event.data.orderList))
            // dispatch(actions.showMenuToggler())
            // dispatch(actions.setCustomerName(event.data.customer))
            // dispatch(cookActions.SetOrderList([{type: 0, customer: 'Derek Fhreebs', spicy: 2, carne: 5, green: 1, corona: 2, cost: 1500},{type: 1, customer: 'Eduardo', spicy: 11, carne: 0, green: 2, corona: 6, cost: 20000}]))
        }
        if (event.data.openMenu === false) {
            dispatch(actions.hideMenuToggler())
        }
        // if (event.data.openCook === true) {
        //     dispatch(cookActions.ShowCookMenu())
        //     dispatch(cookActions.SetOrderList([{Customer: 'Sax', Spicy: 2, Carne: 0, Green: 1, Rona: 2, Cost: 1500}]))
        // }
        // if (event.data.openCook === false) {
        //     dispatch(cookActions.HideCookMenu())
        // }
    }

    return (
        <div className={showMenu.showMenuToggler ? classes.show : classes.hide}>
            <Router>
                <Switch>
                    <Route exact path="/tacos">
                        <MenuContainer submitOrder={orderTacos} store={tacoShop} closeApplication={closeApplication}/>
                    </Route>
                    <Route exact path="/pizza">
                        <MenuContainer submitOrder={orderTacos} store={pizzaShop} closeApplication={closeApplication} />
                    </Route>
                    <Route exact path="/orders">
                        <OrderContainer closeApplication={closeApplication}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};



export default connect(mapStateToProps)(App);



// Make components export default w/o the name

// export default (props) {
// 	return (
		
// 	)
// }

// Simplify Components
// 	-> Make components/functions less specific so that they can be reused elsewhere

// Move some of the mumbo jumbo into the store to simplify the looks
