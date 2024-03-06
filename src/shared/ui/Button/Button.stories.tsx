import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary',
    },
};


export const Clear: Story = {
    args: {
        children: 'Clear',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Themes.DARK)],
};

export const Outline: Story = {
    args: {
        children: 'Outline',
        theme: ButtonTheme.OUTLINE,
    },
};