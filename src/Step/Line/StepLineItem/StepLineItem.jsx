const StepLineItem = ({ index, title, description, isActive, isCompleted, onClick }) => {
	const handleClick = () => {
		if (isCompleted) onClick(index);
	};
	return (
		<li
			onClick={handleClick}
			className={
				isCompleted
					? 'progress-step is-complete'
					: isActive
					? 'progress-step is-active'
					: 'progress-step'
			}
		>
			<div className="progress-marker"></div>
			<div className="progress-text">
				<h4 className="progress-title">{title}</h4>
				{description ?? description}
			</div>
		</li>
	);
};
export default StepLineItem;
