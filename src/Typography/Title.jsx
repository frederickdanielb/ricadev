import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	BackgroundSubtitle,
	HighLight,
	HighLightSpan,
	Label,
	Position,
	Subtitle,
	TitleH2,
} from './styled';

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
	return (
		<Position position={position}>
			{label && (
				<Label roundedLabel={roundedLabel} whiteLabel={whiteLabel}>
					{label}
				</Label>
			)}
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
