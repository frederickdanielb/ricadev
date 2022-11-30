import { mapCloneElement } from '../utils/Children';

const PackageShowcase = ({ gridType, children }) => {
	const getGridType = (gridType) => {
		if (gridType === 2) return 'col-sm-6 popular grid-item wow fadeInUp';
		if (gridType === 3) return 'col-xl-4 col-sm-6 popular grid-item wow fadeInUp';
		if (gridType === 4) return 'col-xl-3 col-lg-4 col-sm-6 popular grid-item wow fadeInUp';
	};
	const items = mapCloneElement(children, (item) => {
		return {
			className: getGridType(gridType),
			...item.props,
		};
	});
	return (
		<div className="product-wrapper-grid special-section grid-box">
			<div className="row content grid">{items}</div>
		</div>
	);
};
export default PackageShowcase;
