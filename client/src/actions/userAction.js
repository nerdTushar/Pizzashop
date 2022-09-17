import axios from 'axios';
import swal from 'sweetalert';

export const registerUser = (user) => async dispatch => {
    dispatch({type : 'USER_REGISTER_REQUEST'})
    try {
        await axios.post('/api/users/register',user);
        // console.log(res);
        dispatch({type : 'USER_REGISTER_SUCCESS'});
    } catch (error) {
        dispatch({type : 'USER_REGISTER_FAIL',payload : error})
    }
};

export const loginUser = (user) => async dispatch => {
    dispatch({type : 'USER_LOGIN_REQUEST'});
    try {
        const response = await axios.post('/api/users/login',user);
        // console.log(response);
        dispatch({type : 'USER_LOGIN_SUCCESS',payload : response.data});
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        window.location.href = '/';
    } catch (error) {
        dispatch({type : 'USER_LOGIN_FAIL',payload : error});
    }
};

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
};

export const getAllUsers = () => async (dispatch) => {
    dispatch({type : 'GET_USERS_REQUEST'});
    try {
        const res = await axios.get('/api/users/getallusers');
        // console.log(res.data);
        dispatch({type : 'GET_USERS_SUCCESS',payload : res.data});
    } catch (err) {
        dispatch({type : 'GET_USERS_FAIL',payload : err});
    }
};

export const deleteUser = (userid) => async (dispatch) => {
    try {
        await axios.post('/api/users/deleteuser',{userid});
        swal("User Deleted Successfully!","success");
        window.location.reload();
        // console.log(res);
    } catch (error) {
        swal("Error While Deleting User");
    }
};

export const userAdmin = (userid) => async (dispatch) => {
    //  const currentUser = getState().loginUserReducer.currentUser;
     dispatch({type : 'USER_ADMIN_REQUEST'});
     try {
        await axios.post('/api/users/useradmin',{userid});
        alert('Admin Maked Successfully');
        const users = await axios.get('/api/users/getallusers');
        dispatch({type : 'USER_ADMIN_SUCCESS',payload : users.data});
        window.location.href = '/admin/userlist';
     } catch (error) {
        dispatch({type : 'USER_ADMIN_FAIL',payload : error});
     }
};