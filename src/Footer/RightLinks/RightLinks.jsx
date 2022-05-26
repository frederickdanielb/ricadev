export default function RightLinks({links}) {
	return (
		<>
			{links && (
				<div className="col-xl-2 col-md-3 order-cls">
					<div className="footer-space">
						<div className="footer-title">
							<h5>{links.title}</h5>
						</div>
						<div className="footer-content">
							<div className="footer-links">
								<ul>
									{links.links.map(
										(link, index) => (
											<li key={`rig-ln-${index}`}>
												<a href={link.url}>
													{link.name}
												</a>
											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
