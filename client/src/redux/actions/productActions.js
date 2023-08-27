import axios from "axios";
import * as actiontypes from "../constants/productConstant";

const url ="";
//  "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    let response = await axios.get(`${url}/products`);
    console.log(`Resonse from productactions is: ${response}`);
    let { data } = response;
    dispatch({ type: actiontypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actiontypes.GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actiontypes.GET_PRODUCT_DETAILS_REQUEST });
    let { data } = await axios.get(`${url}/products/${id}`);
    dispatch({ type: actiontypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actiontypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};
