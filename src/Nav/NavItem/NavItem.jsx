import styled from 'styled-components';

const NavItem = ({ onClick, children }) => {
	const TextContainer = styled.button`
    font-family: Nunito, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-top: 10px;
    text-align: left;
    margin-left: 15px;
    margin-right: 15px;
    font-size: 16px;
    color: #000;
    border-bottom: 2px solid  ${props =>{ return props.theme ? props.theme.colors.primary: '#ffffff'}};
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    &:hover {
        border-bottom: 2px solid  ${props =>{ return props.theme ? props.theme.colors.primary: '#ffffff'}};
        color:  ${props =>{ return props.theme ? props.theme.colors.primary: '#ffffff'}};
    }
`;
	return <TextContainer onClick={onClick}>{children}</TextContainer>;
};
export default NavItem;
