import React from "react";

import './components/Home.css';
import Header from "./components/header";
import ArticleCard from "./components/ArticleCard";
import Footer from "./components/footer";

import Scroll from './components/scroll_button';

const Home = () => {
  

  return (
    <div className="Main_div">
      <Header />
      <Scroll />
      <ArticleCard />

      <Footer />
    </div>
  );
};

export default Home;
