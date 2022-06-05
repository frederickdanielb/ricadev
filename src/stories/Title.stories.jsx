import React from 'react';

import { Title } from '../Typography';
import ThemeProvider from '../Context/ThemeProvider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Typography/Title',
	component: Title,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
	<ThemeProvider theme={'panam'}>
		<div style={{ height: '100px' }}>
			<Title {...args}></Title>
		</div>
	</ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	children: 'Example Title',
};
export const WithLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithLabel.args = {
	children: 'Example Title',
	label: 'Text in label',
	roundedLabel: true,
};
export const WithWhiteLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithWhiteLabel.args = {
	children: 'Example Title',
	label: 'Text in label',
	whiteLabel: true,
};
export const WithSubtitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithSubtitle.args = {
	children: 'Example Title',
	subtitle: 'Text in Subtitle',
};
export const WithHighlighted = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithHighlighted.args = {
	subtitle: 'Text in Subtitle',
	highlighted: 'Featured...',
	subHighlighted: 'Destinations',
};
export const WithBackgroundSubtitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithBackgroundSubtitle.args = {
	children: 'Example Title',
	backgroundSubtitle: 'In Background',
};
export const WithAll = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAll.args = {
	children: 'Example Title',
	label: 'Text in label',
	subtitle: 'Text in Subtitle',
	backgroundSubtitle: 'In Background',
	highlighted: 'Featured...',
	subHighlighted: 'Destinations',
};
