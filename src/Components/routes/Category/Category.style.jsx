import { styled } from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr); 
  }
  @media (min-width: 500px) and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr); 
  }
`;

export const CategoryTitle = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  font-size: 30px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 24px; // Adjust font size for smaller screens
  }
`;
