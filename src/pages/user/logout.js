import React from "react";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token"); // delate token from local
    window.location.reload(); //reload the page
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
