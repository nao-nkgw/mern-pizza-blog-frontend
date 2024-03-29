import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../utils/useAuth";
import ReactStarsRating from "react-awesome-stars-rating";

const DeleteItem = () => {
  const params = useParams();

  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");
  /*     const [rate, setRate] = useState("")   */
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.title = "edit";

    const getSingleItem = async () => {
      const response = await fetch(
        `https://mern-pizza-blog.onrender.com/item/${params.id}`
      );
      const jsonResponse = await response.json();
      setTitle(jsonResponse.singleItem.title);
      /*          setRate(jsonResponse.singleItem.rate) */
      setStar(jsonResponse.singleItem.star);
      setImage(jsonResponse.singleItem.image);
      setDescription(jsonResponse.singleItem.description);
      setEmail(jsonResponse.singleItem.email);
    };
    getSingleItem();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://mern-pizza-blog.onrender.com/item/delete/${params.id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("failed deleted post");
    }
  };

  const loginUser = useAuth();

  if (loginUser === email) {
    return (
      <div className="delete-page">
        <h1 className="page-title">delete</h1>
        <form onSubmit={handleSubmit}>
          <h2>{title}</h2>
          {image && <img src={image} alt="item" />}
          <ReactStarsRating value={parseInt(star)} />
          <p>{description}</p>
          <button>delete post</button>
        </form>
      </div>
    );
  } else {
    return <h1>you don't have the authorization</h1>;
  }
};

export default DeleteItem;
