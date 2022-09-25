import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from "../constants/userConstants";
import { 
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,
} from "../constants/userConstants";
import axios from "axios";

export const userLoginAction = (username,password) => async(dispatch) =>{
    try {

        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {
            headers:{
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/login/', {'username': username, 'password': password}, config);

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {

        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
        })
        
    }
}

export const logout = () => (dispatch)=>{
    localStorage.removeItem('userInfo');
    dispatch({type: USER_LOGOUT});
}


export const register = (first_name,last_name,email,username,password) => async(dispatch) =>{
    try {

        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.post('/api/costumer/', {'first_name':first_name,'last_name':last_name,'email':email,'username':username,'password':password}, config);

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        // localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {

        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
        })
        
    }
}


export const getUserDetails= (id) => async(dispatch,getState) =>{
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const {
            userLogin:{userInfo},
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer${userInfo.token}`
            }
        }

        const {data} = await axios.get(`/api/costumer/${id}`, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
        })
        
    }
} 