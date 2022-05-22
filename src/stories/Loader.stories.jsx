import React from "react";
import { Button, Card } from "react-bootstrap";

import Loader from "./../Loader";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Loader",
  component: Loader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /*  argTypes: {
    backgroundColor: { control: "color" },
  }, */
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Loader {...args} />;

export const FullPageLoader = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FullPageLoader.args = {
  isFullPage: true,
  loading: true,
};
export const InPageLoader = () => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src="https://via.placeholder.com/286x180" />
    <Card.Body>
      <Card.Text>
        <Loader isFullPage={false} loading />
      </Card.Text>
    </Card.Body>
  </Card>
);
