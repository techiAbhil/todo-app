import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import LandigPage from './pages/Landing-page/landing.page';
import Calculator from './pages/calculator-page/calculator.page';
import TodoPage from './pages/todo-page/todo.page';
import UrlPage from './pages/url-page/url.page';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" Component={Layout}>
						<Route path="/" element={<LandigPage name="abhilash" />} />
						<Route path="/todo" Component={TodoPage} />
						<Route path="/calculator" Component={Calculator} />
						<Route path="/urlpage/:id?/:name?" Component={UrlPage} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
