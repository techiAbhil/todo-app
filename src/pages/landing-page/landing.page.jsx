import { useEffect } from 'react';
import { FlexCard, Text } from '../../App.style';
const LandigPage = (props) => {
	useEffect(() => {
		console.log(props);
	}, [props]);
	return (
		<>
			<FlexCard>
				<Text color="#fff">Welcome User!</Text>
			</FlexCard>
		</>
	);
};

export default LandigPage;
