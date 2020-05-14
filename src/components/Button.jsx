import React from 'react';
import languageContext from '../contexts/languageContext';

class Button extends React.Component {
	static contextType = languageContext;
	render() {
		const text = this.context === 'English' ? 'Submit' : 'Voorleggen';
		return (
			<div className="ui button primary" type="submit">
				{text}
			</div>
		);
	}
}

export default Button;
