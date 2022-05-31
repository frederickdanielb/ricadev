import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
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
	const NavContainer = styled.div`
		width: 100%;
		background-color: #ffffff;
	`;
	const SubNavContainer = styled.div`
		display: flex;
		padding: 0 15px 0 40px;
		flex-direction: row;
		@media (max-width: 768px) {
		  flex-direction: column;
		}
		justify-content: end;
		
    `;
	const NavHeader = styled.div`
		height: 60px;
        padding-left: 40px;
        padding-right: 40px;
		background-color: ${props =>{ return props.theme ? props.theme.colors.primary: '#ffffff'}};
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		border-radius: 0rem 0rem 2.5rem 2.5rem;
        box-shadow: 0 .5rem 1rem #00000026;
	`;
	const NavItems = styled.div`
		display: flex;
		flex-wrap: wrap;
		justify-content: end;
	`;
	const NavItem = styled.div`
		align-self: center;
		color: #ffffff;
		margin-left: 15px;
	`;
	const UserItem = styled.div`
		@media (max-width: 768px) {
			display: none;
		}
	`;
	const NavLogo = styled.div`
		justify-content: start;
	`;
	const LoginButton = styled.button`
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
		color: #ffffff;
		@media (max-width: 768px) {
			display: none;
		}
	`;
	const Logo = styled.img`
		height: 55px;
	`;
	const UserIcon = styled.div`
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
							<UserItem>
								<NavItem>
									<UserIcon>
										<FontAwesomeIcon icon={faUser} />
									</UserIcon>
									{userDisplayName}
								</NavItem>
							</UserItem>
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
