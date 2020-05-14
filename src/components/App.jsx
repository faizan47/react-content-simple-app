import React from 'react';
import UserCreate from './UserCreate';
import languageContext from '../contexts/languageContext';

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
				<languageContext.Provider value={this.state.language}>
					<UserCreate />
				</languageContext.Provider>
			</div>
		);
	}
}

export default App;
