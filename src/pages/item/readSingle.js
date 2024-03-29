import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactStarsRating from "react-awesome-stars-rating";

const ReadSingleItem = () => {
  const params = useParams();

  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");
/*   const [rate, setRate] = useState(""); */
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    document.title = title
    const getSingleItem = async () => {
      const response = await fetch(`https://mern-pizza-blog.onrender.com/item/${params.id}`);
      const jsonResponse = await response.json();

      setTitle(jsonResponse.singleItem.title);
      setStar(jsonResponse.singleItem.star);
      // setRate(jsonResponse.singleItem.rate);
      setImage(jsonResponse.singleItem.image);
      setDescription(jsonResponse.singleItem.description);
    };
    getSingleItem();
  }, [params.id, title]);

  return (
    <div className="grid-container-si">
      <div>
        {image && <img src={image} alt="item" />}
      </div>
      <div>
        <h1>{title}</h1>
        <p className="point">
                  {`point:`} <span className="number2">{star}</span></p>
        <ReactStarsRating value={parseInt(star)} /> 
        {/* <h2>{rate}</h2> */}
        <hr />
        <p>{description}</p>
        <div>
          <Link to={`/item/update/${params.id}`}>edit post</Link>
          <Link to={`/item/delete/${params.id}`}>delete post</Link>
        </div>
      </div>
    </div>
  );
};

export default ReadSingleItem;
