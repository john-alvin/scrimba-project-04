import React from "react";
import Data from "./data";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import data from "./data";
import "./App.css";

function App() {
  const heroMain = data.map((item) => {
    return <Hero key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      {heroMain}
    </div>
  );
}

export default App;
