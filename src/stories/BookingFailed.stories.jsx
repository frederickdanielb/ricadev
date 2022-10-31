import BookingFailed from '../BookingFailed';
import React from 'react';
import Logo from '../../images/footer-logo.png';

export default {
	title: 'Components/BookingFailed',
	component: BookingFailed,
	argTypes: {},
};
const Template = (args) => <BookingFailed {...args}></BookingFailed>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
