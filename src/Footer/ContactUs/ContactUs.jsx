import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const ContactUs = ({ logoUrl, contact }) => {
	return (
		<>
			<div className="col-xl-2 col-md-6 order-cls">
				<div className="footer-title mobile-title">
					<h5>contact us</h5>
				</div>
				<div className="footer-content">
					<div className="contact-detail">
						<div className="footer-logo">
							<img src={logoUrl} alt="" className="img-fluid lazyload" />
						</div>
						<ul className="contact-list">
							{contact.address && (
								<li>
									<FontAwesomeIcon icon={faMapMarkerAlt} /> {contact.address}
								</li>
							)}
							{contact.phone && (
								<li>
									<FontAwesomeIcon icon={faPhoneAlt} /> {contact.phone}
								</li>
							)}
							{contact.email && (
								<li>
									<FontAwesomeIcon icon={faEnvelope} /> {contact.email}
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

ContactUs.propTypes = {
	contact: PropTypes.object.isRequired,
	logoUrl: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};
export default ContactUs;
