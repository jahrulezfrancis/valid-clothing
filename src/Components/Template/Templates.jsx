import styled from "styled-components";

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.width | "100%"};
  height: ${(props) => props.height | "auto"};
`;
