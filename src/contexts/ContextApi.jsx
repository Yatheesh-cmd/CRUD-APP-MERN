import React, { useState, createContext } from 'react';

export const AddResponseContext = createContext(); 
export const EditResponseContext = createContext();

function ContextApi({ children }) {
    const [addResponse, setAddResponse] = useState(""); 
    const [editResponse,setEditResponse]=useState("");

    return (
        <AddResponseContext.Provider value={{ addResponse, setAddResponse }}>
         <EditResponseContext.Provider value={{ editResponse, setEditResponse }}>
         {children}
         </EditResponseContext.Provider>

           
        </AddResponseContext.Provider>
    );
}

export default ContextApi;