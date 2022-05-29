import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StyledComponent from 'styled-components';
import './Nav.scss';
const Nav = ({
	logo,
	isLoggedIn,
	userDisplayName,
	loginButtonText,
	logoutButtonText,
	onClickLoginButton,
	onClickLogoutButton,
	children,
}) => {
	const _loginButtonText = 'Login';
	const _logoutButtonText = 'Logout';
	const NavContainer = StyledComponent.div`
		width: 100%;
		background-color: #ffffff;
	`;
	const SubNavContainer = StyledComponent.div`
		display: flex;
		padding: 0 15px 0 40px;
		flex-direction: row;
		@media (max-width: 768px) {
		  flex-direction: column;
		}
		justify-content: end;
		
    `;
	const NavHeader = StyledComponent.div`
		height: 60px;
        padding-left: 40px;
        padding-right: 40px;
		background-color: #662482;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		border-radius: 0rem 0rem 2.5rem 2.5rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	`;
	const NavItems = StyledComponent.div`
		display: flex;
		flex-wrap: wrap;
		justify-content: end;
	`;
	const NavItem = StyledComponent.div`
		align-self: center;
		color: #ffffff;
		margin-left: 15px;
	`;
	const NavLogo = StyledComponent.div`
		justify-content: start;
	`;
	const LoginButton = StyledComponent.button`
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
		color: #ffffff;
	`;
	const Logo = StyledComponent.img`
		height: 55px;
	`;
	const UserIcon = StyledComponent.div`
	display:inline;
	margin-right: 5px;
	`;

	return (
		<>
			<NavContainer className="RicaTheme">
				<NavHeader>
					<NavLogo>
						{logo && (
							<NavItem>
								<Logo src={logo} />
							</NavItem>
						)}
					</NavLogo>
					<NavItems>
						{userDisplayName && (
							<NavItem>
								<UserIcon>
									<FontAwesomeIcon icon={faUser} />
								</UserIcon>
								{userDisplayName}
							</NavItem>
						)}
						<NavItem>
							{!isLoggedIn && (
								<LoginButton onClick={onClickLoginButton}>
									{loginButtonText ? loginButtonText : _loginButtonText}
								</LoginButton>
							)}
							{isLoggedIn && (
								<LoginButton onClick={onClickLogoutButton}>
								
								<UserIcon>
									<FontAwesomeIcon icon={faTimes} />
								</UserIcon>	{logoutButtonText ? logoutButtonText : _logoutButtonText}
								</LoginButton>
							)}
						</NavItem>
					</NavItems>
				</NavHeader>
			</NavContainer>
			<SubNavContainer>{children}</SubNavContainer>
		</>
	);
};
export default Nav;
