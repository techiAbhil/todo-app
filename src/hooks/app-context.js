import { useContext } from 'react';
import AppContext from '../context/app-context';

const useMyAppContext = () => {
	const contextValue = useContext(AppContext);
	return contextValue;
};

export default useMyAppContext;
