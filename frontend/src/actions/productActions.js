import axios from "axios"
import { Product_List_Fail, Product_List_Req, Product_List_Success } from "../constants/productConstants"


export const listProduct = () => async (dispatch) => {
    try{
        dispatch({
            type: Product_List_Req
        })
        const {data} = await axios.get("/api/products")
        dispatch({
            type: Product_List_Success,
            payload: data
        })
    }catch(error){
        dispatch({
            type: Product_List_Fail,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}