import React from 'react';
import ThemeProvider from '../Context/ThemeProvider';
import TemplateSelector from './helpers/TemplateSelector';
import BoxOffer from '../Boxs/BoxOffer';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Box/BoxOffer',
	component: BoxOffer,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		onClick: { action: 'onClick' },
	},
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => (
	<ThemeProvider>
		<TemplateSelector />
		<br />
		<br />
		<BoxOffer {...args} />
	</ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	price: '$200',
	beforePrice: '$199',
	couponCode: 'HZ200RC',
	rating: 5,
	title: 'Lorem ipsum ga melemele',
	subtitle: 'Lorem ipsum',
	image: 'http://placekitten.com/300/370',
	description:
		'Lorem ipsum ga melemele ipsum pipirum orem ipsum ga melemele ipsum pipirum orem ipsum ga melemele ipsum pipirum',
};
