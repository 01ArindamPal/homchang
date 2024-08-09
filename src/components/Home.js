import React from "react";

import Header from "./header";
import Footer from "./footer";
import ArticleCard from "./ArticleCard";
import IMG from "../assets/head_icon.jpg";

const Home = () => {
  const articles = [
    {
      image: IMG,
      heading: "Homchang",
      body: "We are always happy to hear from you about new ideas or information that may clarify, expand on, or even contradict our published work. We ask, however, that you refrain from providing us with non-public information that you are required to keep confidential. In addition, please refrain from sending us any personal health, financial, and/or other identifying information",
      link: "#",
    },
    {
      image: IMG,
      heading: "Homchang",
      body: "This is a short description of Article 2.",
      link: "#",
    },
    {
      image: IMG,
      heading: "Homchang",
      body: "This is a short description of Article .",
      link: "#",
    },
  ];

  return (
    <div className="App">
      <Header />

      <main className="main-content">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            image={article.image}
            heading={article.heading}
            body={article.body}
            link={article.link}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
