import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { loginCall } from "../../actionCalls";
// import { AuthContext } from "../../state/AuthContext";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // loginCall(
    //   {
    //     email: email.current.value,
    //     password: password.current.value,
    //   },
    //   dispatch
    // );

    try {
      const response = await fetch(
        "https://mern-pizza-blog.onrender.com/user/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      );
      const jsonResponse = await response.json();
      localStorage.setItem("token", jsonResponse.token);
      alert(jsonResponse.message);
    } catch (err) {
      alert("failed login!");
    }
  };

  useEffect(() => {
    document.title = "Login Page";
  }, []);

  return (
    <div>
      <h1 className="page-title">Login</h1>
      <form onSubmit={handleSubmit}>
      <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="user name"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="e-mail address"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          name="password"
          placeholder="password"
          required
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
