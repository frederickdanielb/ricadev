import React from 'react';
import ThemeProvider from '../Context/ThemeProvider';
/*import Nav from './../Nav/Nav';
import NavItem from './../Nav/NavItem/NavItem';
import logo from './assets/footer-logo.png';
import { NavItemInternal } from '../Library';*/
import RoomSelector from '../RoomSelector';
import { Col, Row } from 'react-bootstrap';

export default {
	title: 'Components/RoomSelector',
	component: RoomSelector,
	argTypes: {
		onChangeRooms: { action: 'default' },
	},
};

const storyName = (args) => (
	<ThemeProvider>
		<Row>
			<Col md={6} xl={6}>
				<RoomSelector {...args} />
			</Col>
		</Row>
	</ThemeProvider>
);
export const Horizontal = storyName.bind({});
Horizontal.args = {};
export const Vertical = storyName.bind({});
Vertical.args = {
	type: 'vertical',
};
