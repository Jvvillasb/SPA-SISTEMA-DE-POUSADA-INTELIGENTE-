import { listClients } from './client.service';
import axiosInstance from './../../../axiosConfig';

jest.mock('./../../../axiosConfig');

const mockedAxiosInstance = axiosInstance as jest.Mocked<typeof axiosInstance>;

describe('listClients', () => {
    it('should return a list of clients', async () => {
        const page = 1;
        const response = {
            status: 200,
            data: {
                content: [],
            },
        };
        mockedAxiosInstance.get.mockResolvedValue(response);
        const result = await listClients(page);
        expect(axiosInstance.get).toHaveBeenCalledWith(`/guest?size=4&page=${page}`);
        expect(result).toEqual(response);
    });

    it('should return an error', async () => {
        const page = 1;
        const error = new Error('Error');
        mockedAxiosInstance.get.mockRejectedValue(error);
        
        await expect(listClients(page)).rejects.toThrow(error);
    });
});