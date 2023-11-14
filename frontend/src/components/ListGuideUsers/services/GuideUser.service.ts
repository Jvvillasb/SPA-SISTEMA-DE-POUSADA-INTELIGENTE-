import { Pagination } from 'src/commons/types/Pagination';
import { GuideUser } from '../../../commons/types/GuideUser';
import axiosInstance from './../../../axiosConfig';

const DEFAULT_PAGE_SIZE = 12;

export const listGuideUser = async (page: number, searchString = '') => {
    return axiosInstance.get<Pagination<GuideUser>>(
        `/guia?size=${DEFAULT_PAGE_SIZE}&page=${page}&name=${searchString}&sort=id,desc`
    );
};

export const listGuidesBySearch = async () => {
    return axiosInstance.get<Pagination<GuideUser>>(
        `/guia?&sort=id,desc`
    );
};

export const createGuideUser = async (GuideUser: GuideUser) => {
    return axiosInstance.post<GuideUser>(`/guia`, GuideUser);
};

export const updateGuideUser = async (GuideUser: GuideUser, id: number) => {
    return axiosInstance.put<GuideUser>(`/guia/${id}`, GuideUser);
};

export const deleteGuideUser = async (id: number) => {
    return axiosInstance.delete<GuideUser>(`/guia/${id}`);
};

