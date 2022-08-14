// I want to be able to create a button with rounded corners
import PropTypes from 'prop-types';
import { Rounded } from './Styles';
const ButtonRounded = ({ type = 'default', block, children, ...restProps }) => {
	return (
		<Rounded {...restProps} type={type} block={block}>
			{children}
		</Rounded>
	);
};
export default ButtonRounded;

ButtonRounded.propTypes = {
	block: PropTypes.bool,
	type: PropTypes.oneOf(['default', 'primary', 'secondary']),
};
