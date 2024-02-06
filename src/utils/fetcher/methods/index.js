import axios from "axios";
import Cookies from "js-cookie";

export const getRequest = async (url) => {
    if(Cookies.get("identityToken") !== undefined){
        return (await axios.get(url, {
            headers: {
                Authorization: `Bearer ${Cookies.get("identityToken")}`
            }
        })).data;
    }else {
        return (await axios.get(url)).data;
    }
}

export const postRequest = async (url, body) => {
    if(Cookies.get("identityToken") !== undefined){
        return (await axios.post(url, body, {
            headers: {
                Authorization: `Bearer ${Cookies.get("identityToken")}`
            }
        })).data;
    }else {
        return (await axios.post(url, body));
    }
}

export const putRequest = async (url, body) => {
    if(Cookies.get("identityToken") !== undefined){
        return (await axios.put(url, body, {
            headers: {
                Authorization: `Bearer ${Cookies.get("identityToken")}`
            }
        })).data;
    }else {
        return (await axios.put(url, body));
    }
}