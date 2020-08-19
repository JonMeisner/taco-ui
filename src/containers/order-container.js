import React, { useState } from "react";

const OrderContainer = () => {
    const meals = [
        { title: "Customer", field: "Customer", editable: "never" },
        { title: "Spicy Tacos", field: "Spicy", editable: "never" },
        { title: "Green Tacos", field: "Green", editable: "never" },
        { title: "Coronas", field: "Rona", editable: "never" },
        { title: "Cost ($)", field: "Cost", editable: "never" },
    ];

    const title = "Current Orders";
    const buttonPressText = "Cook";
    const toolTipText = "Cook Order";
    const cookOrder = () => {
        //console.log([orderData]);
        // setShowHideToggler(false);
        // setShowCookToggler(false);
        // setOrders([]);
        apis.cookTacos();
    };

    return (
        <div>
            <OrderViews
                title={title}
                buttonPressText={buttonPressText}
                data={orderList}
                columns={meals}
                cookOrder={cookOrder}
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    orderList: selectors.getOrders,
});
export default connect(mapStateToProps)(OrderContainer);
