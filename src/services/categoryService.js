import { DOMAIN } from '../constants/config';

const GET_CATEGORIES = DOMAIN + 'api/api_category/get_categories';
const ADD_CATEGORIES = DOMAIN + 'api/api_category/category_add';
const EDIT_CATEGORIES = DOMAIN + 'api/api_category/category_edit';
const DELETE_CATEGORY = DOMAIN + 'api/api_category/category_delete';
const CATEGORY_UPDATE_STATUS = DOMAIN + 'api/api_category/category_update_statuss';


const get_category = async (data) => {
    return await fetch(GET_CATEGORIES,
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

            if (responseJson !== '')
                return responseJson;
            else
                return false;
        });
}

const add_category = async (data) => {
    console.log('dataxxx', data);
    return await fetch(ADD_CATEGORIES,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                parentId: data.parentId,
                title: data.title,
            })
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
const edit_category = async (data) => {
    return await fetch(EDIT_CATEGORIES,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: data.id,
                title: data.title,
            })
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

const delete_category = async (id) => {
    console.log(id);
    // return  true ;
    return await fetch(DELETE_CATEGORY,
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
            console.log(responseJson);
            // return responseJson;

            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}

const category_update_status = async (data) => {
    return await fetch(CATEGORY_UPDATE_STATUS,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: data.id,
                title: data.title,
            })
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



// const favourite_product = async (data) => 
// {
//     return await fetch(API_FAVOURITE_PRODUCT, 
//     {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             uid: data.uid,
//             product_id: data.product_id,
//             favourites: data.favourites,
//         })
//     })
//     .then((response) => response.json())
//     .then((responseJson) => 
//     {
//         console.log(responseJson);
//         return responseJson;

//         if(responseJson.res && responseJson.res == 'done')
//             return responseJson.data;
//         else
//             return false;
//     });
// }

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
    get_category,
    add_category,
    edit_category,
    delete_category,
    category_update_status,
    // favourite_product,
    // history_search,
};
