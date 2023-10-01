import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FlexCard, StyledButton } from '../../App.style';

const Layout = () => {
	const navigatation = useNavigate();

	return (
		<>
			<FlexCard>
				<StyledButton onClick={() => navigatation('/')}>Home Page</StyledButton>
				<StyledButton onClick={() => navigatation('/todo')}>
					Todo Page
				</StyledButton>
				<StyledButton onClick={() => navigatation('/calculator')}>
					Calculator
				</StyledButton>
				<StyledButton
					onClick={() => navigatation('/urlpage/1/abhilash?country=indian')}
				>
					URL Page
				</StyledButton>
			</FlexCard>
			<Outlet />

			<FlexCard>
				<Link to={'/'}> Home Link </Link>
				<Link to="/todo"> Todo Link</Link>
				<Link to="/calculator"> Calculator </Link>
				<a href="/todo">Todo HTML</a>
			</FlexCard>
		</>
	);
};

export default Layout;
