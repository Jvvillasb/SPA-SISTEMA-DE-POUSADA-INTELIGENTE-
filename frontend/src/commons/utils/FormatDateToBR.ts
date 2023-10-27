export function formatDateToBR(inputDate: string): string {
    const parts = inputDate.split('-');
    if (parts.length !== 3) return inputDate;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}