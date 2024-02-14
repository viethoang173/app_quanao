import { DOMAIN } from '../constants/config';

const GET_HOME_PRODUCT = DOMAIN + 'api/api_product/get_home_data';
const ADD_PRODUCT = DOMAIN + 'api/api_product/product_add';
const GET_DETAIL_PRODUCT = DOMAIN + 'api/api_product/product_detail';
const EDIT_PRODUCT = DOMAIN + 'api/api_product/product_edit';
const DELETE_PRODUCT = DOMAIN + 'api/api_product/product_delete';
const GET_CATEGORY_PRODUCTS = DOMAIN + 'api/api_product/get_product_list';
const UPDATE_STATUS = DOMAIN + 'api/api_product/product_status';
const ADD_COLOR_SIZE = DOMAIN + 'api/api_product/product_add_color_size';

const get_home_products = async (data) => {
    return await fetch(GET_HOME_PRODUCT,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({
            //     uid: data.uid,
            //     product_id: data.product_id,
            //     favourites: data.favourites,
            // })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            // console.log(responseJson);
            // return responseJson;

            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}

const add_product = async (data) => {
    console.log('data add product truoc khi day len ', JSON.stringify(data));
    // return true;
    return await fetch(ADD_PRODUCT,
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
            console.log('done', responseJson);

            if (responseJson.res && responseJson.res == 'done')
                return responseJson;
            else
                return false;
        });
}

const get_detail_product = async (id) => {
    return await fetch(GET_DETAIL_PRODUCT,
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

const edit_product = async (data) => {
    console.log(JSON.stringify(data));
    // return true;
    return await fetch(EDIT_PRODUCT,
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
            console.log('data_edit', data);
            // return responseJson;

            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}

const delete_product = async (id) => {
    return await fetch(DELETE_PRODUCT,
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
        .then((response) => true);
}

const get_category_products = async (id, sort, price_from, price_to, hh_status) => {
    // console.log(id);
    // return true;

    //sản phẩm mới
    var sort_list = 'created-desc';

    switch (sort) {
        case 'Sản phẩm cũ':
            sort_list = 'created_asc';
            break;
        case 'Số lượng giảm dần':
            sort_list = 'sl_desc';
            break;
        case 'Số lượng tăng dần':
            sort_list = 'sl_asc';
            break;
        case 'Giá giảm dần':
            sort_list = 'price_desc';
            break;
        case 'Giá tăng dần':
            sort_list = 'price_asc';
            break;
        default:
            sort_list = 'created-desc';
            break;
    }

    var d = await fetch(GET_CATEGORY_PRODUCTS,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                category_id: id,
                sort: sort_list,
                price_from: price_from,
                price_to: price_to,
                hh_status: hh_status,
            })
        });

    // console.log('category_id');
    // console.log(id);

    // console.log(d);
    var responseJson = await d.json();
    // .then((response) => response.json())
    // .then((responseJson) => {
    // console.log(responseJson);
    // return responseJson;

    if (responseJson.res && responseJson.res == 'done')
        return responseJson.data;
    else
        return false;
    // });
}

const update_product_status = async (data) => {
    return await fetch(UPDATE_STATUS,
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
            // return responseJson;
            console.log(responseJson);

            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}

const get_category_products_by_option = async (option) => {
    var sort = 'created-desc';

    switch (option) {
        case 'Sản phẩm mới':
            sort = 'created_desc';
            break;
        case 'Sản phẩm cũ':
            sort = 'created_asc';
            break;
        case 'Số lượng giảm dần':
            sort = 'sl_desc';
            break;
        case 'Số lượng tăng dần':
            sort = 'sl_asc';
            break;
        case 'Giá giảm dần':
            sort = 'price_desc';
            break;
        case 'Giá tăng dần':
            sort = 'price_asc';
            break;
    }
    // console.log('onsort', sort);
    return await fetch(GET_CATEGORY_PRODUCTS,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sort: sort
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            // console.log('res', responseJson);
            // return responseJson;

            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}


const add_color_size = async (data) => {
    console.log(JSON.stringify(data));
    // return true;
    return await fetch(ADD_COLOR_SIZE,
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

            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}

// const history_search = async (data) => 
// {
//     return await fetch(API_SEARCH_HISTORY_PRODUCT, 
//     {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             uid: data.uid,
//             search_key: data.search_key,
//             city_id: data.city_id,
//             category_current_id: data.category_current_id,
//         })
//     })
//     .then((response) => response.json())
//     .then((responseJson) => 
//     {
//         return responseJson;

//         if(responseJson.res && responseJson.res == 'done')
//             return responseJson.data;
//         else
//             return false;
//     });
// }

export {
    get_home_products,
    add_product,
    get_detail_product,
    edit_product,
    delete_product,
    get_category_products,
    update_product_status,
    get_category_products_by_option,
    add_color_size
    // favourite_product,
    // history_search,
};
