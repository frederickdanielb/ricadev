import useTheme from '../../Hooks/useTheme';
import React from 'react';

const TemplateSelector = () => {
	const { setCurrentTheme } = useTheme();
	return (
		<select
			onChange={(evt) => {
				setCurrentTheme(evt.target.value);
			}}
		>
			<option value={'rica'}> Default</option>
			<option value={'panam'}> Template Panam</option>
		</select>
	);
};
export default TemplateSelector;
