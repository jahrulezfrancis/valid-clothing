import { styled } from "styled-components";
import { Link } from "react-router-dom";


export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const TitleContainer = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

`

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

    @media (max-width: 1200px){
    grid-template-columns: repeat(3, 1fr);

    }
    @media (max-width: 900px) and (min-width: 550px){
      grid-template-columns: repeat(2, 1fr);

    }
    @media (max-width: 610px){
      grid-template-columns: repeat(1, 1fr);
  }
`;
