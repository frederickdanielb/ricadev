import React from "react";
import ButtonTop from "../ButtonTop";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ButtonTop",
  component: ButtonTop,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*  argTypes: {
    backgroundColor: { control: "color" },
  }, */
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div style={{ height: "1080px" }}>
    <ButtonTop />
  </div>
);

export const ButtonTopType = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonTopType.args = {};
