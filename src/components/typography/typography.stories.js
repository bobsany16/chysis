import React from 'react';
import Heading from './heading/Heading';

export default {
  title: 'Chysis/Heading',
  component: Heading,
  argTypes: {
    color: { control: 'color' },
    large: { control: 'boolean' },
    medium: { control: 'boolean' },
    small: { control: 'boolean' },
  },
};

const Template = (args) => <Heading {...args} />;

export const heading = Template.bind({});
heading.args = {
  small: true,
  children: 'This is a heading component',
};
