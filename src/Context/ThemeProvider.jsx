import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { base, rica, panam } from '../Config/themes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
const themesMap = {
	rica,
	panam,
};
export const ThemePreferenceContext = React.createContext();

const ThemeProvider = ({ theme = null, children }) => {
	const [currentTheme, setCurrentTheme] = useState('rica');
	const selectedTheme = { ...base, colors: themesMap[theme ? theme : currentTheme] };
	console.log(theme, selectedTheme);
	return (
		<ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
			<link
				href="https://fonts.googleapis.com/css?family=Nunito:300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700,800,900&amp;display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Vampiro+One&amp;display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Dancing+Script:400,700&amp;display=swap"
				rel="stylesheet"
			/>{' '}
			<StyledThemeProvider theme={selectedTheme}>{children}</StyledThemeProvider>
		</ThemePreferenceContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.any.isRequired,
	theme: PropTypes.oneOf(['rica', 'panam']),
};

export default ThemeProvider;
