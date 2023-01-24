import React from 'react';
import PackageCard from '../PackageShowcase/PackageCard';
import { mockHotels } from './__mocks__/hotels.mock';
import PackageShowcase from '../PackageShowcase';
import { mockPackages } from './__mocks__/packages.mock';
import { PackageIncludes } from '../Library';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Page/PackageShowcase/PackageIncludes',
	component: PackageIncludes,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	/*  argTypes: {
    backgroundColor: { control: "color" },
  }, */

};
const Template = (args) => (
	<PackageIncludes  {...args}>
	</PackageIncludes>
);

export const Default = Template.bind({});
Default.args = {
	hotel: true,
	flight: true,
	foodPlanAll: true,
	transfer: true,
	insurance: true,
	excursion: true

};
