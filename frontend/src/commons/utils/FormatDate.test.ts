import { formatDateToBR, formatDateToISO } from './FormatDate';

describe('Date Format Functions', () => {
    describe('formatDateToBR', () => {
        it('should format an ISO date string to a BR date string', () => {
            const isoDate = '2023-03-15';
            const brDate = formatDateToBR(isoDate);
            expect(brDate).toBe('15/03/2023');
        });

        it('should return the input string if the format is incorrect for BR', () => {
            const wrongDate = '15-03-2023';
            expect(formatDateToBR(wrongDate)).toBe(wrongDate);
        });
    });

    describe('formatDateToISO', () => {
        it('should format a BR date string to an ISO date string', () => {
            const brDate = '15/03/2023';
            const isoDate = formatDateToISO(brDate);
            expect(isoDate).toBe('2023-03-15');
        });

        it('should return the input string if the format is incorrect for ISO', () => {
            const wrongDate = '2023/03/15';
            expect(formatDateToISO(wrongDate)).toBe(wrongDate);
        });
    });
});
