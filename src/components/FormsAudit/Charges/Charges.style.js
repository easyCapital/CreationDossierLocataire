import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const ChargesWrapper = styled.div`
  margin-left: 32%;
  .ligne1 {
    display: flex;
    .ant-checkbox-group {
      .ant-checkbox-wrapper {
        font-size: 20px;
      }
    }
    .ant-select {
      width: 15%;
    }
  }
  .ligne2 {
    display: flex;
    margin-top: 20px;
    .ant-picker {
      margin-left: 1%;
      width: 20%;
    }
  }
  .ligne3 {
    margin-top: 20px;
    display: flex;
    .ant-input{
        margin-right:1%;
    }
  }

  @media (max-width: 800px) {
  }
`;
