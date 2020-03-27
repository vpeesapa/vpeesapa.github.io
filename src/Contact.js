import React from 'react';
import Resume from './docs/My Resume.pdf';

class Contact extends React.Component {
	render() {
		return (
			<div className="contact-container">
				<p>Email Address: peesapativarun99@gmail.com</p>
				<a href={Resume}>Downloadable Resume</a><br/>
			</div>
		);
	}
}

export default Contact;