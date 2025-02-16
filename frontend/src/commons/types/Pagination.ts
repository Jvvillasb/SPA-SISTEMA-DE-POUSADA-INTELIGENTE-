export type Pagination<T> = {
    content: Array<T>;
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    sort: { sorted: boolean; empty: boolean; unsorted: boolean };
    totalElements: number;
    totalPages: number;
};
