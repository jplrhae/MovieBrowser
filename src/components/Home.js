import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Movie Browser - a React project" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">Welcome to Movie Browser! To start browsing, simply search a movie name in the search bar.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
