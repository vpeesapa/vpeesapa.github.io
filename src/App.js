import React from 'react';
import './App.css';
import portfolioImg from './img/portfolio-img.jpg';

class App extends React.Component {
	render() {
		return (
			<div>
				<div className="header">
					<h1>My Portfolio</h1>
				</div>
				<div className="navbar">
					<a href="#">Home</a>
					<a href="#">Experience</a>
					<a href="#">Contact Information</a>
				</div>
				<div className="about-container">
					<div className="image-container">
						<img alt="my pic" src={portfolioImg}/>
					</div>
					<div className="intro-container">
						<p>Hi there! My name is Varun Peesapati! Welcome to my website!</p>
					</div>
				</div>
			</div>
		);
	}
}

export default App;