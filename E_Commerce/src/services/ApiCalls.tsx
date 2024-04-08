import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";

// -------------------------------------------------
//           AXIOS CONFIGURATION
const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqNENWdUR6R0RpQTJzeHUwWVlPWW5kaUU0WGtvbnNGYiIsImlhdCI6MTY3NDU4NjI5OTUyN30.W01xe4zYHPf8-n8KlW_OnPe8anXZFzNPLIHHmmYTsDCBIeVqTYhbbYxHvRW3HTrN3nnwD9CSvbnFpvC_655UAQ";
export let urlApi = axios.create({
    baseURL: "https://eshop-deve.herokuapp.com/api/v2/",
    headers: {
        "Authorization": token
    }
});

// -------------------------------------------------
//                  API GETS

//              GET ALL PRODCUTS
export const getProducts = async () => {
    try {
        const response = await urlApi.get(`/products`);
        return response.data.products
    } catch (err) {
        console.error(err);
    }

}

//              GET PRODCUT BY ID
export const getProducts_ID = async (id: any) => {

    try {
        const response = await urlApi.get(`/products/${id}`);
        return response.data.product
    } catch (err) {
        console.error(err);
    }

}