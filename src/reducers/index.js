import { combineReducers } from 'redux';

// import getCurrentWeatherReducers from './getCurrentWeatherReducers';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';
import supplierReducer from './supplierReducer';
import colorReducer from './colorReducer';
import sizeReducer from './sizeReducer';
import hangReducer from './hangReducer';
import cartReducer from './cartReducer';
import customerReducer from './customerReducer';
import accountReducer from './accountReducer';


const appReducer = combineReducers({
    product: productReducer,
    category: categoryReducer,
    supplier: supplierReducer,
    color: colorReducer,
    size: sizeReducer,
    hang: hangReducer,
    cart: cartReducer,
    customer: customerReducer,
    admin: accountReducer,
});


export default appReducer;
