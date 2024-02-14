import { DOMAIN } from '../constants/config';

const LOGIN_USER_API = DOMAIN + 'api/api_user/user_login';
const DETAIL_USER_API = DOMAIN + 'api/api_user/user_detail';
const USER_LIST_API = DOMAIN + 'api/api_user/user_list';

const login = async (user, pass) => {
    const d = await fetch(LOGIN_USER_API,
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: user,
            pass: pass,
        })
    });

    console.log(d);

    const responseJson = await d.json();
    
    if (responseJson.res && responseJson.res == 'done')
        return responseJson.data;
    else
        return false;


    // .then((response) => response.json())
    // .then((responseJson) => {

    //     if (responseJson.res && responseJson.res == 'done')
    //         return responseJson.data;
    //     else
    //         return false;
    // });
}

const get_user_data = async (token) => {
    return await fetch(DETAIL_USER_API,
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: token,
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

const get_user_list = async (data) => {

    var group_id = '';

    switch(data)
    {
        case 'Quản lí cửa hàng':
            group_id = 1;
            break;
        case 'Nhân viên kho':
            group_id = 2;
            break;
        case 'Nhân viên bán hàng':
            group_id = 3;
            break;
        case 'Khách':
            group_id = 4;
            break;
        default: 
            group_id = '';
            break;
    }

    console.log('group_id');
    console.log(group_id);

    const d = await fetch(USER_LIST_API,
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            group_id: group_id,
        })
    });

    console.log(d);
    const responseJson = await d.json();

    // .then((response) => response.json())
    // .then((responseJson) => {

        if (responseJson.res && responseJson.res == 'done')
            return responseJson.data;
        else
            return false;
    // });
}

export {
    login,
    get_user_data,
    get_user_list,
}
