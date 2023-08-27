import axios from 'axios';

const url='';
// http://localhost:8000';

export const authenticateSignUp= async (data)=>{
    try{
        return await axios.post(`${url}/signup`, data)
    }
    catch(error){
        console.log(`Error while calling signup api  is: ${error}`);
    }
}

export const authenticateLogin= async (data)=>{
    try{
        return await axios.post(`${url}/login`, data)
    }
    catch(error){
        console.log(`Error while calling login api  is: ${error}`);
        return error.response;
    }
}

export const payUsingPaytm= async (data)=>{
    try{
        let response= await axios.post(`${url}/payment`, data);
        return response.data;
    }
    catch(error){
        console.log("Error while calling payment api", error);
    }
}
