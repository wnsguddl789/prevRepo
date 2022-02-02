import React from 'react';
import styled from '@emotion/styled';
import { CategoryData } from './CategoryData';

const Category = () => {
  return (
    <CategoryContainer>
      <CategoryList>
        {CategoryData.map((data) => {
          const { name, submenu } = data;
          return <CategoryItem key={`Category-${name}`}>{name}</CategoryItem>;
        })}
      </CategoryList>
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  width: 100%;
  height: 10vh;
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
`;

const CategoryList = styled.ul`
  width: 100%;
  margin: 30px 0;
  display: flex;
  justify-content: center;
`;
const CategoryItem = styled.li`
  margin: 10px 40px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  :hover {
    font-weight: 700;
    color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
  }
`;
