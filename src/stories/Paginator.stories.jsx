import React from "react";
import Paginator from "./../Paginator"
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Paginator",
  component: Paginator,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChangePage: {action: 'change'}
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Paginator  {...args}></Paginator>;

export const PaginatorDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PaginatorDefault.args = {
    activePage: 0,
    limit: 10,
    total: 100
  
};
