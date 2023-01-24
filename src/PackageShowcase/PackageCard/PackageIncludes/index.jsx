import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faBus, faHotel, faMapLocation, faMedkit, faPlane } from '@fortawesome/free-solid-svg-icons';
import { IncludeContainer, IncludeIcon, IncludeLi, IncludeUl } from './styled';

export default function PackageIncludes({hotel, flight, foodPlanAll, transfer, insurance, excursion, showTitle = true}){
	return <IncludeContainer className="include-sec">
		{showTitle && <span>Incluye</span>}
		<IncludeUl className="include">
		<IncludeLi included={hotel}>
			<IncludeIcon>
				<FontAwesomeIcon icon={faHotel} size={'2x'} title={'Hotel'}></FontAwesomeIcon>
			</IncludeIcon>
		</IncludeLi>
		<IncludeLi included={flight}>
			<IncludeIcon>
				<FontAwesomeIcon icon={faPlane} size={'2x'} title={'Vuelo'}></FontAwesomeIcon>
			</IncludeIcon>
		</IncludeLi>
		<IncludeLi included={foodPlanAll}>
			<IncludeIcon>
				<FontAwesomeIcon
					icon={faBowlFood}
					size={'2x'}
					title={'Alimentación'}
				></FontAwesomeIcon>
			</IncludeIcon>
		</IncludeLi>
		<IncludeLi included={excursion}>
			<IncludeIcon>
				<FontAwesomeIcon
					icon={faMapLocation}
					size={'2x'}
					title={'Turismo'}
				></FontAwesomeIcon>
			</IncludeIcon>
		</IncludeLi>
		<IncludeLi included={transfer}>
			<IncludeIcon>
				<FontAwesomeIcon icon={faBus} size={'2x'} title={'Transfer'}></FontAwesomeIcon>
			</IncludeIcon>
		</IncludeLi>
		<IncludeLi included={insurance}>
			<IncludeIcon>
				<FontAwesomeIcon icon={faMedkit} size={'2x'} title={'Seguro'}></FontAwesomeIcon>
			</IncludeIcon>
		</IncludeLi>
	</IncludeUl>
	</IncludeContainer>
}