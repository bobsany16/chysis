import React from 'react';
import Heading from './heading/Heading';
import Body from './body/Body';

const config = {
  title: 'Chysis/Typography',
  // component: Heading,
  argTypes: {
    color: { control: 'color' },
    extraLarge: { control: 'boolean' },
    large: { control: 'boolean' },
    medium: { control: 'boolean' },
    small: { control: 'boolean' },
    extraSmall: { control: 'boolean' },
  },
};

export default config;

const HeadingTemplate = (args) => <Heading {...args} />;

export const heading = HeadingTemplate.bind({});
heading.args = {
  small: true,
  children: 'This is a Heading component',
};

const BodyTemplate = (args) => <Body {...args} />;

export const body = BodyTemplate.bind({});
body.args = {
  small: true,
  children: 'This is a Body component',
};
