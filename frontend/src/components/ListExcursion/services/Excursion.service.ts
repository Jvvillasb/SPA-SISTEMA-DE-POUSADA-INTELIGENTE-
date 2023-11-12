import { Pagination } from 'src/commons/types/Pagination';
import { Excursion } from '../../../commons/types/Excursion';
import axiosInstance from './../../../axiosConfig';

const DEFAULT_PAGE_SIZE = 12;

export const listExcursions = async (page: number, searchString = '') => {
    return axiosInstance.get<Pagination<Excursion>>(
        `/caravana?name=${searchString}&size=${DEFAULT_PAGE_SIZE}&page=${page}&sort=id,desc`
    );
};

export const listExcursionsBySearch = async () => {
    return axiosInstance.get<Pagination<Excursion>>(
        `/caravana?&sort=id,desc`
    );
};

export const createExcursions = async (Excursion: Excursion) => {
    return axiosInstance.post<Excursion>(`/caravana`, Excursion);
};

export const updateExcursion = async (Excursion: Excursion, id: number) => {
    return axiosInstance.put<Excursion>(`/caravana/${id}`, Excursion);
};

export const deleteExcursion = async (id: number) => {
    return axiosInstance.delete<Excursion>(`/caravana/${id}`);
};
