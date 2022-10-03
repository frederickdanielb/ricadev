import styled from 'styled-components';

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
	height: 55px;
	padding-left: 40px;
	padding-right: 40px;
	background-color: ${(props) => {
		return props.theme ? props.theme.colors.primary : '#ffffff';
	}};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	border-radius: 0 0 1rem 1rem;
	box-shadow: 0 0.5rem 1rem #00000026;
`;
const NavItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: end;
`;
const NavItemInternal = styled.div`
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
const LoginButton = styled.div`
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
	height: 35px;
`;
const UserIcon = styled.div`
	display: inline;
	margin-right: 5px;
`;

export {
	NavContainer,
	UserIcon,
	Logo,
	LoginButton,
	NavLogo,
	UserItem,
	NavItemInternal,
	NavItems,
	NavHeader,
	SubNavContainer,
};
