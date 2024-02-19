import { useState, useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://mern-pizza-blog.onrender.com/user/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //change to json-form
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const jsonResponse = await response.json();
      alert(jsonResponse.message);
    } catch (err) {
      alert("failed registered user!");
    }
  };

  useEffect(() => {
    document.title = "register page";
  }, []);

  return (
    <div>
      <h1 className="page-title">create an account</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          placeholder="user name"
          required
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          name="email"
          placeholder="e-mail address"
          required
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          name="password"
          placeholder="password"
          required
        />
        <button>register</button>
      </form>
    </div>
  );
};

export default Register;
