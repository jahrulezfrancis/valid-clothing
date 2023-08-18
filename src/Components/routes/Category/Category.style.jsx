import { styled } from "styled-components"

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 30px;
    column-gap: 20px;
`
export const CategoryTitle = styled.h2`
    text-align: center;
    margin-bottom: 25px;
    font-size: 30px;
    text-transform: uppercase;
`