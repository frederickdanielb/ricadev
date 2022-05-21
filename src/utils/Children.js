import React from "react";

export function map(children, func, context) {
	let index = 0;
	return React.Children.map(children, (child) => {
		if (!React.isValidElement(child)) {
			return child;
		}
		const handle = func.call(context, child, index);
		index += 1;
		return handle;
	});
}
export function mapCloneElement(children, func, context) {
	return map(
		children,
		(child, index) =>
			React.cloneElement(child, {
				key: index,
				...func(child, index),
			}),
		context
	);
}
