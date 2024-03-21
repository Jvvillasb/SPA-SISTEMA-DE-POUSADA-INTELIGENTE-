import { render } from '@testing-library/react';
import PageContainer from './PageContainer';

describe('PageContainer component', () => {
    it('should render children correctly', () => {
        const { getByText } = render(
            <PageContainer>
                <div>Child Component</div>
            </PageContainer>
        );

        expect(getByText('Child Component')).toBeInTheDocument();
    });

    it('should have correct styles', () => {
        const { container } = render(
            <PageContainer>
                <div>Child Component</div>
            </PageContainer>
        );

        const pageContainer = container.firstChild as HTMLElement;
        expect(pageContainer).toHaveStyle({
            maxWidth: '1260px',
            height: '100%',
            margin: '0 auto',
        });
    });
});
