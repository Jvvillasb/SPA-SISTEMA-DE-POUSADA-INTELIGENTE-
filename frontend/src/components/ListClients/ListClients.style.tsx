// ListClients.style.tsx
import styled from '@emotion/styled';

export const ListClientsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #ffffff;
    padding: 24px;
`;

export const ClientsSection = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
`;

export const ListClientsContent = styled.ul`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 16px;
    list-style: none;

    @media (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        overflow: auto;
        max-height: 600px;
        padding: 16px;
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
        text-align: -webkit-center;
    }

    @media (max-width: 600px) {
        max-height: 470px;
        max-width: 346px;
    }

    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;
