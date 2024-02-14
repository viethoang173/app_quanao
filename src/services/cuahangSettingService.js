import { DOMAIN } from '../constants/config';
const CUA_HANG_SETTING = DOMAIN + 'api/api_cuahang/cuahang_setting';
const EDIT_CUA_HANG_SETTING = DOMAIN + 'api/api_cuahang/cuahang_setting_edit';

const get_cua_hang = async () => {
    return await fetch(CUA_HANG_SETTING,
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
const edit_cua_hang = async (data) => {
    console.log('xxx', data);
    // return true
    return await fetch(EDIT_CUA_HANG_SETTING,
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

            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}




export {
    get_cua_hang,
    edit_cua_hang,
}
