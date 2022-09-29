import styled from "styled-components";

export const ButtonGroupRadioWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 500px;
  @media (max-width: 650px) {
    width: 200px;
  }

  .button {
    width: 200px;
    margin: 5px;
    outline: 2px solid;
    opacity: 100%;
    transition: none;
  }

  .notSelected {
    opacity: 40%;
    outline: none;
  }

  .notSelected:hover {
    opacity: 100%;
    outline: 2px dashed;
  }
`;
