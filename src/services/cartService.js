import { DOMAIN } from '../constants/config';

const GET_LIST_CART = DOMAIN + 'api/api_cart/cart_list';
const ADD_CART = DOMAIN + 'api/api_cart/cart_add';
const GET_DETAIL_QUANTITY_CART = DOMAIN + 'api/api_cart/cart_detail_quantity';
const EDIT_QUANTITY_CART = DOMAIN + 'api/api_cart/cart_edit_quantity';
const UPDATE_PRICE = DOMAIN + 'api/api_cart/cart_price_update';
const UPDATE_CUSTOMER = DOMAIN + 'api/api_cart/cart_customer_update';
const GET_NUMBER_CART = DOMAIN + 'api/api_cart/get_number_cart';
const DELETE_CART = DOMAIN + 'api/api_cart/cart_delete';
const PAYMENT_CART = DOMAIN + 'api/api_cart/cart_payment';
const GET_THU_DETAIL = DOMAIN + 'api/api_cart/cart_thu_detail';
const EDIT_THU = DOMAIN + 'api/api_cart/cart_thu_edit';


const add_cart = async (data) => {
    console.log('cart data ready to server', JSON.stringify(data));

    return await fetch(ADD_CART,
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
            console.log(responseJson);
            // return responseJson;

            if (responseJson !== '')
                return responseJson;
            else
                return false;
        });
}

const get_list_cart = async () => {
    return await fetch(GET_LIST_CART,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson !== '')
                return responseJson;
            else
                return false;
        });
}

const get_detail_quantity_cart = async (data) => {
    console.log(data);
    return await fetch(GET_DETAIL_QUANTITY_CART,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson !== '')
                return responseJson;
            else
                return false;
        });
}

const edit_quantity_cart = async (data, list) => {
    // console.log('lsquan day len :', {
    //     u_id: data.u_id,
    //     bill_id: data.bill_id,
    //     product_id: data.product_id,
    //     order_id: data.order_id,
    //     list_quantity: list
    // });
    return await fetch(EDIT_QUANTITY_CART,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                u_id: data.u_id,
                bill_id: data.bill_id,
                product_id: data.product_id,
                order_id: data.order_id,
                list_quantity: list
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson !== '')
                return responseJson;
            else
                return false;
        });
}


const update_price = async (data) => {
    // console.log('update price', JSON.stringify(data));
    return await fetch(UPDATE_PRICE,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson !== '')
                return responseJson;
            else
                return false;
        });
}

const update_customer = async (data) => {
    // console.log(data);
    // console.log('data update ', JSON.stringify(data));
    // return true;
    return await fetch(UPDATE_CUSTOMER,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson !== '')
                return responseJson;
            else
                return false;
        });
}

const get_number_cart = async (u_id) => {
    return await fetch(GET_NUMBER_CART,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                u_id: u_id,
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson !== '')
                return responseJson;
            else
                return false;
        });
}

const delete_cart = async (data) => {
    // console.log('update price', JSON.stringify(data));
    return await fetch(DELETE_CART,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson !== '')
                return responseJson;
            else
                return false;
        });
}

const payment_cart = async (data) => {
    console.log('payment', JSON.stringify(data));
    return await fetch(PAYMENT_CART,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson !== '')
                return responseJson;
            else
                return false;
        });
}

const get_thu_detail = async (thu_id) => {
    // console.log('thu_id', JSON.stringify(thu_id));
    // return true;
    return await fetch(GET_THU_DETAIL,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                thu_id: thu_id
            }),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson !== '')
                return responseJson;
            else
                return false;
        });
}

const edit_thu = async (data) => {
    console.log('thu_id', JSON.stringify(data));
    
    return await fetch(EDIT_THU,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            if (responseJson !== '')
                return responseJson;
            else
                return false;
        });
}

export {
    add_cart,
    get_list_cart,
    get_detail_quantity_cart,
    edit_quantity_cart,
    update_price,
    update_customer,
    get_number_cart,
    delete_cart,
    payment_cart,
    get_thu_detail,
    edit_thu
}