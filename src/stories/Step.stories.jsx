import React from 'react';

import StepLine from '../Step/Line';
import ThemeProvider from '../Context/ThemeProvider';
import Step from '../Step';
import TemplateSelector from './helpers/TemplateSelector';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Step',
	component: Step,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		current: { control: 'number' },
		onClick: { action: 'clicked' },
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
	<ThemeProvider>
		<TemplateSelector />
		<Step type={'line'} {...args}>
			<StepLine.Item title={'Seleccionar'} />
			<StepLine.Item title={'Reservar'} />
			<StepLine.Item title={'Continuar'} />
			<StepLine.Item title={'Finalizar'} />
		</Step>
		<Step
			type={'square'}
			{...args}
			items={[
				{ title: 'Seleccionar' },
				{ title: 'Reservar' },
				{ title: 'Continuar' },
				{ title: 'Finalizar' },
			]}
		/>
	</ThemeProvider>
);

export const NormalStep = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NormalStep.args = {};
