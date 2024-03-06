import { StoryFn } from '@storybook/react';
import { Themes } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
