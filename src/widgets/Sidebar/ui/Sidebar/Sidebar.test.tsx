import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { renderWithTranslations }
    from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';

describe('SIDEBAR TEST', () => {
    test('render test', () => {
        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle test', () => {
        renderWithTranslations(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});