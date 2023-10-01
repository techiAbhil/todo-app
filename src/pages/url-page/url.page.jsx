import { useParams, useSearchParams } from 'react-router-dom';

const UrlPage = () => {
	const [params] = useSearchParams();
	const urlParams = useParams();

	for (const entry of params) {
		console.log(entry);
	}

	console.log('urlParams = ', urlParams);

	return <div>THis is a test URLs page</div>;
};

export default UrlPage;
