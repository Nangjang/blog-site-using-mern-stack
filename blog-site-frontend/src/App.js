import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

// Define the main App component
function App() {
  return (
    // Wrap the app in BrowserRouter to enable routing
    <BrowserRouter>
      <div className="App">
        {/* Render the navigation bar */}
        <NavBar />

        {/* Main content area */}
        <div id="page-body">
          <Routes>
            {/* Define routes for each page */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            {/* Dynamic route for individual article pages */}
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;