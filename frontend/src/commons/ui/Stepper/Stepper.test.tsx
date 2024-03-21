import { render } from '@testing-library/react';
import GenericStepper from './Stepper';

describe('GenericStepper component', () => {
    const steps = [
        { title: 'Step 1' },
        { title: 'Step 2' },
        { title: 'Step 3' },
    ];

    it('should render correctly', () => {
        const { getByText } = render(
            <GenericStepper steps={steps} activeStep={0} />
        );
        steps.forEach((step) => {
            expect(getByText(step.title)).toBeInTheDocument();
        });
    });

    it('should highlight the active step', () => {
        const { getByText } = render(
            <GenericStepper steps={steps} activeStep={1} />
        );

        expect(getByText('Step 1')).toBeInTheDocument();
        expect(getByText('Step 2')).toHaveStyle('font-weight: bold');
        expect(getByText('Step 3')).toBeInTheDocument();
    });

    it('should show completed steps', () => {
        const { getByText } = render(
            <GenericStepper steps={steps} activeStep={2} />
        );

        expect(getByText('Step 1')).toBeInTheDocument();
        expect(getByText('Step 2')).toHaveStyle('font-weight: bold');
        expect(getByText('Step 3')).toHaveStyle('font-weight: bold');
    });

    it('should show step numbers for incomplete steps', () => {
        const { getByText } = render(
            <GenericStepper steps={steps} activeStep={0} />
        );
        steps.forEach((step, index) => {
            expect(getByText((index + 1).toString())).toBeInTheDocument();
        });
    });

    it('should display the step as a heading', () => {
        const { getByRole } = render(
            <GenericStepper steps={steps} activeStep={1} />
        );
        expect(getByRole('heading', { name: /step 2/i })).toBeInTheDocument();
    });
});
