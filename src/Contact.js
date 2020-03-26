import React from 'react';
import Resume from './docs/My Resume.pdf';

class Contact extends React.Component {
	render() {
		return (
			<div className="contact-container">
				<p>Email Address: peesapativarun99@gmail.com</p>
				<a href={Resume}>Downloadable Resume</a><br/>
				<div className="buttons-container">
					<a href="https://github.com/vpeesapa" className="button">GitHub</a>
					<a href="https://linkedin.com/in/vpeesapati" className="button">LinkedIn</a>
					<a href="https://www.facebook.com/varun.peesapati" className="button">Facebook</a>
				</div>
			</div>
		);
	}
}

export default Contact;