import React from 'react';
import Button from './Button';

const config = {
  title: 'Chysis/Buttons',
  component: Button,
  argTypes: {
    // type: { control: 'select', options: ['primary'] },
    width: { control: 'text' },
    height: { control: 'text' },
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    label: { controle: 'text' },
  },
};

export default config;
const ButtonTemplate = (args) => <Button {...args} />;

export const button = ButtonTemplate.bind({});
Button.args = {
  label: 'Button',
};
