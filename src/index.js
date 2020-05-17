import React from 'react';
import ReactDOM from 'react-dom';

//class component
class App extends React.Component {
	constructor (props) {
		super(props); //reference to the parent component React.Component

		this.state = { lat: null, errorMessage: '' }; //initial state object METHOD ONE

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// we cakked setState!!!!
				this.setState({ lat: position.coords.latitude });
			},
			(error) => {
				this.setState({ errorMessage: error.message });
			}
		);
	}

	//REQUIRED render always!!!!
	render () {
		//conditional rendering
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error Message: {this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude: {this.state.lat}</div>;
		}
		return <div>Loading.....</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
