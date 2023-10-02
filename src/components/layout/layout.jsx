import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FlexCard, StyledButton } from '../../App.style';

const Layout = () => {
	const navigate = useNavigate();
	return (
		<div>
			<FlexCard>
				<StyledButton onClick={() => navigate('/')}>Landing Page</StyledButton>
				<StyledButton onClick={() => navigate('/todo')}>Todo App</StyledButton>
				<StyledButton onClick={() => navigate('/calculator')}>
					Calculator
				</StyledButton>
				<StyledButton
					onClick={() =>
						navigate('/params/steve/99/avengers?q1=vaibhav&q2=32', {
							state: {
								password: 'Test@123',
								villan: 'Thanos',
							},
						})
					}
				>
					Params
				</StyledButton>
				<StyledButton onClick={() => navigate(-1)}>Back</StyledButton>
			</FlexCard>
			<Outlet />

			<FlexCard>
				<NavLink
					style={({ isActive }) =>
						isActive ? { background: 'red' } : { background: 'blue' }
					}
					to="/"
				>
					Landing Page
				</NavLink>
				<NavLink
					style={({ isActive }) =>
						isActive ? { background: 'red' } : { background: 'blue' }
					}
					to="/todo"
				>
					Todo App
				</NavLink>
				<NavLink
					style={({ isActive }) =>
						isActive ? { background: 'red' } : { background: 'blue' }
					}
					to="/calculator"
				>
					Calculator
				</NavLink>
				<NavLink
					style={({ isActive }) =>
						isActive ? { background: 'red' } : { background: 'blue' }
					}
					to="/params/steve/99/avengers?q1=vaibhav&q2=32"
				>
					Params
				</NavLink>
			</FlexCard>
		</div>
	);
};

export default Layout;
