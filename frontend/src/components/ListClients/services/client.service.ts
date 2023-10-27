import { Pagination } from 'src/commons/types/Pagination';
import { Client } from '../../../commons/types/Client';
import axiosInstance from './../../../axiosConfig';

const DEFAULT_PAGE_SIZE = 12;

export const listClients = async (page: number, searchString = '') => {
    return axiosInstance.get<Pagination<Client>>(
        `/guest?size=${DEFAULT_PAGE_SIZE}&page=${page}&name=${searchString}`
    );
};

export const createClients = async (client: Client) => {
    return axiosInstance.post<Client>(`/guest`, client);
};
