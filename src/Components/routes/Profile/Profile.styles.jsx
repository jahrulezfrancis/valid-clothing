import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 350px 2fr;
  gap: 50px;
  padding: 20px;
  background-color: #f8f8f8;
`;

export const ProfileBody = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const ProfileImage = styled.img`
  max-width: 100px;
  border-radius: 50%;
  align-self: center;
`;

export const ClassicHeading = styled.h2`
  font-size: 36px;
  background-clip: text;
  -webkit-background-clip: text;
  color: white;
`;

export const FlexContainer = styled.section`
  display: flex;
  width: 100vw;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export const FluidContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 20px;
  column-gap: 30px;
  width: 300px;
`

export const CustomInput = styled.input`
  display: flex;
  width: 150px;
  height: 30px;
  border-radius: 8px;
  border: 0.1px solid grey;
`

export const LeftSidebar = styled.div`
  display: flex;
  flex-direction: column;
  // width: 100%;
  padding: 20px;
  justify-content: center;
  border-radius: 8px;
  overflow-x: hidden;
  height: auto;
  background-color: #E7E7E7;
  min-height: 100vh;
`