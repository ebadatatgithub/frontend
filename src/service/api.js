import axios from "axios";

const url = "http://localhost:5000";

export const addSignup=async (cridentials)=>{

    return await axios.post(`${url}/signUp`,cridentials);
};

export const getProduct = async ()=>{
    
    const response=await axios.get(`${url}/product`)
    return response.data;
}