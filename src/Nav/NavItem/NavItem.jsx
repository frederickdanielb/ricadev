import { TextContainer } from './styled';

const NavItem = ({ onClick, children }) => {
	return <TextContainer onClick={onClick}>{children}</TextContainer>;
};
export default NavItem;
