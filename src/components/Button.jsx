import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
	renderButton(lang) {
		const buttonClass = lang === 'Dutch' ? 'red' : 'primary';
		return (
			<div className={`ui button ${buttonClass}`} type="submit">
				<LanguageContext.Consumer>
					{value => (value.language === 'English' ? 'Submit' : 'Voorleggen')}
				</LanguageContext.Consumer>
			</div>
		);
	}
	render() {
		return <ColorContext.Consumer>{lang => this.renderButton(lang)}</ColorContext.Consumer>;
	}
}

export default Button;
