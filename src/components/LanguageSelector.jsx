import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
	static contextType = LanguageContext;
	render() {
		return (
			<p>
				Select a language:
				<i
					onClick={() => this.context.onLanguageSelect('English')}
					className="flag us cursor
                    "
				/>
				<i
					onClick={() => this.context.onLanguageSelect('Dutch')}
					className="flag nl cursor
                    "
				/>
			</p>
		);
	}
}

export default LanguageSelector;
