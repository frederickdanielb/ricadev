import PropTypes from 'prop-types';
import { faEnvelope, faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ContactBox = ({ className, contact }) => {
	return (
		<div className={'single-sidebar ' + className}>
			<h6 className="contact-title">Cont&aacute;ctanos</h6>
			{contact.address && (
				<p className="address">
					<FontAwesomeIcon icon={faMapMarkedAlt} />
					{contact.address}
				</p>
			)}
			{contact.phone && (
				<p>
					<FontAwesomeIcon icon={faPhoneAlt} /> {contact.phone}
				</p>
			)}
			{contact.email && (
				<a href={'mailto:' + contact.email}>
					<p>
						<FontAwesomeIcon icon={faEnvelope} /> {contact.email}
					</p>
				</a>
			)}
			<div className="social-box">
				<ul>
					{contact.social_networks.facebook && (
						<li>
							<a href={contact.social_networks.facebook}>
								<FontAwesomeIcon icon={faFacebookF} />
							</a>
						</li>
					)}
					{contact.social_networks.youtube && (
						<li>
							<a href={contact.social_networks.youtube}>
								<FontAwesomeIcon icon={faYoutube} />
							</a>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

ContactBox.propTypes = {
	className: PropTypes.string,
	contact: PropTypes.object.isRequired,
};
export default ContactBox;
