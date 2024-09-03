import React, {useState} from 'react';
import "./ArticleCard.css"; // Assuming you have a CSS file for styling

import icon1 from '../assets/YOG.png';
import icon2 from '../assets/NEFC.png';

const articles = [
  // Example article data, replace with your dynamic data
  { 
    id: 1, 
    title: 'Chief Minister Yogi Adityanath announced a relief amount of Rs 10 crore rupees for flood', 
    image: icon1, 
    description: "Chief Minister Yogi Adityanath announced a relief amount of Rs 10 crore rupees for flood affected state Tripura today from the state's relief and rehabilitation package. In a letter to Tripura's Chief Minister, Dr. Manik Saha, Adityanath expressed solidarity with the people of Tripura. “In this difficult time, the people and government of Uttar Pradesh stand with the people and government of Tripura,” he wrote.", 
    link: '#article1' 
    },
    { 
      id: 2, 
      title: "NEUFC sails into its maiden Durand Cup Final beating Shillong Lajong", 
      image: icon2, 
      description: " In the most anticipated Northeast Derby Northeast United FC beats the home crowd favourites Shillong Lajong FC in the first semifinals of the Durand Cup to make it to its maiden final. The match was played in the jam packed Jawaharlal Nehru Stadium in Shillong. NEUFC still managed to dominate the game scoring 3-0 and keeping most of the ball possession with them.", 
      link: '#article2' 
      },
  // Add more articles here
];

const ArticleCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 15;

  // Logic for displaying articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="article-list">
      {currentArticles.map(article => (
        <div key={article.id} className="article-card">
          <div className="article-image">
            <img src={article.image} alt={article.title} />
          </div>
          <div className="article-details">
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link}>Read more</a>
          </div>
        </div>
      ))}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button 
            key={index + 1} 
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>

  );
};

export default ArticleCard;
