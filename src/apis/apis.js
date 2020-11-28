import axios from 'axios';

const closeTacosUrl = 'http://pma-tacos/closeTacos'
const orderTacosUrl = 'http://pma-tacos/orderTacos'
const cookTacosUrl  = 'http://pma-tacos/cookTacos'
const cookDeliveryUrl = 'http://pma-tacos/cookDelivery'
const deleteOrderUrl = 'http://pma-tacos/deleteOrder'

export const closeTacos = () => {
    return axios.post(closeTacosUrl,{})
}

export const orderTacos = (orderPass) => {
    return axios.post(orderTacosUrl, {orderPass})
}

export const cookTacos = (cookOrder) => {
    return axios.post(cookTacosUrl, {cookOrder})
}

export const cookDelivery = (deliveryOrder) => {
    return axios.post(cookDeliveryUrl, {deliveryOrder})
}

export const deleteOrder = (deletedOrder) => {
    return axios.post(deleteOrderUrl, {deletedOrder})
}