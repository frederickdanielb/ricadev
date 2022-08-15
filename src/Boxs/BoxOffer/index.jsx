import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
	BottomDel,
	BottomH3,
	CardContainer,
	CardImageContainer,
	CardImg,
	CardLink,
	Container,
	Content,
	ContentBottom,
	ContentTop,
	ContentTopH3,
	ContentTopH6,
	CouponCode,
	HeartEffect,
	HeartIcon,
	Like,
	OfferDescription,
	SideEffect
} from './styled';
import Rating from '../../Rating';
const BoxOffer = ({
	title,
	subtitle,
	description,
	price,
	beforePrice,
	couponCode,
	rating = 1,
	image,
	onClick,
}) => {
	const handleClick = (e) => {
		e.preventDefault();
		onClick();
	};
	return (
		<Container>
			<CardContainer>
				<CardImageContainer>
					<CardLink onClick={handleClick} tabIndex="0">
						<CardImg src={image} alt="" />
					</CardLink>
					<SideEffect className="side-effect"></SideEffect>
				</CardImageContainer>
				<Content>
					<div>
						<ContentTop>
							<a href="#" tabIndex="0" onClick={handleClick}>
								<ContentTopH3>{title}</ContentTopH3>
							</a>
							<ContentTopH6>{subtitle}</ContentTopH6>
							<Like className="like-cls">
								<HeartIcon>
									<FontAwesomeIcon icon={faHeart}>
										<HeartEffect></HeartEffect>
									</FontAwesomeIcon>
								</HeartIcon>
							</Like>
						</ContentTop>
						<Rating stars={rating} />
						<OfferDescription>{description}</OfferDescription>
						<ContentBottom className="bottom">
							<BottomH3>
								{beforePrice && <BottomDel>{beforePrice}</BottomDel>}
								{price}
							</BottomH3>
							{couponCode && (
								<CouponCode className="coupon-code">
									Coupon: <span>{couponCode}</span>
								</CouponCode>
							)}
						</ContentBottom>
					</div>
				</Content>
			</CardContainer>
		</Container>
	);
};
export default BoxOffer;
