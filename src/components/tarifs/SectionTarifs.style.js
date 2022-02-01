import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const SectionTarifsWrapper = styled.div`
  margin-left: 30%;
  margin-right: 30%;
  margin-top: 100px;

  table {
    text-align: center;
    border: 0px;
  }
  .switch {
    text-align: center;
    margin-bottom: 20px;
  }
  .ant-switch {
    background-color: #ffa400;
    width: 20%;
    height: 30px;
  }
  .ant-switch-checked {
    background: #4ca6e2;
  }
  .ant-switch-handle {
    height: 25px;
    width: 25px;
  }
  .ant-switch-checked {
    .ant-switch-handle {
      left: calc(100% - 25px - 2px);
    }
  }

  .economie {
    text-align: center;
    padding-bottom: 10px;
    font-size: 18px;
    color: #788896;
  }

  td {
    border: 1px solid #333;
  }
  td {
    width: 150px;
    height: 35px;
  }
  #td_col1 {
    width: 300px !important;
    text-align: left;
  }
  .ant-collapse-header {
    padding: 0;
  }
  .ant-dropdown-trigger {
    padding-left: 10px;
  }

  .ant-dropdown {
    max-width: 400px;
  }
  #td_col1 {
    .ant-collapse-content-box {
      text-align: start !important;
    }
  }
  .ant-collapse-content-box {
    text-align: center;
    line-height: 35px;
  }
  .ant-collapse-content-active {
    display: none;
  }
  .ant-collapse-header {
    font-size: 19px;
    font-weight: bold;
  }

  thead,
  tfoot {
    color: #fff;
  }
  .yes {
    color: #2cc84d;
    svg {
      height: 30px;
      width: 35px;
    }
    .ant-collapse
      > .ant-collapse-item
      > .ant-collapse-header
      .ant-collapse-arrow {
      display: none;
    }
  }
  .no {
    color: red;
    svg {
      height: 25px;
      width: 25px;
    }
  }
  .orange {
    color: #ffa400;
    svg {
      height: 30px;
      width: 35px;
    }
    .ant-collapse
      > .ant-collapse-item
      > .ant-collapse-header
      .ant-collapse-arrow {
      display: none;
    }
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    height: 40px;
  }
  .case1_1 {
    border: 0px;
  }
  .case_ligne1 {
    .ligne1 {
      font-size: 25px;
    }
    .ligne2 {
      font-size: 30px;
      font-weight: bold;
      color: white;
    }
    .ligne3 {
      font-size: 20px;
      color: white;
    }
  }
  #col1 {
    background: #ffa400;
  }
  #col2 {
    background: #2cc84d;
  }
  #col3 {
    background: #4ca6e2;
  }
  .last_lign {
    td {
      border: 0px solid #333 !important;

      Button {
        margin-left: auto;
        margin-right: auto;
        color: white;
        font-size: 20px;
      }
    }
  }
  @media (max-width: 800px) {
    margin-left: 0%;
    margin-right: 0%;
    .ant-switch {
      width: 30%;
      height: 50px;
      .ant-switch-handle {
        height: 40px;
        width: 40px;
      }
    }
    .ant-switch-checked {
      .ant-switch-handle {
        left: calc(100% - 40px - 2px);
      }
    }

    td {
      max-width: 90px;
    }

    .case_ligne1 {
      .ligne1 {
        font-size: 15px;
        font-weight: bold;
      }
    }
    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      padding: 0;
      font-size: 10px;
      height: 32px;
    }
    .ant-dropdown-trigger {
      padding: 0;
      font-size: 10px;
    }
    .ant-dropdown {
      max-width: 400px;
      > div {
        max-width: 400px;
      }
    }
  }
`;
