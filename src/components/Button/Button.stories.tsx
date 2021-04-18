import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { IButton } from './Button';
import './../../styles/index.scss';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Basic: Story<IButton> = () => (
  <Button title="Button" onClick={() => {}} />
);

export const WithIcon: Story<IButton> = () => (
  <Button title="Button" icon="document" onClick={() => {}} />
);

export const WithIconRightSide: Story<IButton> = () => (
  <Button
    title="Button"
    icon="pencil"
    iconPosition="right"
    onClick={() => {}}
  />
);

export const OnlyIcon: Story<IButton> = () => (
  <Button title={false} icon="print" onClick={() => {}} />
);

export const DarkButton: Story<IButton> = () => (
  <Button title="Button" colorScheme="dark" onClick={() => {}} />
);

export const WithCustomBackground: Story<IButton> = () => (
  <Button title="Button" backgroundColor="green" onClick={() => {}} />
);
