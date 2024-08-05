import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
//import mainContent from './components/mainContent';
import ArticleCard from './components/ArticleCard';



function App() {

  const articles = [
    {
      image: '../assets',
      heading: 'Article 1',
      body: 'This is a short description of Article 1.',
      link: '#',
    },
    {
      image: 'path-to-image2.jpg',
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

  return (
    
    <Router>
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

        <Routes>
          <Route path="/" element={<header />} />
          <Route path="/" element={<header />} />
          <Route path="/" element={<header />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
