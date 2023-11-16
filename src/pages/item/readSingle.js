import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSingleItem = () => {
  const params = useParams();
  
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getSingleItem = async () => {
      const response = await fetch(`http://localhost:5000/item/${params.id}`);
      const jsonResponse = await response.json();

        setTitle(jsonResponse.singleItem.title)
        setRate(jsonResponse.singleItem.rate)
        setImage(jsonResponse.singleItem.image)
        setDescription(jsonResponse.singleItem.description)

    };
    getSingleItem();
  }, [params.id]);

  return (
    <div>
      <div>
        {image && <img src={require(`../../images${image}`)} alt="item" />}
      </div>
      <div>
        <h1>{title}</h1>
        <h2>{rate}</h2>
        <hr />
        <p>{description}</p>
      </div>

    </div>
  );
};

export default ReadSingleItem;
