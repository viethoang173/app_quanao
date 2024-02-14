import { DOMAIN } from '../constants/config';
const ADD_CUSTOMER = DOMAIN + 'api/api_customer/customer_add';
const GET_ALL_CUSTOMER = DOMAIN + 'api/api_customer/customer_list';
const GET_DETAIL_CUSTOMER = DOMAIN + 'api/api_customer/customer_detail';
const DELETE_CUSTOMER = DOMAIN + 'api/api_customer/customer_delete';
const EDIT_CUSTOMER = DOMAIN + 'api/api_customer/customer_edit';

const get_all_customer = async () => {
    return await fetch(GET_ALL_CUSTOMER,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {

            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}

const add_customer = async (data) => {
    console.log('xin chao', data);
    return await fetch(ADD_CUSTOMER,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return true
            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}

const edit_detail_customer = async (data) => {
    console.log('xin chao thuan', JSON.stringify(data));
    return await fetch(EDIT_CUSTOMER,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            return true
            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}

const get_detail_customer = async (id) => {
    return await fetch(GET_DETAIL_CUSTOMER,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {

            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}

const delete_customer = async (data) => {
    console.log('hello', data);
    return await fetch(DELETE_CUSTOMER,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    id: data
                })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}


export {
    add_customer,
    get_all_customer,
    get_detail_customer,
    delete_customer,
    edit_detail_customer,
}
