import React from 'react';
import ThemeProvider from '../Context/ThemeProvider';
import TemplateSelector from './helpers/TemplateSelector';
import BoxOffer from '../Boxs/BoxOffer';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Box/BoxOffer',
	component: BoxOffer,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	/*  argTypes: {
    backgroundColor: { control: "color" },
  }, */
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
Default.args = {};
