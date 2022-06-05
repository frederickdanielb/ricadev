import React from 'react';
import HotelCard from '../HotelShowcase/HotelCard';
import { mockHotel } from './__mocks__/hotels.mock';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Page/HotelCard',
	component: HotelCard,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	/*  argTypes: {
    backgroundColor: { control: "color" },
  }, */
	argTypes: {
		onSelectHotel: { action: 'onSelectHotel' },
	},
};
const Template = (args) => <HotelCard {...args} />;

export const Default = Template.bind({});
Default.args = {
	hotel: mockHotel,
	index: 0,
};
