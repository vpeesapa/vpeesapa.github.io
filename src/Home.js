import React from 'react';
import portfolioImg from './img/portfolio-img.jpg';

class Home extends React.Component {
	render() {
		return (
			<div className="about-container">
				<div className="image-container">
					<img alt="my pic" src={portfolioImg}/>
				</div>
				<div className="intro-container">
					<p>Hi there! I am Varun Peesapati, an aspiring game developer and coding enthusiast!</p>
				</div>
			</div>
		);
	}
}

export default Home;