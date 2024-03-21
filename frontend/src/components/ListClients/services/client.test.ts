import { listClients } from './client.service';
import axiosInstance from './../../../axiosConfig';

jest.mock('./../../../axiosConfig');

const mockedAxiosInstance = axiosInstance as jest.Mocked<typeof axiosInstance>;

describe('listClients', () => {
    const filters = {
        excursionType: 1,
        ativo: 'true',
    };

    it('should return a list of clients', async () => {
        const page = 1;
        const response = {
            status: 200,
            data: {
                content: [],
            },
        };
        const DEFAULT_PAGE_SIZE = 12;

        mockedAxiosInstance.get.mockResolvedValue(response);
        const result = await listClients(page, '', filters);
        expect(axiosInstance.get).toHaveBeenCalledWith(
            `/guest?size=${DEFAULT_PAGE_SIZE}&page=${page}&name=&caravana=${filters.excursionType}&sort=id,desc&ativo=${filters.ativo}`
        );
        expect(result).toEqual(response);
    });

    it('should return an error', async () => {
        const page = 1;
        const error = new Error('Error');
        mockedAxiosInstance.get.mockRejectedValue(error);

        await expect(listClients(page, '', filters)).rejects.toThrow(error);
    });
});
