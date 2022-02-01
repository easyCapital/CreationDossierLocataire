import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const TarifsWrapper = styled.div`
  .ant-tabs-nav-list {
    margin-left: auto;
    margin-right: auto;
  }
  .ant-tabs-tab {
    font-size: 20px;
  }
  .title {
    text-align: center;
    font-size: 35px;
    margin-top: 50px;
    font-weight: bold;
    color: #2cc84d;
  }

  .comparatif {
    margin-top: 100px;
    background: #f7f9fa;
    border-radius: 20px;
    display: flex;
    margin-left: 5%;
    margin-right: 5%;
    .gauche {
      flex: 1;
      .titre {
        font-weight: bold;
        font-size: 35px;
        margin-left: 25%;
        margin-top: 2%;
      }
      .txt {
        margin-left: 25%;
        margin-top: 3%;
        font-size: 22px;
        color: #788896;
        svg {
          color: red;
          height: 3%;
          width: 3%;
          position: relative;
        }
      }
    }
    .droite {
      flex: 1;
      .titre {
        font-weight: bold;
        font-size: 35px;
        margin-left: 8%;
        margin-top: 2%;
      }
      .txt {
        margin-left: 8%;
        margin-top: 3%;
        font-size: 22px;
        color: #788896;
        svg {
          color: green;
          height: 3%;
          width: 3%;
          position: relative;
        }
      }
    }
  }
  .title_rep {
    padding-left: 19%;
    padding-right: 20%;
    font-size: 35px;
    margin-top: 50px;
    font-weight: bold;
  }
  .reponses {
    padding-left: 20%;
    padding-right: 20%;
    display: flex;
    color: #718096;
    .question {
      font-size: 25px;
    }
    .gauche {
      flex: 1;
      padding-right: 2%;
    }
    .droite {
      flex: 1;
      padding-left: 2%;
    }
  }
  .jobs {
    background: #93c9ed;
    margin-top: 50px;
    padding-bottom: 50px;
    padding-top: 20px;
    text-align: center;

    .title {
      font-size: 30px;
      color: black;
      font-weight: bold;
    }
    .txt {
      font-size: 30px;
    }
    .btn {
      margin-left: auto;
      margin-right: auto;
      border-radius: 20px;
      font-size: 25px;
      background: #ffa400;
      height: 50px;
      margin-top: 20px;
      &:hover {
        color: white;
        font-weight: normal;
      }
    }
  }
  @media (max-width: 800px) {
    .title {
      padding-left: 0;
      padding-right: 0;
      font-size: 30px;
      text-align: center;
    }
    .comparatif {
      flex-direction: column;
      .gauche {
        .titre {
          margin-left: 0;

        }
        .txt {
          margin-left: 0;
          font-size: 20px;
        }
      }
      .droite {
        .titre {
          margin-left: 0;
        }
        .txt {
          margin-left: 0;
        }
      }
    }
    .title_rep {
      padding-left: 3%;
      padding-right: 3%;
      margin-top: 0;
    }
    .reponses {
      padding-left: 3%;
      padding-right: 3%;
      flex-direction:column;
    }
    .jobs {
    }
  }
`;
