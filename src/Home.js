import React from "react";

import './components/Home.css';
import Header from "./components/header";
import ArticleCard from "./components/ArticleCard";
import Footer from "./components/footer";


const Home = () => {
  

  return (
    <div className="Main_div">
      <Header />

      <div className="main-body">
      <div className="larger-section">
        <ArticleCard />
      </div>
      <div className="smaller-section"></div>

      {/* Empty section */}

    </div>

      <Footer />
    </div>
  );
};

export default Home;
