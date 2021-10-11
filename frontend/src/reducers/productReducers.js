import { Product_List_Fail, Product_List_Req, Product_List_Success } from "../constants/productConstants"

export const productListReducers = (state={ products: [] }, action) => {
    switch(action.type){
        case Product_List_Req:
            return {loading: true, products: []}
        case Product_List_Success:
            return {loading: false, products: action.payload}
        case Product_List_Fail:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}