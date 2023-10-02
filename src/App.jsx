import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import Calculator from './pages/calculator/calcuator.page';
import LandingPage from './pages/landing/langing.page';
import Pramas from './pages/params/params';
import TodoPage from './pages/todo/todo.page';
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Layout}>
					<Route path="/" Component={LandingPage} />
					<Route path="/todo" Component={TodoPage} />
					<Route
						path="/calculator"
						element={<Calculator params="this is a sample test" />}
					/>
					<Route
						path="/params/:name/:age/:company/:gender?"
						Component={Pramas}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
