import React from 'react';
import './ArticleCard.css'; // Assuming you have a CSS file for styling

const ArticleCard = ({ image, heading, body, link }) => {
  return (
    <div className="article-card">
      <img src={image} alt={heading} className="article-image" />
      <div className="article-content">
        <h2 className="article-heading">{heading}</h2>
        <p className="article-body">{body}</p>
        <a href={link} className="article-button">Read More</a>
      </div>
    </div>
  );
};

export default ArticleCard;
