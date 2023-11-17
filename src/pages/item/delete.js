import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
/* import useAuth from "../../utils/useAuth" */

const DeleteItem = () => {
  const params = useParams();

  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  /* const [email, setEmail] = useState("")  */

  useEffect(() => {
    document.title = "delete page";

    const getSingleItem = async () => {
      const response = await fetch(`http://localhost:5000/item/${params.id}`);
      const jsonResponse = await response.json();
      setTitle(jsonResponse.singleItem.title);
      setRate(jsonResponse.singleItem.rate);
      setImage(jsonResponse.singleItem.image);
      setDescription(jsonResponse.singleItem.description);
      /* setEmail(jsonResponse.singleItem.email)	 */
    };
    getSingleItem();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/item/update/${params.id}`,
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
      alert("failed delete");
    }
  };

  /*     const loginUser = useAuth()	 */

  /*     if(loginUser === email){ */
  return (
    <div className="delete-page">
      <h1 className="page-title">delete the article</h1>
      <form onSubmit={handleSubmit}>
        <h2>{title}</h2>
        {image && <img src={require(`../../images${image}`)} alt="article" />}
        <h3>{rate}</h3>
        <p>{description}</p>
        <button>delete</button>
      </form>
    </div>
  );
  /*     }else{	                            
        return <h1>権限がありません</h1>
    } */
};

export default DeleteItem;
