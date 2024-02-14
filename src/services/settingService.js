import { DOMAIN } from '../constants/config';
const GET_STORE_SETTING = DOMAIN + 'api/api_cuahang/cuahang_detail';

const get_infomation = async () => {
    return await fetch(GET_STORE_SETTING,
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




export {
    get_infomation,
}
