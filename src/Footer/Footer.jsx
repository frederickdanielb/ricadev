import PropTypes from 'prop-types';
import SubFooter from './SubFooter';

const Footer = ({ children }) => {
	return (
		<footer>
			<div className="footer section-b-space section-t-space">
				<div className="container">
					<div className="row order-row">{children}</div>
				</div>
			</div>
			<SubFooter />
		</footer>
	);
};
export default Footer;

Footer.propTypes = {
	children: PropTypes.any.isRequired,
};
