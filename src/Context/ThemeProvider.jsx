import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { base, rica, panam } from '../Config/themes';

const themesMap = {
	rica,
	panam,
};
export const ThemePreferenceContext = React.createContext();

const ThemeProvider = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState('rica');

	const theme = { ...base, colors: themesMap[currentTheme] };
    console.log(theme)
	return (
		<ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
			<StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
		</ThemePreferenceContext.Provider>
	);
};

export default ThemeProvider;
