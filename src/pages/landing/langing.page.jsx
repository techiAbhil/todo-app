import React, { useEffect } from 'react';
import { Container, FlexCard, Text } from '../../App.style';
const LandingPage = () => {
	useEffect(() => {
		console.log('Landing page');
	}, []);
	return (
		<Container>
			<FlexCard>
				<Text>Welcome Vaibhav</Text>
			</FlexCard>
		</Container>
	);
};

export default LandingPage;
