import React from 'react';

import Header from './header';
import Footer from './footer';
import ArticleCard from './ArticleCard';

const Home = () =>{

    const articles = [
        {
          image: 'path-to-image3.jpg',
          heading: 'Homchang',
          body: 'This is a short description of Article 1.',
          link: '#',
        },
        {
          image: 'path-to-image3.jpg',
          heading: 'Article 2',
          body: 'This is a short description of Article 2.',
          link: '#',
        },
        {
          image: 'path-to-image3.jpg',
          heading: 'Article 3',
          body: 'This is a short description of Article 3.',
          link: '#',
        },
      ];

    
    return(
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