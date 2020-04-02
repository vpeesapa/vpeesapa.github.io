import React from 'react';
import { Route,NavLink,HashRouter } from 'react-router-dom';
import { IoLogoGithub,IoLogoLinkedin,IoLogoFacebook } from "react-icons/io";
import './App.css';
import Home from './Home';
import Experience from './Experience';
import Contact from './Contact'

class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<div>
					<div className="header">
						<h1>Varun Peesapati</h1>
						<a className="social-links" href="https://github.com/vpeesapa"><IoLogoGithub size={37} /></a>
						<a className="social-links" href="https://linkedin.com/in/vpeesapati"><IoLogoLinkedin size={37} /></a>
						<a className="social-links" href="https://www.facebook.com/varun.peesapati"><IoLogoFacebook size={37} /></a>
					</div>
					<div className="navbar">
						<NavLink exact to="/">Home</NavLink>
						<NavLink to="/experience">Experience</NavLink>
						<NavLink to="/contact">Contact Information</NavLink>
					</div>
					<div className="content">
						<Route exact path="/" component={Home} />
						<Route path="/experience" component={Experience} />
						<Route path="/contact" component={Contact} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;