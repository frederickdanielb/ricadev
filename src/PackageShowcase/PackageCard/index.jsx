import './card.scss';
import iconVisa from '../../../images/icon/tour/visa.png';
import iconAirplane from '../../../images/icon/tour/airplane.png';
import iconHotel from '../../../images/icon/tour/hotel.png';
import iconFork from '../../../images/icon/tour/fork.png';
import iconPhotoCamera from '../../../images/icon/tour/photo-camera.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneArrival, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { DimensionedImage, IncludeList, IncludeListItem } from './styled';

const PackageCard = ({ index, _package, onSelectPackage, recommended, className }) => {
	const handleClickPackage = () => {
		if (onSelectPackage) onSelectPackage(index, _package);
	};
	const getDepartureDate = (itinerary) => {
		const dep = itinerary.includes('Salida');
		const start = itinerary.indexOf('Salida ') + (dep ? 7 : 8);
		const end = itinerary.indexOf(' vuelo ');
		return itinerary.substring(start, end);
	};
	const getFlight = (itinerary) => {
		const start = itinerary.indexOf(' vuelo ') + 7;
		const end = itinerary.indexOf(' Sale ');
		return itinerary.substring(start, end);
	};
	const getDeparture = (itinerary) => {
		const start = itinerary.indexOf(' Sale ') + 6;
		const end = itinerary.indexOf(' Llega ');
		return itinerary.substring(start, end);
	};
	const getArrival = (itinerary) => {
		const start = itinerary.indexOf(' Llega ') + 7;
		const end = itinerary.length;
		return itinerary.substring(start, end);
	};

	const getFlightItinerary = () => {
		const _itinerary = _package.itineravlo
			? _package.itineravlo
					.split('<br />\n')
					.filter((item) => item !== '')
					.map((item) => (
						<>
							<p className="d-inline">
								<i>
									<FontAwesomeIcon
										icon={item.includes('Salida') ? faPlaneDeparture : faPlaneArrival}
										className={'mr-3'}
									/>
								</i>
								<span style={{ marginLeft: '10px' }}>{getDepartureDate(item)}</span>
							</p>
							<ul>
								<li>
									Vuelo : <p className={'ml-3'}>{getFlight(item)}</p>
								</li>
								<br />
								<li>
									Tiempo Vuelo:
									<p className="ml-3">
										{getDeparture(item)} - {getArrival(item)}{' '}
									</p>
								</li>
							</ul>
						</>
					))
			: [];
		return _itinerary;
	};

	const getIncludes = () => {
		return (
			<IncludeList>
				{_package.coverage
					? _package.coverage
							.filter((item) => item !== '')
							.map((coverage) => (
								<>
									<IncludeListItem>{coverage}</IncludeListItem>
									<br />
								</>
							))
					: []}
			</IncludeList>
		);
	};
	return (
		<div
			className={`${className} popular grid-item wow fadeInUp`}
			onClick={handleClickPackage}
			data-classname="popular"
		>
			<div className="special-box p-0">
				<div className="special-img">
					<a href="tour-single-6.html">
						<DimensionedImage src={_package.image} className="img-fluid bg-img" alt="" />
					</a>
					{/*<div className="top-icon">
						<a
							href="#"
							className=""
							data-toggle="tooltip"
							data-placement="top"
							title=""
							data-original-title="Add to Wishlist"
						>
							<i className="far fa-heart"></i>
						</a>
					</div>*/}
				</div>
				<div className="special-content">
					<h5>{_package.title}</h5>

					<div className="tour-detail">
						{getFlightItinerary()}
						<div className="include-sec">
							<span>Incluye</span>
							<ul className="include">
								<li className={_package.amenities.hotel ? '' : 'not-include'}>
									<img
										src={iconHotel}
										className="img-fluid"
										alt=""
										data-toggle="tooltip"
										data-placement="top"
										title="Hotel"
									/>
								</li>
								<li className={_package.amenities.flight ? '' : 'not-include'}>
									<img
										src={iconAirplane}
										className="img-fluid"
										alt=""
										data-toggle="tooltip"
										data-placement="top"
										title="Flight"
									/>
								</li>
								<li className={_package.amenities.food_plan_all ? '' : 'not-include'}>
									<img
										src={iconFork}
										className="img-fluid"
										alt=""
										data-toggle="tooltip"
										data-placement="top"
										title="Meals"
									/>
								</li>
								<li className={_package.amenities.excursion ? '' : 'not-include'}>
									<img
										src={iconPhotoCamera}
										className="img-fluid"
										alt=""
										data-toggle="tooltip"
										data-placement="top"
										title="Sightseeing"
									/>
								</li>
								<li className={_package.amenities.insurance ? '' : 'not-include'}>
									<img
										src={iconVisa}
										className="img-fluid"
										alt=""
										data-toggle="tooltip"
										data-placement="top"
										title="Seguro"
									/>
								</li>
							</ul>
						</div>
						{getIncludes()}
						<div className="bottom-section">
							<div className="price">
								<h6>
									<del></del>
									{_package.amount.CLP[0].total} + Hotel
								</h6>
								<p>
									<small>{_package.amount.USD[0].total}</small>
								</p>
								<span>*Precio basado en 2 pasajeros</span>
							</div>
						</div>
					</div>
				</div>
				{recommended && <div className="label-offer">Recomendado</div>}
			</div>
		</div>
	);
};

export default PackageCard;
