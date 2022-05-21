import React from "react";

import { Step } from "./../Step";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Step",
  component: Step,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    current: 0,
    linkeable: false,
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <Step {...args}>
    <Step.Item title={"Seleccionar"} />
    <Step.Item title={"Reservar"} />
  </Step>
);

export const NormalStep = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NormalStep.args = {
  linkeable: false,
};

export const LinkeableStep = (
  <Step linkeable current={0}>
    <Step.Item title={"Seleccionar"} />
    <Step.Item title={"Reservar"} />
    <Step.Item title={"Confirmar"} path={"/test/route"}/>
  </Step>
);
