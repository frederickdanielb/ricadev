import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { BottomDel, BottomH3, CardContainer, CardImageContainer, CardImg, CardLink, Container, Content, ContentBottom, ContentTop, ContentTopH3, ContentTopH6, CouponCode, HeartEffect, HeartIcon, Like, OfferDescription, Rating, SideEffect, Star } from './styled';

const BoxOffer = () => {
	
	return (
		<Container>
			<CardContainer>
				<CardImageContainer>
					<CardLink href="#" tabIndex="0">
						<CardImg src="http://placekitten.com/230/230" alt="" />
					</CardLink>
					<SideEffect className="side-effect"></SideEffect>
				</CardImageContainer>
				<Content>
					<div>
						<ContentTop>
							<a href="#" tabIndex="0">
								<ContentTopH3>10% cashback</ContentTopH3>
							</a>
							<ContentTopH6>HDFC bank</ContentTopH6>
							<Like className="like-cls">
								<HeartIcon>
									<FontAwesomeIcon icon={faHeart}>
										<HeartEffect></HeartEffect>
									</FontAwesomeIcon>
								</HeartIcon>
							</Like>
						</ContentTop>
						<Rating className="rating">
							<Star>
								<FontAwesomeIcon beat icon={faStar} />
							</Star>
							<Star>
								<FontAwesomeIcon beat icon={faStar} />
							</Star>
							<Star>
								<FontAwesomeIcon beat icon={faStar} />
							</Star>
							<Star>
								<FontAwesomeIcon icon={faStar} />
							</Star>
							<Star>
								<FontAwesomeIcon icon={faStar} />
							</Star>
						</Rating>
						<OfferDescription>
							Lorem Ipsum is simply dummy text of the printing and setting industry. Lorem Ipsum has
							been the industry's ard dummy text ever since the 1500s, when an unkn....
						</OfferDescription>
						<ContentBottom className="bottom">
							<BottomH3>
								<BottomDel>$240</BottomDel>
								$200
							</BottomH3>
							<CouponCode className="coupon-code">
								Coupon code: <span>EDR45</span>
							</CouponCode>
						</ContentBottom>
					</div>
				</Content>
			</CardContainer>
		</Container>
	);
};
export default BoxOffer;
