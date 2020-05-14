import React from 'react';
import languageContext from '../contexts/languageContext';

class Field extends React.Component {
	static contextType = languageContext;
	render() {
		const text = this.context === 'English' ? 'Name' : 'Naam';
		return (
			<div className="field">
				<label>{text}</label>
				<input type="text" />
			</div>
		);
	}
}

export default Field;
