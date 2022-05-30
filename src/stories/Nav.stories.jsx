import React from 'react';
import ThemeProvider from '../Context/ThemeProvider';
import Nav from './../Nav/Nav';
import NavItem from './../Nav/NavItem/NavItem';
import logo from './assets/footer-logo.png';

export default {
	title: 'Nav',
	component: Nav,
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
		<Nav {...args}>
			<NavItem>{'item 1'}</NavItem>
			<NavItem>{'item 2'}</NavItem>
			<NavItem>{'item 3'}</NavItem>
		</Nav>
	</ThemeProvider>
);
export const Default = storyName.bind({});
Default.args = {
	loginButtonText: 'Iniciar Sesión',
	logoutButtonText: 'Cerrar Sesión',
	logo: logo,
};
