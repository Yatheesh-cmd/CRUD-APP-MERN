import base_url from "./base_url";

import commonApi from "./commonApi";

export const addEmployeeApi=async(data)=>{
    return await commonApi(`${base_url}/empadd`,"POST","",data)
}

export const getEmployeeApi=async()=>{
    return await commonApi(`${base_url}/emplist`,"GET","","")
}

export const deleteEmployeeApi=async(id)=>{
    return await commonApi(`${base_url}/deleteemp/${id}`,"DELETE","",{})
}

export const updateEmployeeApi=async(id,data)=>{
    return await commonApi(`${base_url}/editemp/${id}`,"PUT","",data)
}