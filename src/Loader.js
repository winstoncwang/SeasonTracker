import React from 'react';

const Loader = (props) => {
	return (
		<div class="ui active dimmer">
			<div class={`ui ${props.size} text loader`}>{props.loaderMsg}</div>
		</div>
	);
};

Loader.defaultPros = {
	loaderMsg : 'Loading...',
	size      : 'medium'
};

export default Loader;
