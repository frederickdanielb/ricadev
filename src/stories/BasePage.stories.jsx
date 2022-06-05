import React from 'react';
import ThemeProvider from '../Context/ThemeProvider';
import Header from '../Header';
import SinglePage from '../SinglePage';
import Step from '../Step';
import Nav from '../Nav';
import NavItem from '../Nav/NavItem';
import AnimatedContainer from '../AnimatedContainer';
import mockConfig from './__mocks__/config.mock';
import { Default as FooterStories } from './Footer.stories';
const BasePage = ({ theme, children }) => {
	return (
		<ThemeProvider theme={theme}>
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
			<Step linkeable current={1}>
				<Step.Item title={'data item'} />
				<Step.Item title={'data item2'} />
				<Step.Item title={'data item3'} />
			</Step>
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
				<Step linkeable current={1}>
					<Step.Item title={'data item'} />
					<Step.Item title={'data item2'} />
					<Step.Item title={'data item3'} />
					<Step.Item title={'data item4'} />
				</Step>
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
				<Step linkeable current={1}>
					<Step.Item title={'data item'} />
					<Step.Item title={'data item2'} />
					<Step.Item title={'data item3'} />
					<Step.Item title={'data item4'} />
				</Step>
			</AnimatedContainer>
			<FooterStories {...FooterStories.args} />
		</>
	),
};
