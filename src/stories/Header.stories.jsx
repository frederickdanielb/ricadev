import React from "react";

import Header from "../Header";
import Logo from "./../../images/footer-logo.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Page/Header",
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClickLogo: { action: "onClickLogo" },
    onClickLoginButton: { action: "onClickLoginButton" },
    onClickLogoutButton: { action: "onClickLogoutButton" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Header {...args}></Header>;

export const PageHeader = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PageHeader.args = {
  logo: Logo,
  menuItems: [
    { node: "Home", onClick: () => console.log("home clicked") },
    { node: "About", onClick: () => console.log("about clicked") },
    { node: "Contact", onClick: () => console.log("contact clicked") },
  ],
};

export const PageHeaderLoggedIn = Template.bind({});
PageHeaderLoggedIn.args = {
  logo: Logo,
  loggedIn: true,
  loggedUserName: "John Doe",
  menuItems: [
    { node: "Home", onClick: () => console.log("home clicked") },
    { node: "About", onClick: () => console.log("about clicked") },
    { node: "Contact", onClick: () => console.log("contact clicked") },
  ],
};
