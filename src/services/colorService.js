import { DOMAIN } from '../constants/config';

const GET_ALL_COLOR = DOMAIN + 'api/api_color/color_list';
const ADD_COLOR = DOMAIN + 'api/api_color/color_add';

const get_all_color = async () => {
    return await fetch(GET_ALL_COLOR,
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

const get_all_color_child = async (idParent) => {
    return await fetch(GET_ALL_COLOR,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                parent_id: idParent,
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

const add_color = async (data) => {
    return await fetch(ADD_COLOR,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                parent_id: data.parent_id || '',
                content: data.content,
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
    get_all_color,
    get_all_color_child,
    add_color
}
