import PropTypes from 'prop-types';
const Topics = ({ topics }) => {
	return (
		<>
			{topics && (
				<div className="col-xl-3 col-md-6">
					<div className="footer-title">
						<h5>{topics.title}</h5>
					</div>
					<div className="footer-content">
						<div className="footer-blog">
							{topics.map((topic, index) => (
								<div key={`topic-link-${index}`} className="media">
									<div className="img-part">
										<a href={topic.url}>
											<img src={topic.image} className="img-fluid lazyload" alt="" />
										</a>
									</div>
									<div className="media-body">
										<h5>{topic.title}</h5>
										<p>{topic.content}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

Topics.propTypes = {
	topics: PropTypes.object.isRequired,
};
export default Topics;
