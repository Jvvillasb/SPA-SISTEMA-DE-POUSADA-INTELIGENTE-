import { Pagination } from "src/commons/types/Pagination"
import { Client } from "../../../commons/types/Client"
import axiosInstance from "./../../../axiosConfig"

const DEFAULT_PAGE_SIZE = 4

export const listClients = async (page: number) => {
    return axiosInstance.get<Pagination<Client>>(
        `/guest?size=${DEFAULT_PAGE_SIZE}&page=${page}`
    );
}