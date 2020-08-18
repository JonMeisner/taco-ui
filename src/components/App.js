import React from 'react';
import * as apis from '../apis/apis'; // Connections
import { makeStyles, AppBar, Toolbar, Button, IconButton, Typography, Paper } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';
import './App.scss';
import Menu from './Menu.js';
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
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

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
    // selection: true,
    rowStyle: {
        backgroundColor: '#EEE',
    }

}

const tableStyle = {
    width: "inherit",
    height: "inherit",
    pallete: {
        primary: {
            main: '#FFFFFF', // Yellow
        },
        secondary: {
            main: '#FFFFFF',//Green
        },
    },
}
const useStyles = makeStyles((theme) => ({ // Styling for components
    show: {
        display: 'auto',
        position: 'relative',
        width: '1180px',
        height: '850px',
        top: '80px',
        margin: 'auto',
        borderStyle: 'solid',
        backgroundColor: '#37AA22',
    },
    otherShow: {
        display:'auto',
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
}))
export default function App() {
    const classes = useStyles();
    const [showHideToggler, setShowHideToggler] = React.useState(false);
    const [showRegisterToggler, setShowRegisterToggler] = React.useState(false);
    const [showCookToggler, setShowCookToggler] = React.useState(false);
    //const [userID, setCustomerName] = React.useState('');
    //let start = [{Customer: 'Saxy', Spicy: 1, Green: 2, Rona: 3, Cost: 650},{Customer: 'Sandro', Spicy: 5, Green: 0, Rona: 3, Cost: 1400}]
    const [orders, setOrders] = React.useState([]); // React.useState([]);

    window.addEventListener('message', (event) => { // Listens for start signal
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

    window.addEventListener("keydown", (event) => { // Closes UI if ESX key is used
        if (event.keyCode === 27) {
            closeApplication();
        }
    });

    const closeApplication = () => {    // Close UI Function
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
        apis.cookTacos([orderData])
    };

    return (
        <div className={showHideToggler ? classes.show : classes.hide}>
            {/* <div style={{ marginLeft:'530px', marginTop: '365px'}} class='Loader'></div> */}
            <div> {/*Top Section*/}
                <AppBar position='relative' color='default'>
                    <Toolbar style={{backgroundColor: '#EED414'}}>
                    <img src='img/theTacoFarmer.png' alt='taco' height='50' width='200'/>
                    {/* <FastfoodIcon style={{fontSize: '35px'}}/> */}
                    {/* <Typography style={{ marginLeft: '17px'}} variant='h6' noWrap>{customerName}</Typography> */}
                    <IconButton style={{marginLeft: 'auto'}} onClick={() => closeApplication()}>
                        <ExitToApp />
                    </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
            <div className = { showRegisterToggler ? classes.otherShow : classes.hide }>
                <Menu/>
            </div>
            <div className = { showCookToggler ? classes.otherShow : classes.hide }>
            <MaterialTable 
                style={tableStyle}
                options={tableOptions}
                icons = {tableIcons}
                columns = {[
                    {title: 'Customer', field: 'Customer', editable: 'never'},
                    {title: 'Spicy Tacos', field: 'Spicy', editable: 'never'},
                    {title: 'Green Tacos', field: 'Green', editable: 'never'},
                    {title: 'Coronas', field: 'Rona', editable: 'never'},
                    {title: 'Cost ($)', field: 'Cost', editable: 'never'},
                ]}
                data = {orders}
                title = 'Current Orders'
                actions={[
                    {
                        icon: PlayCircleFilledWhiteIcon,
                        tooltip: 'Cook Order', 
                        onClick: (event, rowData) => cookOrder(rowData)
                    }
                ]}
                components={{
                    Action: props => (
                        <Button 
                        onClick = {(event) => props.action.onClick(event, props.data)}
                        color='primary'
                        variant="contained"
                        style={{textTransform: 'none'}}
                        size='small'
                        ><strong>Cook</strong></Button>
                    ),
                }}
            />
            </div>
        </div>
    )
}