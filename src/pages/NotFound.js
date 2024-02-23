import { Link } from "react-router-dom";
import img_404 from "./404-error.png";

const NotFound = () => {
  return (
    <>
      <div className="grid-container-404">
        <img className="grid-container-404-img" src={img_404} alt="not found" />

        <div>
          <Link to="/">
            {" "}
            <button>Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
