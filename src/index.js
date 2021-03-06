import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

//class component
class App extends React.Component {
	state = { lat: null, errorMessage: '' }; //initial state object METHOD 2

	//component lifecycle method
	componentDidMount () {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(error) => this.setState({ errorMessage: error.message })
		);
	}

	//helper function
	renderContent () {
		//conditional rendering
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error Message: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />; //using child component
		}

		return (
			<Loader
				loaderMsg="Please accept the location request"
				size="large"
			/>
		);
	}

	//REQUIRED render always!!!!
	render () {
		return <div className="border red">{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
