import { combineReducers } from "redux";
import{persisReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
export default combineReducers({
    user:userReducer,
    cart:cartReducer
});