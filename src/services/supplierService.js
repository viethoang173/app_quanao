import { DOMAIN } from '../constants/config';
const ADD_SUPPLIER = DOMAIN + 'api/api_supplier/supplier_add';
const GET_ALL_SUPPLIER = DOMAIN + 'api/api_supplier/supplier_list';
const GET_DETAIL_SUPPLIER = DOMAIN + 'api/api_supplier/supplier_detail';

const get_all_supplier = async (sort) => {

    var sort_list = 'created-desc';

    switch(sort)
    {
        case 'Nợ giảm dần':
            sort_list = 'no_desc';
            break;
        case 'Nợ tăng dần':
            sort_list = 'no_asc';
            break;
        case 'Ngày hẹn nợ giảm dần':
            sort_list = 'hentra_desc';
            break;
        case 'Ngày hẹn nợ tăng dần':
            sort_list = 'hentra_asc';
            break;
        case 'Tên A-Z':
            sort_list = 'title_asc';
            break;
        case 'Tên Z-A':
            sort_list = 'title_desc';
            break;
        default: 
            sort_list = 'created-desc';
            break;
    }

    return await fetch(GET_ALL_SUPPLIER,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sort: sort_list,
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


const add_supplier = async (data) => {
    var images = data.image_show.join(',');
    
    return await fetch(ADD_SUPPLIER,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: data.title,
                address: data.address,
                phone: data.phone,
                images:images,
                loaitien: data.selectedCheckbox
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

const get_detail_supplier = async (id) => {
    return await fetch(GET_DETAIL_SUPPLIER,
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



export {
    add_supplier,
    get_all_supplier,
    get_detail_supplier
}
