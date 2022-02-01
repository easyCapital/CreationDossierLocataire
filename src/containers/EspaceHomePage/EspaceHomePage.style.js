import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const EspaceHomePageWrapper = styled.div`
  padding-top: 150px;
  padding-left: 15%;
  padding-right: 15%;
  background: white;
  .ligne1 {
    display: flex;

    .txt {
      flex: 1;
      font-size: 22px;
      color: #76859a;
    }
    .ant-progress {
      flex: 1;
    }
    .ant-progress-text {
      display: none;
    }
    .ant-progress-inner {
      background-color: white;
      height: 20px;
    }
    .ant-progress-bg {
      background-color: #ffa400;
      height: 20px !important;
    }
    .ant-btn {
      &:hover {
        font-weight: normal;
      }
    }
  }
  .situation {
    color: #ffa400;
    font-weight: bold;
    font-size: 30px;
    margin-top: 50px;
  }
  .ligne2 {
    display: flex;
    .ant-input {
      width: 60%;
      margin-right: 20px;
    }
    .ant-btn {
      border-radius: 10px;
      background-color: #4ca6e2;
      color: white;
      &:hover {
        font-weight: normal;
      }
    }
  }
  .filtredCards {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    .ant-btn {
    border-radius:20px;
      margin-right: 5px;
      margin-top: 10px;
      height: 50px;
      font-size: 20px;
      &:hover {
        font-weight: unset;
      }
    }
  }
  .cardContainer {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
  }
  .evolution {
    border: dashed #7d7d7d;
    min-height: 400px;
    .title {
      color: #ffa400;
      font-weight: bold;
      font-size: 30px;
    }
  }
  .diagnostic {
    margin-top: 50px;
    .title {
      color: #ffa400;
      font-weight: bold;
      font-size: 30px;
    }
  }
  .graph {
    display: flex;

    .gauche {
      flex: 1;
      padding-top: 50px;
    }
    .droite {
      margin-top: 50px;
      margin-bottom: 50px;
      flex: 1;
    }
  }

  @media (max-width: 800px) {
    margin-left: 3%;
    margin-right: 3%;
    .ligne1 {
      flex-direction: column;
      .txt {
        margin-bottom: 20px;
      }
      .ant-progress {
        margin-bottom: 20px;
      }
      .ant-btn {
        width: 180px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .evolution {
      .title {
        text-align: center;
      }
    }
    .diagnostic {
      .title {
        text-align: center;
      }
    }
    .dxf-legend,
    .dxc-legend,
    .dx-export-menu {
      display: none;
    }
    .graph {
      flex-direction: column;
      .gauche {
        .dx-visibility-change-handler {
          margin-left: -25px;
          .dxc-chart {
            width: 400px;
          }
        }
      }
      .droite {
        .dxf-funnel {
          width: 100%;
        }
      }
    }
  }
`;
