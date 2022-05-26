import React from "react";

import ContactBox from "../ContactBox"
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ContactBox",
  component: ContactBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
   argTypes: {
	contact: { control: "object" }
  },
};
const mockConfig = {
	contact: {
		company_name: "Panamericana Turismo",
		address: "Av. Los Leones 1071",
		map_url:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.768936005934!2d-70.60544108480117!3d-33.42926798078003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf72251d4829%3A0xe2cfa9b2f844f83c!2sAv.%20Los%20Leones%201071%2C%20Providencia%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1647817812809!5m2!1ses-419!2scl",
		phone: "+562 2 476 5800",
		email: "",
		social_networks: {
			facebook: "https://www.facebook.com/TurismoPanamericana/",
			youtube: "https://www.youtube.com/channel/UCGiVnhb-GDcDujk1K8PC_8g",
		},
	},
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ContactBox  {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	contact: mockConfig.contact
};