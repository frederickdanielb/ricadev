import React from 'react';
import Footer from './../Footer';
import ContactUs from './../Footer/ContactUs';
import LeftLinks from './../Footer/LeftLinks';
import RightLinks from './../Footer/RightLinks';
import Sponsored from './../Footer/Sponsored';
import SubFooter from './../Footer/SubFooter';
import Topics from './../Footer/Topics';
import WhereWeAre from './../Footer/WhereWeAre';
import mockConfig from './__mocks__/config.mock';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Page/Footer',
	component: Footer,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	/*  argTypes: {
    backgroundColor: { control: "color" },
  }, */
	subcomponents: { ContactUs, LeftLinks, RightLinks, Sponsored, SubFooter, Topics, WhereWeAre },
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	children: (
		<>
			<ContactUs contact={mockConfig.contact} logoUrl={mockConfig.page.logo_url} />
			<LeftLinks links={mockConfig.page.footer.left_links} />
			<WhereWeAre />
			<RightLinks links={mockConfig.page.footer.right_links}></RightLinks>
			<Sponsored logos={mockConfig.page.footer.partners_logos}></Sponsored>
		</>
	),
};
