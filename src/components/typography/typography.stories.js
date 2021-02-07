import React from 'react';
import Heading from './heading/Heading';
import Body from './body/Body';
import Jumbo from './jumbo/Jumbo';

const config = {
  title: 'Chysis/Typography',
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

const JumboTemplate = (args) => <Jumbo {...args} />;

export const jumbo = JumboTemplate.bind({});
jumbo.args = {
  medium: true,
  children: 'This is a Jumbo component',
};
