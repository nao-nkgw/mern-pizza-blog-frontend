import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const useAuth = () => {
  const [user, setUser] = useState(null); // 初期値をnullに設定する

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if(token){
      try{
        const decoded = jwt_decode(token);
        setUser(decoded.email); 
      }catch(error){
        setUser(null); // トークンが不正な場合はログイン状態をnullにする
      }
    } else {
      setUser(null); // トークンがない場合もログイン状態をnullにする
    }
  }, []);

  return user; 
}

export default useAuth;


/* import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const useAuth = () => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        if(!token){
            navigate("/user/login"); 
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

export default useAuth; */
