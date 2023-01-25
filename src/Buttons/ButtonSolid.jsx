import PropTypes from 'prop-types';
import { Solid } from './Styles';

const ButtonSolid = ({
	primary,
	block,
	rounded,
	secondary,
	error,
	onClick,
	disabled,
	children,
	...restProps
}) => {
	return (
		<Solid
			primary={primary}
			block={block}
			rounded={rounded}
			secondary={secondary}
			onClick={onClick}
			disabled={disabled}
			error={error}
			{...restProps}
		>
			{children}
		</Solid>
	);
};

ButtonSolid.propTypes = {
	block: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
	disabled: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	primary: PropTypes.bool,
	rounded: PropTypes.bool,
	secondary: PropTypes.bool,
};
export default ButtonSolid;
