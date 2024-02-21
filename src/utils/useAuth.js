import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const useAuth = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        if(!token){
            navigate("/"); 
        }
    
        try{
            const decoded = jwt_decode(token);
            setUser(decoded.email); 
        }catch(error){
            navigate("/user/login");
        }
    }, [navigate]);

    return user; 
}

export default useAuth;
