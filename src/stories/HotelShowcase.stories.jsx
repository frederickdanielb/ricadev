import React from 'react';
import HotelShowcase from '../HotelShowcase';
import HotelCard from '../HotelShowcase/HotelCard';
import { mockHotels } from './__mocks__/hotels.mock';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Page/HotelShowcase',
	component: HotelShowcase,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	/*  argTypes: {
    backgroundColor: { control: "color" },
  }, */
	argTypes: {
		gridType: { control: { type: 'select', options: [2, 3, 4] } },
		onSelectHotel: { action: 'onSelectHotel' },
	},
	subcomponents: { HotelCard },
};
const Template = (args) => (
	<HotelShowcase {...args}>
		{mockHotels.map((hotel, index) => (
			<HotelCard hotel={hotel} index={index} onSelectHotel={() => {}} />
		))}
	</HotelShowcase>
);

export const HotelShowcaseTwoColumns = Template.bind({});
HotelShowcaseTwoColumns.args = {
	gridType: 2,
};
export const HotelShowcaseThreeColumns = Template.bind({});
HotelShowcaseThreeColumns.args = {
	gridType: 3,
};
export const HotelShowcaseFourColumns = Template.bind({});
HotelShowcaseFourColumns.args = {
	gridType: 4,
};
