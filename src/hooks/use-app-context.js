import { useContext } from 'react';
import AppContext from '../context/AppContext';

const useMyAppContext = () => {
	const context = useContext(AppContext);
	return context;
};

export default useMyAppContext;
