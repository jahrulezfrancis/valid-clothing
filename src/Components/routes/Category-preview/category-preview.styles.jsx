import { styled } from "styled-components";


export const CategoryPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); // Responsive grid
  gap: 20px;
`;