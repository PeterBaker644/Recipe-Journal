import React from "react";

function Splash() {
  return (
    <div className="container">
      <h1>Recipe Box</h1>

      <section className="aboutGif">
        <h2>About</h2>
        <p>Picure here???</p>
      </section>

      <a href="/signup" className="btn btn-primary">
        {" "}
        Signup
      </a>
      {"  "}
      <a href="/login" className="btn btn-primary">
        {" "}
        Login{" "}
      </a>
      <a href="/Gene" className="btn btn-primary">
        {" "}
        genepagetest{" "}
      </a>
    </div>
  );
}

export default Splash;
