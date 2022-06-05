import PropTypes from 'prop-types';
const Sponsored = ({ logos }) => {
	return (
		<>
			{logos && (
				<div className="col-xl-3 col-md-6">
					<div className="footer-title">
						<h5>Sponsored</h5>
					</div>
					<div className="footer-content">
						{logos.map((link, index) => (
							<img
								key={`partner-logo-${index}`}
								className="img-fluid lazyload"
								width={200}
								src={link}
								alt=""
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
};
export default Sponsored;

Sponsored.propTypes = {
	logos: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
};
