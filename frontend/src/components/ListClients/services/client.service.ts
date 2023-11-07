import { Pagination } from 'src/commons/types/Pagination';
import { Client } from '../../../commons/types/Client';
import axiosInstance from './../../../axiosConfig';
import { clientFilters } from '../../../store/slices/createClientSlice.types';

const DEFAULT_PAGE_SIZE = 12;

export const listClients = async (page: number, searchString = '', filters: clientFilters) => {
    return axiosInstance.get<Pagination<Client>>(
        `/guest?size=${DEFAULT_PAGE_SIZE}&page=${page}&name=${searchString}&caravana=${filters.excursionType}&sort=id,desc`
    );
};

export const createClients = async (client: Client) => {
    return axiosInstance.post<Client>(`/guest`, client);
};

export const updateClient = async (client: Client, id: number) => {
    return axiosInstance.put<Client>(`/guest/${id}`, client);
};

export const deleteClient = async (id: number) => {
    return axiosInstance.delete<Client>(`/guest/${id}`);
};
