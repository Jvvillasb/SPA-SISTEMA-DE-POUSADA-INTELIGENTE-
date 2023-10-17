import styled from '@emotion/styled';

export const StyledPagination = styled.div`
  margin-left: auto;
  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-top: 20px;
    gap: 8px;
  }

  .pagination-item {
    font-family: 'Roboto', sans-serif;
    background-color: #FFFFFF;
    border: 1px solid #ccc;
    width: 24px;
    height: 24px;
    text-align: center;
    border-radius: 6px;
    color: #81868F;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .pagination-item.active {
    background-color: #E8E8E8;
    border-bottom: 3px solid #00A878;
  }

  .pagination-item:hover {
    background-color: #E8E8E8;
  }

`;