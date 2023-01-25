import React from 'react';
import ThemeProvider from '../Context/ThemeProvider';
/*import Nav from './../Nav/Nav';
import NavItem from './../Nav/NavItem/NavItem';
import logo from './assets/footer-logo.png';
import { NavItemInternal } from '../Library';*/
import RoomSelector from '../RoomSelector';

export default {
	title: 'Components/RoomSelector',
	component: RoomSelector,
	argTypes: {
		onChangeRooms: {action: 'default'}
	},
};

const storyName = (args) => (
	<ThemeProvider>
		<RoomSelector  {...args}>
		</RoomSelector>
	</ThemeProvider>
);
export const Horizontal = storyName.bind({});
Horizontal.args = {
};
export const Vertical = storyName.bind({});
Vertical.args = {
	type: 'vertical'
};