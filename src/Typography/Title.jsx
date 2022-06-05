import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = ({
	position,
	label,
	roundedLabel,
	whiteLabel,
	subtitle,
	highlighted,
	subHighlighted,
	backgroundSubtitle,
	children,
}) => {
	const Position = styled.div`
		text-align: ${position ? position : 'center'};
	`;
	const Label = styled.span`
		font-size: 14px;
		color: white;
		background-color: #ef3f3e;
		text-transform: uppercase;
		padding: 4px 18px;
		line-height: 1.7;
		border-radius: 3px;
		font-family: Work Sans, serif;
		font-weight: 600;
		${whiteLabel && 'background-color: white; color: #ef3f3e;'}
		${roundedLabel && 'border-radius: 18px !important;'}
	`;
	const TitleH2 = styled.h2`
		font-family: Nunito, sans-serif;
		font-size: calc(22px + (36 - 22) * ((100vw - 320px) / (1920 - 320)));
		font-weight: 700;
		letter-spacing: 0.001em;
		line-height: 28px;
		text-transform: capitalize;
		color: black;
	`;
	const Subtitle = styled.p`
		font-family: Nunito, sans-serif;
		font-size: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
		font-weight: 600;
		line-height: 18px;
		color: #bcbcbc;
		letter-spacing: 0.03em;
	`;
	const BackgroundSubtitle = styled.span`
		font-family: Vampiro One, cursive;
		font-size: calc(35px + (85 - 35) * ((100vw - 320px) / (1920 - 320)));
		position: absolute;
		color: rgba(239, 63, 62, 0.1);
		left: 50%;
		transform: translate(-50%, -50%);
		top: 50%;
		z-index: -1;
		font-weight: 400;
	`;
	const HighLight = styled.h2`
		font-size: calc(22px + (36 - 22) * ((100vw - 320px) / (1920 - 320)));
		color: #808080;
		font-weight: 400;
		margin-bottom: 22px;
		line-height: 32px;
		margin-top: -2px;
	`;
	const HighLightSpan = styled.span`
		color: #00a2f7;
		font-weight: 900;
	`;
	return (
		<Position>
			{label && <Label>{label}</Label>}
			<TitleH2>{children}</TitleH2>
			{highlighted && subHighlighted && (
				<HighLight>
					{highlighted}
					<HighLightSpan>{subHighlighted}</HighLightSpan>
				</HighLight>
			)}
			{subtitle && <Subtitle>{subtitle}</Subtitle>}
			{backgroundSubtitle && <BackgroundSubtitle>{backgroundSubtitle}</BackgroundSubtitle>}
		</Position>
	);
};
export default Title;

Title.propTypes = {
	children: PropTypes.any.isRequired,
	label: PropTypes.string,
	roundedLabel: PropTypes.bool,
	whiteLabel: PropTypes.bool,
	position: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
	subtitle: PropTypes.string,
	backgroundSubtitle: PropTypes.string,
	highlighted: PropTypes.string,
	subHighlighted: PropTypes.string,
};
