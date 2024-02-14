import { GET_PRODUCT_DATA, GET_PRODUCT_ITEM, SAVE_PRODUCT_ITEM, CURRENT_PRODUCT_ID, ADD_PRODUCT, GET_DETAIL_PRODUCT, ADD_QUANTITY, UPDATE_QUANTITY, GET_PRICE, GET_TYPE } from '../constants/actionTypes';

const productAction = (act, data) => async (dispatch) => {
    switch (act) {
        case 'current_product_id':
            dispatch({ type: CURRENT_PRODUCT_ID, payload: data }); break;
        case 'add_product':
            dispatch({ type: ADD_PRODUCT, payload: data }); break;
        case 'get_products':
            dispatch({ type: GET_PRODUCT_DATA, payload: data }); break;
        case 'get_details_product':
            dispatch({ type: GET_DETAIL_PRODUCT, payload: data }); break;
        case 'add_quantity':
            dispatch({ type: ADD_QUANTITY, payload: data }); break;
        case 'update_quantity':
            dispatch({ type: UPDATE_QUANTITY, payload: data }); break;
        case 'get_price':
            dispatch({ type: GET_PRICE, payload: data }); break;
        case 'get_type':
            dispatch({ type: GET_TYPE, payload: data }); break;
        default:
            break;
    }

    //  if(act == 'getTxt')
    // {
    //    	dispatch({
    //    		type: GET_TXT, 
    //    	});
    // }

    //  if(act == 'setTxt')
    // {
    //    dispatch({
    //      type: SET_TXT, 
    //      data: data
    //    });
    //  }
}

export default productAction;