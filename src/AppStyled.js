import styled from "styled-components";

export const Form = styled.form`
  padding: 20px;
  max-width: 300px;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  & > * {
    display: block;
    margin-bottom: 10px;
  }

  & > label {
    font-weight: 600;
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;

  &:focus-visible {
    outline: none;
  }
`;

export const Li = styled.li`
  padding: 2px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;
  border-bottom: 1px solid grey;
  box-shadow: inset 0px -13px 20px 2px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: inset 0px -13px 20px 2px rgba(206, 250, 95, 0.2);
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const IMG = styled.img`
  margin-right: 10px;
`;

export const P = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  border-radius: 4px;
  border: 1px solid grey;
  background: rgb(245, 255, 243);

  &:hover {
    background: rgb(245, 63, 54);
  }
`;

export const AddButton = styled.button`
  border-radius: 4px;
  border: 1px solid grey;
  background: rgb(245, 255, 243);

  &:hover {
    background: rgb(74, 252, 58);
  }
`;
