import { Pagination } from 'src/commons/types/Pagination';
import { Client } from '../../../commons/types/Client';
import axiosInstance from './../../../axiosConfig';
import { clientFilters } from '../../../store/slices/Client/createClientSlice.types';

const DEFAULT_PAGE_SIZE = 12;

export const listClients = async (
    page: number,
    searchString = '',
    filters: clientFilters
) => {
    return axiosInstance.get<Pagination<Client>>(
        `/guest?size=${DEFAULT_PAGE_SIZE}&page=${page}&name=${searchString}&caravana=${filters.excursionType}&sort=id,desc&ativo=${filters.ativo}`
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

export const checkinClient = async (clientId: number, bedroomId: number) => {
    return axiosInstance.post(`/guest/checkinLeito/${clientId}/${bedroomId}`);
};

export const checkoutClient = async (clientsIds: number[]) =>
    axiosInstance.post(`/guest/checkout`, clientsIds);
