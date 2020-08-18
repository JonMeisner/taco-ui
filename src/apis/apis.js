import axios from 'axios';

const closeTacosUrl = 'http://pma-tacos/closeTacos'
const orderTacosUrl = 'http://pma-tacos/orderTacos'
const cookTacosUrl = 'http://pma-tacos/cookTacos'

export const closeTacos = () => {
    return axios.post(closeTacosUrl, {})
}

export const orderTacos = (orderFinal) => {
    return axios.post(orderTacosUrl, {orderFinal})
}

export const cookTacos = (cookOrder) => {
    return axios.post(cookTacosUrl, {cookOrder})
}