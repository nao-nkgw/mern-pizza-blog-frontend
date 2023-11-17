import { useState } from "react";
import useAuth from "../../utils/useAuth";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/item/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          title: title,
          rate: rate,
          image: image,
          description: description,
        }),
      });

      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("failed created item");
    }
  };

  const loginUser = useAuth();

  if (loginUser) {
    return (
      <div>
         <h1 className="page-title">create</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="restaurant name"
            required
          />
          <input
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            type="text"
            name="rate"
            placeholder="5-grade rating"
            required
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            name="image"
            placeholder="image"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            placeholder="comment"
            required
          ></textarea>
          <button>create</button>
        </form>
      </div>
    );
  }
};

export default CreateItem;
