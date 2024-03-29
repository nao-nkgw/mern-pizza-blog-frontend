import { useEffect, useState } from "react";
import useAuth from "../../utils/useAuth";
import ImgInput from "../../components/imgInput";
import ReactStarsRating from "react-awesome-stars-rating";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  /*   const [rate, setRate] = useState(""); */
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const onChange = (value) => {
    setStar(value);
  };
  const [star, setStar] = useState(3);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://mern-pizza-blog.onrender.com/item/create",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            title: title,
            star: star,
            /*             rate: rate, */
            image: image,
            description: description,
          }),
        }
      );

      const jsonData = await response.json();
      alert(jsonData.message);
    } catch (err) {
      alert("failed created item");
    }
  };

  useEffect(() => {
    document.title = "create page";
  }, []);

  const loginUser = useAuth();

  if (loginUser) {
    return (
      <div>
        <h1 className="page-title">create a post</h1>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          placeholder="restaurant name"
          required
        />
        <ImgInput setImage={setImage} />

        {/*           <input
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            type="text"
            name="rate"
            placeholder="5-grade rating"
            required
          /> */}
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          name="image"
          placeholder="image"
          required
        />
        <form onSubmit={handleSubmit}>
          <p className="rate">
            rating points on a 5-star scale:<br></br>
            <ReactStarsRating value={star} onChange={onChange} required />
          </p>

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
