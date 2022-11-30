import { decode } from 'he';
import errorImage from '../../../images/No_image_available.svg';
/* import { Rate } from "rsuite";
 */ import './card.scss';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
const PackageCard = ({ index, _package, onSelectPackage, className }) => {
	const handleClickPackage = () => {
		if (onSelectPackage) onSelectPackage(index, _package);
	};
	return (
		<div className={`${className} popular grid-item wow fadeInUp`} data-classname="popular">
				<div className="special-box p-0">
					<div className="special-img">
						<a href="tour-single-6.html">
							<img src="http://placekitten.com/1280/720"
									 className="img-fluid bg-img" alt="" />
						</a>
						<div className="top-icon">
							<a href="#" className="" data-toggle="tooltip" data-placement="top" title=""
								 data-original-title="Add to Wishlist">
								<i className="far fa-heart"></i>
							</a>
						</div>
					</div>
					<div className="special-content">
						<a href="tour-single-6.html">
							<h5>Bali Dreams Land Only<span>(6N 7D)</span></h5>
						</a>
						<div className="tour-detail">

							<h6 className="nowrap-cls"><i className="fas fa-plane-departure mr-3"></i> Kuta (2N)
								→ Lombok (2N) → Ubud (2N) <i className="fas fa-plane-arrival ml-3"></i></h6>
							<div className="include-sec">
								<span>include at this price</span>
								<ul className="include">
									<li><img src="../assets/images/icon/tour/hotel.png"
													 className="img-fluid blur-up lazyload" alt=""
													 data-toggle="tooltip" data-placement="top" title="Hotel" />
									</li>
									<li><img src="../assets/images/icon/tour/airplane.png"
													 className="img-fluid blur-up lazyload" alt=""
													 data-toggle="tooltip" data-placement="top" title="Flight" />
									</li>
									<li><img src="../assets/images/icon/tour/fork.png"
													 className="img-fluid blur-up lazyload" alt=""
													 data-toggle="tooltip" data-placement="top" title="Meals" />
									</li>
									<li className="not-include"><img
										src="../assets/images/icon/tour/photo-camera.png"
										className="img-fluid blur-up lazyload" alt=""
										data-toggle="tooltip" data-placement="top"
										title="Sightseeing" /></li>
									<li className="not-include"><img
										src="../assets/images/icon/tour/visa.png"
										className="img-fluid blur-up lazyload" alt=""
										data-toggle="tooltip" data-placement="top" title="Visa" />
									</li>
								</ul>
							</div>
							<div className="bottom-section">
								<div className="price">
									<h6>
										<del>$1300</del>
										$1245
									</h6>
									<span>price per person</span>
								</div>
							</div>
						</div>
					</div>
					<div className="label-offer">Recommended</div>
				</div>

		</div>
	);
};

export default PackageCard