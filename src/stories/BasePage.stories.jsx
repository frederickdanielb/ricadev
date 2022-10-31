import React from 'react';
import ThemeProvider from '../Context/ThemeProvider';
import Header from '../Header';
import SinglePage from '../SinglePage';
import StepLine from '../Step/Line';
import Nav from '../Nav';
import NavItem from '../Nav/NavItem';
import AnimatedContainer from '../AnimatedContainer';
import mockConfig from './__mocks__/config.mock';
import { Default as FooterStories } from './Footer.stories';
import { Step } from '../Library';
import TemplateSelector from './helpers/TemplateSelector';
const BasePage = ({ theme, children }) => {
	return (
		<ThemeProvider theme={theme}>
			<TemplateSelector />
			<SinglePage>{children}</SinglePage>
		</ThemeProvider>
	);
};
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Page',
	component: BasePage,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		theme: { control: 'select', options: ['rica', 'panam'] },
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BasePage {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	children: (
		<>
			<Header
				logo={mockConfig.page.logo_url}
				loggedUserName={'Test User'}
				loggedIn
				menuItems={[
					{ node: 'Home', onClick: () => console.log('home clicked') },
					{ node: 'About', onClick: () => console.log('about clicked') },
					{ node: 'Contact', onClick: () => console.log('contact clicked') },
				]}
			></Header>
			<StepLine linkeable current={1}>
				<StepLine.Item title={'data item'} />
				<StepLine.Item title={'data item2'} />
				<StepLine.Item title={'data item3'} />
			</StepLine>
			<FooterStories {...FooterStories.args} />
		</>
	),
};

export const DefaultStepAlternative = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultStepAlternative.args = {
	children: (
		<>
			<Header
				logo={mockConfig.page.logo_url}
				loggedUserName={'Test User'}
				loggedIn
				menuItems={[
					{ node: 'Home', onClick: () => console.log('home clicked') },
					{ node: 'About', onClick: () => console.log('about clicked') },
					{ node: 'Contact', onClick: () => console.log('contact clicked') },
				]}
			></Header>
			<Step
				type={'square'}
				items={[
					{ title: 'data item' },
					{ title: 'data item2' },
					{ title: 'data item3' },
					{ title: 'data item4' },
					{ title: 'data item5' },
				]}
				linkeable
				current={4}
			></Step>
			<FooterStories {...FooterStories.args} />
		</>
	),
};

export const WithNav = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithNav.args = {
	children: (
		<>
			<Nav
				logo={mockConfig.page.logo_url}
				userDisplayName={'Test User'}
				isLoggedIn
				menuItems={[
					{ node: 'Home', onClick: () => console.log('home clicked') },
					{ node: 'About', onClick: () => console.log('about clicked') },
					{ node: 'Contact', onClick: () => console.log('contact clicked') },
				]}
			>
				<NavItem>{'Home'}</NavItem>
				<NavItem>{'About'}</NavItem>
				<NavItem>{'Contact'}</NavItem>
			</Nav>
			<SinglePage>
				<StepLine linkeable current={1}>
					<StepLine.Item title={'data item'} />
					<StepLine.Item title={'data item2'} />
					<StepLine.Item title={'data item3'} />
					<StepLine.Item title={'data item4'} />
				</StepLine>
			</SinglePage>
			<FooterStories {...FooterStories.args} />
		</>
	),
};

export const WithAnimatedContainer = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAnimatedContainer.args = {
	theme: 'rica',
	children: (
		<>
			<Nav
				logo={mockConfig.page.logo_url}
				userDisplayName={'Test User'}
				isLoggedIn
				menuItems={[
					{ node: 'Home', onClick: () => console.log('home clicked') },
					{ node: 'About', onClick: () => console.log('about clicked') },
					{ node: 'Contact', onClick: () => console.log('contact clicked') },
				]}
			>
				<NavItem>{'Home'}</NavItem>
				<NavItem>{'About'}</NavItem>
				<NavItem>{'Contact'}</NavItem>
			</Nav>
			<AnimatedContainer>
				<StepLine linkeable current={1}>
					<StepLine.Item title={'data item'} />
					<StepLine.Item title={'data item2'} />
					<StepLine.Item title={'data item3'} />
					<StepLine.Item title={'data item4'} />
				</StepLine>
			</AnimatedContainer>
			<FooterStories {...FooterStories.args} />
		</>
	),
};
