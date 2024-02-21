import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../utils/useAuth";

const ReadAll = () => {
  const [allItems, setAllItems] = useState();
  const user = useAuth(); // Get the authenticated user

  useEffect(() => {
    document.title = "Pizza Review";

    const getAllItems = async () => {
      const response = await fetch("https://mern-pizza-blog.onrender.com");
      const jsonResponse = await response.json();
      setAllItems(jsonResponse);
    };
    getAllItems();
  }, []);

  return (
    <div>
      <div>
        {user ? (
          <h2>Hello "user: {user}" !</h2>
        ) : (
          <p className="hello">
            Hello Guest ! 🍕  <span className="hello-span">wanna create a post ? 📝 please login / new register your account !</span>
          </p>
        )}
      </div>
      <div className="grid-container-in">
        {allItems &&
          allItems.allItems.map((item) => (
            <Link to={`/item/${item._id}`} key={item._id} className="card">
              <img src={item.image} alt="item" />
              <div className="texts-area">
                <h2>{item.rate}</h2>
                <h3>{item.title}</h3>
                <p>{item.description.substring(0, 80)}...</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ReadAll;
