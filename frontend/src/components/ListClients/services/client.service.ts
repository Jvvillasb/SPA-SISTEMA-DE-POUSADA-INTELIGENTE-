import { Pagination } from 'src/commons/types/Pagination';
import { Client } from '../../../commons/types/Client';
import axiosInstance from './../../../axiosConfig';

const DEFAULT_PAGE_SIZE = 1;

<<<<<<< Updated upstream
export const listClients = async (page: number) => {
=======
export const listClients = async (page: number, searchString = '') => {
>>>>>>> Stashed changes
    return axiosInstance.get<Pagination<Client>>(
        `/guest?size=${DEFAULT_PAGE_SIZE}&page=${page}&name=${searchString}`
    );
};
