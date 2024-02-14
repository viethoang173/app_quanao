import { DOMAIN } from '../constants/config';

const GET_HANG = DOMAIN + 'api/api_hang/hang_list';
const ADD_HANG = DOMAIN + 'api/api_hang/hang_add';


const get_hang = async () => {
    return await fetch(GET_HANG,
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
                return responseJson.data;
            else
                return false;
        });
}

const add_hang = async (data) => {
    console.log(JSON.stringify({ title: data }));
    return await fetch(ADD_HANG,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: data
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson !== '')
                return responseJson.data;
            else
                return false;
        });
}

export {
    get_hang,
    add_hang
}