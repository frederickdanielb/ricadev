import React from 'react';
import { ButtonSolid, ButtonOutline } from '../Buttons';
import ThemeProvider from '../Context/ThemeProvider';
import useTheme from '../Hooks/useTheme';
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

const TemplateSelector = () => {
    const { currentTheme, setCurrentTheme } = useTheme();
	return (
		<ButtonSolid
			onClick={() => {
                if (currentTheme === 'rica') {
                    setCurrentTheme('panam');
                }
                if (currentTheme === 'panam') {
                    setCurrentTheme('rica');
                }
			}}
		>
			Change Style
		</ButtonSolid>
	);
};
const Template = (args) => (
	<ThemeProvider>
        <TemplateSelector />
		<br />
		<br />
		<br />
		<br />
		<ButtonSolid block>
			Default
		</ButtonSolid>
		<br />
		<br />
		<ButtonSolid primary block>
			Primary
		</ButtonSolid>
		<br />
		<br />
		<ButtonSolid secondary block>
			Secondary
		</ButtonSolid>
		<br />
		<br />
		<ButtonOutline primary block>
			Button
		</ButtonOutline>
		<br />
		<br />
		<ButtonOutline secondary block>
			Button
		</ButtonOutline>
		<br />
		<br />
		<ButtonSolid primary block rounded>
			Button
		</ButtonSolid>
		<br />
		<br />
		<ButtonSolid secondary block rounded>
			Button
		</ButtonSolid>
		<br />
		<br />
		<ButtonOutline primary block rounded>
			Button
		</ButtonOutline>
		<br />
		<br />
		<ButtonOutline secondary block rounded>
			Button
		</ButtonOutline>
		<br />
		<br />
		<ButtonSolid primary>Button</ButtonSolid>
		<br />
		<br />
		<ButtonSolid secondary>Button</ButtonSolid>
		<br />
		<br />
		<ButtonOutline primary>Button</ButtonOutline>
		<br />
		<br />
		<ButtonOutline secondary>Button</ButtonOutline>
		<br />
		<br />
		<ButtonSolid primary rounded>
			Button
		</ButtonSolid>
		<br />
		<br />
		<ButtonSolid secondary rounded>
			Button
		</ButtonSolid>
		<br />
		<br />
		<ButtonOutline primary rounded>
			Button
		</ButtonOutline>
		<br />
		<br />
		<ButtonOutline secondary rounded>
			Button
		</ButtonOutline>
        <br />
		<br />
		<ButtonSolid secondary rounded disabled>
			Button
		</ButtonSolid>
		<br />
		<br />
		<ButtonOutline primary rounded disabled>
			Button
		</ButtonOutline>
	</ThemeProvider>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
