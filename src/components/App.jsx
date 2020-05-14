import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
	state = { language: 'English' };

	onLanguageChange(language) {
		this.setState({ language });
	}

	render() {
		return (
			<div className="ui container">
				<p>
					Select a language:
					<i
						onClick={() => this.onLanguageChange('English')}
						className="flag us cursor
                    "
					/>
					<i onClick={() => this.onLanguageChange('Dutch')} className="flag nl cursor
                    " />
				</p>
				<LanguageContext.Provider value={this.state.language}>
					<ColorContext.Provider value={this.state.language}>
						<UserCreate />
					</ColorContext.Provider>
				</LanguageContext.Provider>
			</div>
		);
	}
}

export default App;
