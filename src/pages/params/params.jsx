import { useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { FlexCard, Text } from '../../App.style';

const Pramas = () => {
	const [queryParams] = useSearchParams(); //query params

	useEffect(() => {
		for (let i of queryParams) {
			console.log('queryParams in loop = ', i);
		}
	}, [queryParams]);

	const params = useParams();

	useEffect(() => {
		console.log('params = ', params);
	}, [params]);

	const locationData = useLocation();

	useEffect(() => {
		console.log('location data = ', locationData.state);
	}, [locationData]);
	return (
		<FlexCard>
			<Text>Test query params</Text>
		</FlexCard>
	);
};

export default Pramas;
