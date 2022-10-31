import React from 'react';
import ThemeProvider from '../Context/ThemeProvider';
import TemplateSelector from './helpers/TemplateSelector';
import BoxBlog from '../Boxs/BoxBlog';
import BoxSimple from '../Boxs/BoxSimple';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Box/BoxSimple',
	component: BoxSimple,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		textAlign: {
			options: ['left', 'center', 'right'],
			control: { type: 'select' }, // Automatically inferred when 'options' is defined
		},
	},
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template = (args) => (
	<ThemeProvider>
		<TemplateSelector />
		<br />
		<br />
		<BoxSimple {...args} />
	</ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	topText: 'Check In',
	middleText: '29-11-2022',
	bottomText: '*Disponible desde las 16:00 hrs.',
};
