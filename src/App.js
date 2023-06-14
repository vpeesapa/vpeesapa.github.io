import * as React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import ProjectDetails from './components/Portfolio/ProjectDetails';
import './App.css';
import WebFont from 'webfontloader';

function App() {
  React.useEffect(() => {
    WebFont.load({
        google: {
            families: ['Play']
        }
    });
  },[]);
  
  return (
    <Router>
      <div className="App">
        <Header />
        <div style={{padding: 20,flexGrow: 1}}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/portfolio/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;