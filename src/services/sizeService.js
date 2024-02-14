import { DOMAIN } from '../constants/config';

const GET_ALL_SIZE = DOMAIN + 'api/api_size/size_list';
const ADD_SIZE = DOMAIN + 'api/api_size/size_add';

const get_all_size = async () => {
    return await fetch(GET_ALL_SIZE,
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

const add_size = async (data) => {
    return await fetch(ADD_SIZE,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                parent_id: data.parent_id || '',
                title: data.title,
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(data);

            if (responseJson.res && responseJson.res == 'done')
                return responseJson.data;
            else
                return false;
        });
}



export {
    get_all_size,
    add_size
}
