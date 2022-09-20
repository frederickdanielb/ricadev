import React from 'react';
import ThemeProvider from '../Context/ThemeProvider';
import Nav from './../Nav/Nav';
import NavItem from './../Nav/NavItem/NavItem';
import logo from './assets/footer-logo.png';
import NavAlternative from '../NavAlternative';

export default {
	title: 'Page/NavAlternative',
	component: NavAlternative,
	argTypes: {
		logo: { control: 'text' },
		loginButtonText: { control: 'text' },
		logoutButtonText: { control: 'text' },
		isLoggedIn: { control: 'boolean' },
		userDisplayName: { control: 'text' },
		onClickLogoutButton: { action: 'clicked' },
		onClickLoginButton: { action: 'clicked' },
	},
};

const storyName = (args) => (
	<ThemeProvider>
		<NavAlternative {...args}>
			<NavItem>{'item 1'}</NavItem>
			<NavItem>{'item 2'}</NavItem>
			<NavItem>{'item 3'}</NavItem>
		</NavAlternative>
	</ThemeProvider>
);
export const Default = storyName.bind({});
Default.args = {
	loginButtonText: 'Iniciar Sesión',
	logoutButtonText: 'Cerrar Sesión',
	logo: logo,
	rightChildren: 'Holi',
};
