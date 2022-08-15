import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RatingContainer, Star } from './styled';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Rating({ stars = 1 }) {
	var rows = [];
	for (var i = 1; i <= stars; i++) {
		rows.push([]);
	}
	return (
		<RatingContainer>
			{rows.map(() => (
				<Star>
					<FontAwesomeIcon beat icon={faStar} />
				</Star>
			))}
		</RatingContainer>
	);
}
