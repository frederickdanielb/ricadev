import styled from 'styled-components';

const Content = styled.div`
	//padding: 45px 30px 45px 156px;
	margin-left: 55px;
	background-color: white;
	border-radius: 25px;
	padding: 55px 30px 55px 220px;
`;
const Container = styled.div`
	width: 100%;
	display: inline-block;
	&:hover ${Content} {
		-webkit-box-shadow: 2.5px 4.33px 20px 0px rgba(0, 0, 0, 0.1);
		box-shadow: 2.5px 4.33px 20px 0px rgba(0, 0, 0, 0.1);
		-webkit-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}
`;
const CardContainer = styled.div`
	position: relative;
	margin: 30px 0;
`;
const CardImageContainer = styled.div`
	position: absolute;
	left: 35px;
	top: 50%;
	transform: translateY(-50%);
	transition: all 0.5s ease;
	&:hover {
		left: 15px;
		-webkit-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}
	&:before {
		left: -8px;
		-webkit-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}
	&:after {
		left: -15px;
		-webkit-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}
`;
const CardLink = styled.a`
	transition: 0.5s ease;
	letter-spacing: 0.03em;
	text-decoration: none;
`;
const CardImg = styled.img`
	/* width: 230px;
		height: 230px;
		border-radius: 25px; */

	width: 180px;
	height: 180px;
	border-radius: 20px;
`;
const SideEffect = styled.div`
	&:after {
		content: '';
		position: absolute;
		top: 35px;
		height: calc(100% - 70px);
		background-color: rgba(0, 0, 0, 0.05);
		border-radius: 20px;
		width: 100%;
		left: 16px;
		z-index: -1;
		transition: all 0.5s ease;
	}
	&:before {
		content: '';
		position: absolute;
		top: 15px;
		height: calc(100% - 30px);
		background-color: rgba(0, 0, 0, 0.05);
		border-radius: 25px;
		width: 100%;
		left: 8px;
		z-index: -1;
		transition: all 0.5s ease;
		left: 6px;
	}

	&:before {
		left: -8px;
		-webkit-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}
	&:after {
		left: -15px;
		-webkit-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}
`;

const ContentTop = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-bottom: 15px;
	margin-top: -4px;
	position: relative;
`;
const ContentTopH3 = styled.h3`
	text-transform: capitalize;
	font-weight: 800;
	margin-bottom: 0;
`;
const ContentTopH6 = styled.h6`
	font-size: 14px;
	color: #4291b8;
	text-transform: uppercase;
	font-weight: 700;
	margin-bottom: 0;
	margin-left: 25px;
`;
const Like = styled.div`
	display: block;

	&:hover {
		-webkit-box-shadow: 2.5px 4.33px 20px 0px rgba(0, 0, 0, 0.1);
		box-shadow: 2.5px 4.33px 20px 0px rgba(0, 0, 0, 0.1);
		-webkit-transition: all 0.5s ease;
		transition: all 0.5s ease;
	}
`;
const HeartEffect = styled.span`
	border-radius: 50%;
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	right: 0;
	-webkit-transition: height 5s ease, width 5s ease;
	transition: height 5s ease, width 5s ease;
	z-index: 0;
	opacity: 0;
	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 50%;
		border: 1px solid #e1002c;
		-webkit-animation: effect 2s linear 1s infinite;
		animation: effect 2s linear 1s infinite;
	}
`;
const HeartIcon = styled.i`
	position: absolute;
	font-size: 16px;
	right: 0;
	top: -3px;
	color: #e1002c;
	background-color: rgba(225, 0, 44, 0.05);
	padding: 6px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	border-radius: 100%;
`;
const OfferDescription = styled.p`
	font-size: 14px;
	line-height: 1.5;
	color: #757575;
	font-weight: 500;
	margin-bottom: 20px;
	letter-spacing: 0.08em;
	display: block;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
`;
const ContentBottom = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	display: block;
	margin-left: 0;
`;
const BottomH3 = styled.h3`
	font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
	color: #4291b8;
	font-weight: 800;
	margin-bottom: 0;
`;
const BottomDel = styled.del`
	font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1920 - 320)));
	color: #c5c5c5;
	padding-right: 10px;
`;
const CouponCode = styled.h6`
	display: block;
	text-transform: capitalize;
	padding: 8px 20px;
	border-radius: 50px;
	border: 1px dashed #9a9a9a;
	color: #9a9a9a;
	font-weight: 800;
	display: inline-block;
	margin-left: 15px;
	margin-bottom: 0;
	margin-left: 0;
	margin-top: 10px;
`;
export {
	Content,
	Container,
	CardContainer,
	CardImageContainer,
	CardLink,
	CardImg,
	SideEffect,
	ContentTop,
	ContentTopH3,
	ContentTopH6,
	Like,
	BottomDel,
	BottomH3,
	ContentBottom,
	CouponCode,
	HeartEffect,
	HeartIcon,
	OfferDescription,
};
