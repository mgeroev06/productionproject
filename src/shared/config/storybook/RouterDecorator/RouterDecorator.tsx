import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StoryContext, StoryFn } from '@storybook/react';

export const RouterDecorator = (
    story: (context: StoryContext) => React.ReactNode,
    context: StoryContext,
) => (
    <BrowserRouter>
        {story(context)}
    </BrowserRouter>
);