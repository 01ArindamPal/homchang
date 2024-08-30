import React from "react";

import './Home.css';
import Header from "./header";
import ArticleCard from "./ArticleCard";
import Footer from "./footer";

const Home = () => {
  

  return (
    <div className="App">
      <Header />

      <ArticleCard />

      <Footer />
    </div>
  );
};

export default Home;
