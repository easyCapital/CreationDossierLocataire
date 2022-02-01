import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const EspaceCardWrapper = styled.div`
  border: solid 2px;
  border-color: #c3cfd9;
  width: 256px;
  margin-bottom: 50px;

  .ant-card {
    .headerCard {
      text-align: center;
      svg {
        width: 50px;
        height: 50px;
      }
    }

    .ant-card-body {
      text-align: center;
      .amount {
        font-size: 25px;
        font-weight: bold;
      }
      .variation{
        margin-bottom:10px;
      }
      .ant-btn {
        margin:auto;
        font-size:17px;
      }
    }
  }
  @media (max-width: 800px) {
    margin-right:auto !important;
    margin-left:auto;
  }
`;
