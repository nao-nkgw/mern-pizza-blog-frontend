import { Link } from "react-router-dom";
import img_404 from "./404-error.png";

const NotFound = () => {
  
  return (
    <div>
      <div>
        <div>
          <img
            src={img_404}
            alt="not found"
          />
          <h2>page not found</h2>
          {/* 直接Linkコンポーネントを使用してリンクを作成 */}
          <Link to="/">to HomePage</Link>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default NotFound;
