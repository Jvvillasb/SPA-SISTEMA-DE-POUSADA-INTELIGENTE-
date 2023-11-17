import { Pagination } from 'src/commons/types/Pagination';
import { Bedroom } from '../../../../commons/types/Bedroom';
import axiosInstance from './../../../../axiosConfig';

const DEFAULT_PAGE_SIZE = 12;

export const listBedrooms = async (page: number) => {
    return axiosInstance.get<Pagination<Bedroom>>(
        `/leitos?size=${DEFAULT_PAGE_SIZE}&page=${page}&sort=id,desc`
    );
};

export const listBedroomsBySearch = async () => {
    return axiosInstance.get<Pagination<Bedroom>>(`/leitos?&sort=id,desc`);
};

export const createBedrooms = async (Bedroom: Bedroom) => {
    const reponse = await axiosInstance.post<Bedroom>(`/leitos`, Bedroom);
    return reponse.data;
};

export const updateBedrooms = async (Bedroom: Bedroom, id: number) => {
    return axiosInstance.put<Bedroom>(`/leitos/${id}`, Bedroom);
};

export const deleteBedrooms = async (id: number) => {
    return axiosInstance.delete<Bedroom>(`/leitos/${id}`);
};
