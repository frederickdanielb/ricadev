import { Link } from "react-router-dom";

const StepItem = ({
	title,
	description,
	isActive,
	isCompleted,
	linkeable,
	path,
	onClick,
}) => {
	if (linkeable && path && isCompleted) {
		return (
			<li
				className={
					isCompleted
						? "progress-step is-complete"
						: isActive
						? "progress-step is-active"
						: "progress-step"
				}
			>
				<Link to={path}>
					<div className="progress-marker"></div>
					<div className="progress-text">
						<h4 className="progress-title">{title}</h4>
						{description && { description }}
					</div>
				</Link>
			</li>
		);
	}

	return (
		<li
			onClick={isCompleted ? onClick : null}
			className={
				isCompleted
					? "progress-step is-complete"
					: isActive
					? "progress-step is-active"
					: "progress-step"
			}
		>
			<div className="progress-marker"></div>
			<div className="progress-text">
				<h4 className="progress-title">{title}</h4>
				{description && { description }}
			</div>
		</li>
	);
};
export default StepItem;
