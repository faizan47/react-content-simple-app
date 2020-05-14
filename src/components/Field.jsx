import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
	render() {
		return (
			<div className="field">
				<label>
					<LanguageContext.Consumer>
						{value => (value === 'English' ? 'Name' : 'Naam')}
					</LanguageContext.Consumer>
				</label>
				<input type="text" />
			</div>
		);
	}
}

export default Field;
