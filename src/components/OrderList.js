import React from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import CookItem from './App';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const tableOptions = {
    pageSize: 8,
    pageSizeOptions: [],
    selection: true,

}

const tableStyle = {
    width: "inherit",
    height: "100px",
    pallete: {
        primary: {
            main: '#EED414', // Yellow
        },
        secondary: {
            main: '#37AA22',//Green
        },
    },
}

const OrderList = props => {
    return (
        <MaterialTable 
        style={tableStyle}
        options={tableOptions}
        icons = {tableIcons}
        columns = {[
            {title: 'Customer', field: 'Customer', editable: 'never'},
            {title: 'Spicy Tacos', field: 'Spicy', editable: 'never'},
            {title: 'Green Tacos', field: 'Green', editable: 'never'},
            {title: 'Coronas', field: 'Rona', editable: 'never'},
        ]}
        data = {props.node}
        title = 'the Taco Farmer'
        actions={[
            {
                icon: 'cook',
                tooltip: 'Cook Order',
                onClick: (event,rowData) => 
            }
        ]}
        />
    );
}
export default OrderList;