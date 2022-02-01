import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const StartWrapper = styled.div`
  margin-top: 75px;
  

  .txtTags123 {
    margin-bottom: 20px;
    font-size: 16px;
    .boldTxt {
      font-weight: bold;
    }
  }
  .title {
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 20px;
  }

  .ligne {
    display: flex;
    vertical-align: top;
    > div {
      flex: 1;
    }
  }
  .lignePasFlex{
    display: flex;
    vertical-align: top;
  }

  .quartwidth {
    max-width: 25%;
  }
  .addForm {
    width: 100%;
  }
  .ant-select-selector {
    border: 0px !important;
  }
  .ant-row {
    margin-right: 2%;
  }
  .ant-select-selection-item {
    font-weight: bold;
    font-size: 15px;
  }
  .ant-select-show-arrow {
    color: #4ca6e2 !important;
  }

  .ant-input-number {
    border: 0px;
    color: #4ca6e2;
  }
  .bulle {
    border-radius: 30px;
    background: #f5f5f5;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 10px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
  .step2 {
    .txtStep2 {
      font-size: 19px;
    }
  }
  .step4{
    svg{

    }
  }
  p{
    padding-top:5px;
  }

`;
