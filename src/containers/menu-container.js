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
        dispatch(actions.addOrderItem(item, data.orderList))
    };

    const handleMinus = (item) => {
        dispatch(actions.removeOrderItem(item, data.orderList))
    }

    return (
        <Menu
        menuItems={data.menuItems}
        orderList={data.orderList}
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