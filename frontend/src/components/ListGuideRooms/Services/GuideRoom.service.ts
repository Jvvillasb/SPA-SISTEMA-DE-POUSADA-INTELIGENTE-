import { Pagination } from 'src/commons/types/Pagination';
import { GuideRoom } from '../../../commons/types/GuideRoom';
import axiosInstance from './../../../axiosConfig';

const DEFAULT_PAGE_SIZE = 12;

export const listGuideRooms = async (page: number) => {
    return axiosInstance.get<Pagination<GuideRoom>>(
        `/quartos?size=${DEFAULT_PAGE_SIZE}&page=${page}&sort=id,desc`
    );
};

export const listGuideRoomsBySearch = async () => {
    return axiosInstance.get<Pagination<GuideRoom>>(`/quartos?&sort=id,desc`);
};

export const createGuideRooms = async (GuideRoom: GuideRoom) => {
    const response = await axiosInstance.post<GuideRoom>(`/quartos`, GuideRoom);
    return response.data;
};

export const updateGuideRooms = async (GuideRoom: GuideRoom, id: number) => {
    return axiosInstance.put<GuideRoom>(`/quartos/${id}`, GuideRoom);
};

export const deleteGuideRooms = async (id: number) => {
    return axiosInstance.delete<GuideRoom>(`/quartos/${id}`);
};
