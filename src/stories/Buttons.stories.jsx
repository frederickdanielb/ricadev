import React from 'react';
import { ButtonSolid, ButtonOutline } from '../Buttons';
import ThemeProvider from '../Context/ThemeProvider';
import TemplateSelector from './helpers/TemplateSelector';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Buttons/ButtonSolid',
	component: ButtonSolid,
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
		<ButtonSolid {...args}>Default</ButtonSolid>
		<br />
		<br />
		<ButtonOutline {...args}>Button</ButtonOutline>
	</ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
