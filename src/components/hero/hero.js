import React from 'react';

import Container from '../container/container';
import './hero.scss';

const Hero = ({ title, children, heroClass }) => (
	<div className={`hero ${heroClass ? heroClass : ''}`}>
		<Container>
			<h1 className="hero__title">
				<span>{title}</span>
			</h1>
			<h2 className="hero__lead" dangerouslySetInnerHTML={{ __html: children }} />
		</Container>
	</div>
);

export default Hero;