import React from 'react';
import PackageCard from '../PackageShowcase/PackageCard';
import { mockHotels } from './__mocks__/hotels.mock';
import PackageShowcase from '../PackageShowcase';
import { mockPackages } from './__mocks__/packages.mock';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Page/PackageShowcase',
	component: PackageShowcase,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	/*  argTypes: {
    backgroundColor: { control: "color" },
  }, */
	argTypes: {
		gridType: { control: { type: 'select', options: [2, 3, 4] } },
		onSelectPackage: { action: 'onSelectPackage' },
	},
	subcomponents: { PackageCard },
};
const Template = (args) => (
	<PackageShowcase {...args}>
		{mockPackages.map((_package, index) => (
			<PackageCard  _package={_package} index={index} onSelectPackage={() => {}} />
		))}
	</PackageShowcase>
);

export const PackageShowcaseTwoColumns = Template.bind({});
PackageShowcaseTwoColumns.args = {
	gridType: 2,
};
export const PackageShowcaseThreeColumns = Template.bind({});
PackageShowcaseThreeColumns.args = {
	gridType: 3,
};
export const PackageShowcaseFourColumns = Template.bind({});
PackageShowcaseFourColumns.args = {
	gridType: 4,
};
