import React from 'react';


const APIurl = "https://assets.breatheco.de/apis/fake/todos/user/rebillot"

function APIrequest(){

const getData = async () => {
        try {  
            
            const response = await fetch(APIurl);
            const data = await response.json();
            return data;
        } catch (error) {console.error(error);}
 };




const postData = async () => {
    const body = [];
    try {
        const response = await fetch(APIurl, {
            method:'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
              },
        }); 
        const data = await response.json();
        return data;       
    }catch(error){console.error(error)}
};



const putData = async () => {
    try {
        const response = await fetch(APIurl, {
            method:'PUT',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
              },
        }); 
        const data = await response.json();
        return data;       
    }catch(error){console.error(error)}
};


const deleteData = async () => {
    try {
        const response = await fetch (APIurl, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch(error){console.error(error)}
};




























};

export default APIrequest;