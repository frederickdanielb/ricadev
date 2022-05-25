export default function ContactUs({ logoUrl, contact }) {
	return (
		<>
			<div className="col-xl-2 col-md-6 order-cls">
				<div className="footer-title mobile-title">
					<h5>contact us</h5>
				</div>
				<div className="footer-content">
					<div className="contact-detail">
						<div className="footer-logo">
							<img
								src={logoUrl}
								alt=""
								className="img-fluid lazyload"
							/>
						</div>
						<ul className="contact-list">
							{contact.address && (
								<li>
									<i className="fas fa-map-marker-alt"></i>{" "}
									{contact.address}
								</li>
							)}
							{contact.phone && (
								<li>
									<i className="fas fa-phone-alt"></i>{" "}
									{contact.phone}
								</li>
							)}
							{contact.email && (
								<li>
									<i className="fas fa-envelope"></i>{" "}
									{contact.email}
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
