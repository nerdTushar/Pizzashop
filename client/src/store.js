import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getAllPizzaReducer,addPizzaReducer,getPizzaByIdReducer,updatePizzaByIdReducer} from './reducers/pizzaReducer';
import {cartReducer} from './reducers/cartReducer';
import {registerUserReducer,loginUserReducer,getAllUsersReducer} from './reducers/userReducer';
import {placeOrderReducer,getUserOrdersReducer,allUserOrdersReducer} from './reducers/orderReducer';


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const rootReducer = combineReducers({
    getAllPizzaReducer,
    cartReducer,
    registerUserReducer,
    loginUserReducer,
    placeOrderReducer,
    getUserOrdersReducer,
    addPizzaReducer,
    getPizzaByIdReducer,
    updatePizzaByIdReducer,
    allUserOrdersReducer,
    getAllUsersReducer,
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cartReducer : {
        cartItems : cartItems
    },
    loginUserReducer : {
        currentUser : currentUser
    }
};
const middleware = [thunk];

const store = createStore(rootReducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
    + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;