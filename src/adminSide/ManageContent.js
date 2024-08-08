import React, { useState } from 'react';

import './ManageContent.css';
import { Link } from 'react-router-dom';

import './admin-header.css';
import '../components/ContactUs.css';
import logo from '../assets/HG_logo.png';


function ManageContent() {
  const [headline, setHeadline] = useState('');
  const [date, setDate] = useState('');
  const [articleCards, setArticleCards] = useState([]);
  const [newCard, setNewCard] = useState({
    image: '',
    headline: '',
    description: '',
    buttonText: '',
    buttonUrl: ''
  });

  const handleHeadlineSubmit = (e) => {
    e.preventDefault();
    // Add headline logic here
    alert('Headline added!');
  };

  const handleArticleCardChange = (e) => {
    setNewCard({ ...newCard, [e.target.name]: e.target.value });
  };

  const handleArticleCardSubmit = (e) => {
    e.preventDefault();
    setArticleCards([...articleCards, newCard]);
    setNewCard({
      image: '',
      headline: '',
      description: '',
      buttonText: '',
      buttonUrl: ''
    });
    alert('Article card added!');
  };

  return (
    <div className='content'>

<header className="header">
      <div className="header-content">
        <div className="logo">
            <img src={logo} alt="Company Logo" className="logo-image" />
        </div>
      </div>
    </header>

    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/personal-details">Update Personal Details</Link></li>
        <li><Link to="/manage-content">Manage Website Content</Link></li>
      </ul>
    </div>


      <div className="manage-content">
      <h2>Manage Website Content</h2>
      <div className="headline-section">
        <h3>Add/Create Headline and Date</h3>
        <form onSubmit={handleHeadlineSubmit}>
          <label>Headline: <input type="text" value={headline} onChange={(e) => setHeadline(e.target.value)} /></label>
          <label>Date: <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></label>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="article-card-section">
        <h3>Add/Create Article Card</h3>
        <form onSubmit={handleArticleCardSubmit}>
          <label>Image: <input type="text" name="image" value={newCard.image} onChange={handleArticleCardChange} /></label>
          <label>Headline: <input type="text" name="headline" value={newCard.headline} onChange={handleArticleCardChange} /></label>
          <label>Description: <input type="text" name="description" value={newCard.description} onChange={handleArticleCardChange} /></label>
          <label>Button Text: <input type="text" name="buttonText" value={newCard.buttonText} onChange={handleArticleCardChange} /></label>
          <label>Button URL: <input type="text" name="buttonUrl" value={newCard.buttonUrl} onChange={handleArticleCardChange} /></label>
          <button type="submit">Add</button>
        </form>
        <div className="article-cards-list">
          <h3>Existing Article Cards</h3>
          {articleCards.map((card, index) => (
            <div key={index} className="article-card">
              <img src={card.image} alt="Article" />
              <h4>{card.headline}</h4>
              <p>{card.description}</p>
              <a href={card.buttonUrl}>{card.buttonText}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ManageContent;
