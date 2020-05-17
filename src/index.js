import React from 'react';
import ReactDOM from 'react-dom';

//class component
class App extends React.Component {
	constructor (props) {
		super(props); //reference to the parent component React.Component

		this.state = { lat: null }; //state object

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// we cakked setState!!!!
				this.setState({ lat: position.coords.latitude });
			},
			(error) => console.log(error)
		);
	}

	//REQUIRED render always!!!!
	render () {
		return <div>Lattitude: {this.state.lat}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
