import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonSolid } from '../Buttons';
import './Nav.scss';
import {
	LoginButton,
	Logo,
	NavContainer,
	NavHeader,
	NavItem,
	NavItems,
	NavLogo,
	SubNavContainer,
	UserIcon,
	UserItem,
} from './styled';
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
									<ButtonSolid secondary rounded>
										{loginButtonText ? loginButtonText : _loginButtonText}
									</ButtonSolid>
								</LoginButton>
							)}
							{isLoggedIn && (
								<LoginButton onClick={onClickLogoutButton}>
									<ButtonSolid secondary rounded>
										<UserIcon>
											<FontAwesomeIcon icon={faTimes} />
										</UserIcon>{' '}
										{logoutButtonText ? logoutButtonText : _logoutButtonText}
									</ButtonSolid>
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
