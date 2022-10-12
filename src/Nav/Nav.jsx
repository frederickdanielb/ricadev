import { faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonSolid } from '../Buttons';
import './Nav.scss';
import {
	LoginButton,
	Logo,
	NavContainer,
	NavHeader,
	NavItemInternal,
	NavItems,
	NavLogo,
	SubNavContainer,
	UserIcon,
} from './styled';
import Dropdown from 'react-bootstrap/Dropdown';

const Nav = ({
	logo,
	isLoggedIn,
	userDisplayName,
	loginButtonText,
	logoutButtonText,
	onClickLoginButton,
	onClickLogoutButton,
	children,
	rightChildren,
}) => {
	const _loginButtonText = 'Login';
	const _logoutButtonText = 'Logout';

	return (
		<>
			<NavContainer className="RicaTheme">
				<NavHeader>
					<NavLogo>
						{logo && (
							<NavItemInternal>
								<Logo src={logo} />
							</NavItemInternal>
						)}
					</NavLogo>
					<NavItems>
						{userDisplayName && isLoggedIn && (
							<Dropdown>
								<Dropdown.Toggle variant="secondary" id="dropdown-basic">
									<UserIcon>
										<FontAwesomeIcon icon={faUser} />
									</UserIcon>
									{userDisplayName}
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="/admin">Administrar</Dropdown.Item>
									<Dropdown.Item onClick={onClickLogoutButton}>
										<UserIcon>
											<FontAwesomeIcon icon={faTimes} />
										</UserIcon>
										{logoutButtonText ? logoutButtonText : _logoutButtonText}
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						)}
						<NavItemInternal>
							{!isLoggedIn && (
								<LoginButton>
									<ButtonSolid secondary rounded onClick={onClickLoginButton}>
										{loginButtonText ? loginButtonText : _loginButtonText}
									</ButtonSolid>
								</LoginButton>
							)}
						</NavItemInternal>
						{rightChildren}
					</NavItems>
				</NavHeader>
			</NavContainer>
			<SubNavContainer>{children}</SubNavContainer>
		</>
	);
};
export default Nav;
