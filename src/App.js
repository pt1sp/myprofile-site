import './App.css';
import PortfolioPage from './components/PortfolioPage';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PortfolioPage" element={<PortfolioPage />} />
          <Route path="/BlogPage" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
