import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="Hello there!" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              My name is Joshua Alves and I am a software developer. This is a
              project developed as part of "The Ultimate 2022 Fullstack Web
              Development Bootcamp" course that I did in Udemy. More specifically, this projects aims to explore what I've learned as part of the React 201 module. Hope you enjoy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
