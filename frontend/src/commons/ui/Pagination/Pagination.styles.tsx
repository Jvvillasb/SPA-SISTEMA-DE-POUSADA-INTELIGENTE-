import styled from '@emotion/styled';

export const StyledPagination = styled.div`
    padding-bottom: 80px;

    .pagination {
        display: flex;
        justify-content: center;
        list-style: none;
        margin-top: 20px;
        gap: 8px;
    }

    .pagination-item {
        font-family: 'Roboto', sans-serif;
        background-color: #ffffff;
        border: 1px solid #ccc;
        width: 36px;
        height: 36px;
        text-align: center;
        border-radius: 6px;
        color: #81868f;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pagination-item.active {
        background-color: #e8e8e8;
        border-bottom: 3px solid #00a878;
    }

    .pagination-item:hover {
        background-color: #e8e8e8;
    }
`;
