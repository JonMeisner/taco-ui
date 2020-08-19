import React from "react";
import { makeStyles } from '@material-ui/core';



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

const OrderViews = (props) => {
    return (
        <MaterialTable
            style={tableStyle}
            options={tableOptions}
            icons={tableIcons}
            columns={props.columns}
            data={props.data}
            title={props.title}
            actions={[
                {
                    icon: PlayCircleFilledWhiteIcon,
                    onClick: (event, rowData) => props.cookOrder(rowData),
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
                        <strong>{props.buttonPressText}</strong>
                    </Button>
                ),
            }}
        />
    );
};

export default OrderViews;
