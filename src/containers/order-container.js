import React, {useState, useEffect } from 'react';
import * as apis from '../apis/apis';

// import order
import { useDispatch, connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as cookActions from '../store/actions/order.actions';
import * as cookSelectors from '../store/selectors/order.selectors';
import OrderViews from '../components/order-views';

const OrderContainer = (props) => {
    //const dispatch = useDispatch();
    const data = useSelector(state => state.getOrderData)
    //console.log(data.orderList);
    const meals = [
        { title: "Customer", field: "Customer", editable: "never" },
        { title: "Spicy Tacos", field: "Spicy", editable: "never" },
        { title: "Carne Asada Tacos", field: "Carne", editable: "never" },
        { title: "Green Tacos", field: "Green", editable: "never" },
        { title: "Coronas", field: "Rona", editable: "never" },
        { title: "Cost ($)", field: "Cost", editable: "never" },
    ];


    const title = "Current Orders";
    const buttonPressText = "Cook";
    const cookOrder = (orderFinal) => {
        apis.cookTacos([orderFinal]);
    };

    const deleteOrder = (deletedOrder) => {
        apis.deleteOrder([deletedOrder])
        props.closeApplication()
    };

    return (
        <div>
            <OrderViews
                title={title}
                buttonePressText={buttonPressText}
                data={data.orderList}
                columns={meals}
                cookOrder={cookOrder}
                deleteOrder={deleteOrder}
            />
        </div>
    )
}

const mapStatetoProps = createStructuredSelector({
    getMenuData: cookSelectors.getOrderData
})


export default connect(mapStatetoProps)(OrderContainer);