// ListClients.style.tsx
import styled from '@emotion/styled';

export const ListGuideRoomsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #ffffff;
    padding: 24px;
`;

export const GuideRoomsSection = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
`;

export const EmptyStateSection = styled.div`
    width: 100%;
    height: 100%;
`;

export const ListGuideRoomsContent = styled.ul`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin-top: 1.5rem;
    list-style: none;

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

export const StyledContentModal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;
