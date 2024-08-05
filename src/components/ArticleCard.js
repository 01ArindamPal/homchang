import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({ image, heading, body, link }) => {
  return (
    <div className="article-card">
      <img src={image} alt="Article" className="article-image" />
      <div className="article-content">
        <h3 className="article-heading">{heading}</h3>
        <p className="article-body">{body}</p>
        <a href={link} className="article-button">Read More</a>
      </div>
    </div>
  );
};

export default ArticleCard;
