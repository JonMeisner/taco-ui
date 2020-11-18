//main react
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import * as apis from '../apis/apis';

//components
import Menu from '../components/menu';

//store
import { useDispatch, connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from '../store/actions/taco.actions';
import * as selectors from '../store/selectors/taco.selectors';


const MenuContainer = (props) => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.getMenuData);
    const handlePlus = (item) => {
        if (item === 'spicy' && data.numSpicy < 5) {
            dispatch(actions.setSpicy(data.numSpicy+1,data.totalCost+300))
            //dispatch(actions.setTotalCost(data.totalCost+300))
        };
        if (item == 'carne_asada_taco' && data.numCarne < 5) {
            dispatch(actions.setCarne(data.numCarne+1,data.totalCost+500))
            //dispatch(actions.setTotalCost(data.totalCost+150))
        };
        if (item == 'green' && data.numGreen < 5) {
            dispatch(actions.setGreen(data.numGreen+1,data.totalCost+100))
            //dispatch(actions.setTotalCost(data.totalCost+200))
        };
        if (item == 'corona' && data.numCorona < 5) {
            dispatch(actions.setCorona(data.numCorona+1,data.totalCost+100))
            //dispatch(actions.setTotalCost(data.totalCost+150))
        };
    };

    const handleMinus = (item) => {
        if (item === 'spicy' && data.numSpicy > 0) {
            dispatch(actions.setSpicy(data.numSpicy-1,data.totalCost-300))
            //dispatch(actions.setTotalCost(data.totalCost-300))
        };
        if (item == 'carne_asada_taco' && data.numCarne > 0) {
            dispatch(actions.setCarne(data.numCarne-1,data.totalCost-500))
            //dispatch(actions.setTotalCost(data.totalCost+150))
        };
        if (item == 'green' && data.numGreen > 0) {
            dispatch(actions.setGreen(data.numGreen-1,data.totalCost-100))
            //dispatch(actions.setTotalCost(data.totalCost-200))
        };
        if (item == 'corona' && data.numCorona > 0) {
            dispatch(actions.setCorona(data.numCorona-1,data.totalCost-100))
            //dispatch(actions.setTotalCost(data.totalCost-150))
        };
    };

    return (
        <Menu
        numSpicy={data.numSpicy}
        numGreen={data.numGreen}
        numCarne={data.numCarne}
        numCorona={data.numCorona}
        totalCost={data.totalCost}
        customerName={data.customerName}
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        orderTacos={props.orderTacos}
    />
    ); 
}

const mapStatetoProps = createStructuredSelector({
    getMenuData: selectors.getMenuData
})

export default connect(mapStatetoProps)(MenuContainer);