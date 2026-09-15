import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from 'react'


//this takes of that user cannot navigate to certain component/pages without login
const Protected = ({children}) => {
    const { loading,user } = useAuth()


    if(loading){
        return (<main><h1>Loading...</h1></main>)
    }

    if(!user){ //user is null-> means user not logged in so navigate to login page
        return <Navigate to={'/login'} />
    }
    
    return children
}

export default Protected