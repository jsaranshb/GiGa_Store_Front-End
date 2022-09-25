import {
    PRODUCT_CATEGORY_REQUEST,
    PRODUCT_CATEGORY_SUCCESS,
    PRODUCT_CATEGORY_FAIL
} from '../constants/categoryConstants';

export const productCategoryReducers = (state={productCategory:[]}, action)=>{
    switch (action.type) {
        case PRODUCT_CATEGORY_REQUEST:
            return {loading:true, productCategory:[]};
    
        case PRODUCT_CATEGORY_SUCCESS:
            return {loading:false, productCategory: action.payload};

        case PRODUCT_CATEGORY_FAIL:
            return {loading:false, error: action.payload};
        
        default :
            return state;
    }
}