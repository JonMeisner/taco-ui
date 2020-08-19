import React, { useState } from "react";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
        <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
        <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const tableOptions = {
    pageSize: 8,
    pageSizeOptions: [],
    // selection: true,
    rowStyle: {
        backgroundColor: "#EEE",
    },
};

const tableStyle = {
    width: "inherit",
    height: "inherit",
    pallete: {
        primary: {
            main: "#FFFFFF", // Yellow
        },
        secondary: {
            main: "#FFFFFF", //Green
        },
    },
};

const useStyles = makeStyles((theme) => ({
    show: {
        display: "auto",
        position: "relative",
        width: "1180px",
        height: "850px",
        top: "80px",
        margin: "auto",
        borderStyle: "solid",
        backgroundColor: "#37AA22",
    },
    otherShow: {
        display: "auto",
    },
    root: {
        display: "auto",
    },
    hide: {
        display: "none",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

const TacoContainer = () => {
    const classes = useStyles();
    const [showHideToggler, setShowHideToggler] = useState(false);
    const [showRegisterToggler, setShowRegisterToggler] = useState(false);
    const [showCookToggler, setShowCookToggler] = useState(false);
    const [orders, setOrders] = useState([]);

    window.addEventListener("message", (event) => {
        // Listens for start signal
        if (event.data.openTaco === true) {
            setShowHideToggler(true);
            if (event.data.openTacoCook === true) {
                setShowCookToggler(true);
                setOrders(event.data.orderList);
                //[{Customer: 'Saxy', Spicy: 1, Green: 2, Rona: 3, Cost: 650},{Customer: 'Sandro', Spicy: 5, Green: 0, Rona: 3, Cost: 1400}]
            }
            if (event.data.openRegister === true) {
                setShowRegisterToggler(true);
            }
        }
        if (event.data.openTaco === false) {
            setShowHideToggler(false);
            if (event.data.openTacoCook === false) {
                setShowCookToggler(false);
            }
            if (event.data.openRegister === false) {
                setShowRegisterToggler(false);
            }
        }
    });

    window.addEventListener("keydown", (event) => {
        // Closes UI if ESX key is used
        if (event.keyCode === 27) {
            closeApplication();
        }
    });

    const closeApplication = () => {
        // Close UI Function
        setShowHideToggler(false);
        setShowCookToggler(false);
        setShowRegisterToggler(false);
        setOrders([]);
        apis.closeTacos();
    };

    const cookOrder = (orderData) => {
        //console.log([orderData]);
        setShowHideToggler(false);
        setShowCookToggler(false);
        setOrders([]);
        apis.cookTacos([orderData]);
    };

    return (
        <div className={showHideToggler ? classes.show : classes.hide}>
            <Header closeApplication={closeApplication}/>
            <div
                className={
                    showRegisterToggler ? classes.otherShow : classes.hide
                }
            >
                <Menu />
            </div>
            <div className={showCookToggler ? classes.otherShow : classes.hide}>
                <MaterialTable
                    style={tableStyle}
                    options={tableOptions}
                    icons={tableIcons}
                    columns={[
                        {
                            title: "Customer",
                            field: "Customer",
                            editable: "never",
                        },
                        {
                            title: "Spicy Tacos",
                            field: "Spicy",
                            editable: "never",
                        },
                        {
                            title: "Green Tacos",
                            field: "Green",
                            editable: "never",
                        },
                        { title: "Coronas", field: "Rona", editable: "never" },
                        { title: "Cost ($)", field: "Cost", editable: "never" },
                    ]}
                    data={orders}
                    title="Current Orders"
                    actions={[
                        {
                            icon: PlayCircleFilledWhiteIcon,
                            tooltip: "Cook Order",
                            onClick: (event, rowData) => cookOrder(rowData),
                        },
                    ]}
                    components={{
                        Action: (props) => (
                            <Button
                                onClick={(event) =>
                                    props.action.onClick(event, props.data)
                                }
                                color="primary"
                                variant="contained"
                                style={{ textTransform: "none" }}
                                size="small"
                            >
                                <strong>Cook</strong>
                            </Button>
                        ),
                    }}
                />
            </div>
        </div>
    );
};

export default TacoContainer;
