import { api} from "./axiosSetup";
export const getAllProducts=()=>api.get("/products")