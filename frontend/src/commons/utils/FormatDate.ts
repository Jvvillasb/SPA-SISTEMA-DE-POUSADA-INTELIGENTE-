export function formatDateToBR(inputDate: string): string {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(inputDate)) return inputDate;
    const parts = inputDate.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

export function formatDateToISO(inputDate: string): string {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(inputDate)) return inputDate;
    const parts = inputDate.split('/');
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}
