import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {<a key="home-links" href="#home">home</a>}
    {<a key="about-links" href="#about">about</a>}
    {<a key="projects-links" href="#projects">projects</a>}
  </nav>;
}

export default NavBar;