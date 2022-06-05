import PropTypes from 'prop-types';
const AnimatedContainer = ({ children }) => {
	return (
		<section className="section-b-space dark-cls animated-section">
			<div className="animation-section">
				<div className="cross po-1"></div>
				<div className="cross po-2"></div>
				<div className="round po-4"></div>
				<div className="round po-5"></div>
				<div className="round r-y po-8"></div>
				<div className="square po-10"></div>
				<div className="square po-11"></div>
			</div>
			<div className="container">{children}</div>
		</section>
	);
};
AnimatedContainer.propTypes = {
	children: PropTypes.any.isRequired,
};
export default AnimatedContainer;
