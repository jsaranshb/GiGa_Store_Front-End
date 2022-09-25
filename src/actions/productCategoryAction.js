import {
    PRODUCT_CATEGORY_REQUEST,
    PRODUCT_CATEGORY_SUCCESS,
    PRODUCT_CATEGORY_FAIL
} from '../constants/categoryConstants';
import axios from 'axios';

export const categoryProducts = ()=> async(dispatch)=>{
    try{
        dispatch({type: PRODUCT_CATEGORY_REQUEST})
        const{data} = await axios.get('/api/pCategory/');

        dispatch({
            type: PRODUCT_CATEGORY_SUCCESS,
            payload: data,
        })
    }catch(error){
        dispatch({
            type: PRODUCT_CATEGORY_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
        })
    }
}