import { Link } from "react-router-dom";

function Back() {
  return (
    <nav className="single-nav">
      <Link to="/home" className="btn">
        Back
      </Link>
    </nav>
  );
}

export default Back;
