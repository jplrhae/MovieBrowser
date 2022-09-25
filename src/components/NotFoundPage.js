import Hero from "./Hero";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Hero text="Unfortunately we couldn't find this page :(" />
      <div className="container">
        <div className="row">
          <h1 className="col-lg-12 text-center my-5">
            <Link className="nav-link" to="/">
              Return to Home
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
