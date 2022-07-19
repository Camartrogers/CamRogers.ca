import { Link } from "react-router-dom";

function Splash() {
  return (
    <>
      <section className="typewriter">
        <h1 className="type">Hello!</h1>
        <p className="type">
          My name is Cam Rogers and welcome to my portfolio.
        </p>
        <p className="type">
          Thank you for taking the time to look at my work.
        </p>
        <p className="type">To proceed, please click:</p>
        <Link to="/home" className="invisible btn">
          Enter
        </Link>
      </section>
    </>
  );
}

export default Splash;
