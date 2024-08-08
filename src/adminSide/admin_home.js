import React, {useState} from 'react';

import './admin_home.css'; // header and side new style sheet
import companyLogo from '../assets/HG_logo.png';  

function Admin_home() {
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
    <div className='admin-content'>

        <header className="header">
            <div className="content-header">
                <img src={companyLogo} alt="Company Logo" className="logocompany" />
            </div>
        </header>


        <div className="admin-panel">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
        <li><a href="/adminHome">Dashboard</a></li>
          <li><a href="/adminDetails">Personal Details</a></li>
          <li><a href="/adminHome">Content History</a></li>
        </ul>
      </div>

      <div className="manage-content">
        <h2>Manage Content</h2>
        <div className="headline-section">
          <h3>Create Headline</h3>
          <form onSubmit={handleHeadlineSubmit}>
            <div className="input-group">
              <label>Headline</label>
              <input type="text" value={headline} onChange={(e) => setHeadline(e.target.value)} />
            </div>
            <div className="input-group">
              <label>Date</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <button type="submit" className="submit-btn">Add Headline</button>
          </form>
        </div>
        <div className="article-card-section">
          <h3>Create Article Card</h3>
          <form onSubmit={handleArticleCardSubmit}>
            <div className="input-group">
              <label>Image URL</label>
              <input type="text" name="image" value={newCard.image} onChange={handleArticleCardChange} />
            </div>
            <div className="input-group">
              <label>Headline</label>
              <input type="text" name="headline" value={newCard.headline} onChange={handleArticleCardChange} />
            </div>
            <div className="input-group">
              <label>Description</label>
              <input type="text" name="description" value={newCard.description} onChange={handleArticleCardChange} />
            </div>
            <div className="input-group">
              <label>Button Text</label>
              <input type="text" name="buttonText" value={newCard.buttonText} onChange={handleArticleCardChange} />
            </div>
            <div className="input-group">
              <label>Button URL</label>
              <input type="text" name="buttonUrl" value={newCard.buttonUrl} onChange={handleArticleCardChange} />
            </div>
            <button type="submit" className="submit-btn">Add Article Card</button>
          </form>
          <div className="article-cards-list">
            <h3>Existing Article Cards</h3>
            {articleCards.map((card, index) => (
              <div key={index} className="article-cards">
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


        </div>
    
  );
}

export default Admin_home;


