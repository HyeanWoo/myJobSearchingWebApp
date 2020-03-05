import React from 'react'
import withRainbow from '../HOC/withRainbow';

const About = () => {
	return(
		<div className="container">
			<h2 className="center">About</h2>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas veniam laudantium atque impedit odio praesentium accusantium beatae corporis quisquam temporibus assumenda, qui aperiam. Iusto tempore debitis nihil obcaecati pariatur molestiae.</p>
		</div>
	);
}

export default withRainbow(About);