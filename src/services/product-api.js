import axios from "axios";
import { API_BASE_URL, API_ROUTES } from "../config/api-endpoint";
import { storeData } from "../utils/indexedDB";

export const fetchProductList = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `${API_BASE_URL.BASE_URL}${API_ROUTES.FETCH_PRODUCT_LIST}`,
    });
    await storeData('products-db', 'products-store', res?.data?.products);
    return res;
  } catch (e) {
    throw e;
  }
};
