import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
`;

export const PictureSection = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #6c63ff;
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

export const CustomInput = styled.input`
  display: flex;
  width: 150px;
  height: 40px;
  border-radius: 8px;
  border: 0.1px solid grey;
`
