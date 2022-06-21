import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from './layouts/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
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
        <div style={{margin: "100px 20px 20px 20px",borderStyle: 'dashed',backgroundColor: '#faf887',padding: 20}}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
