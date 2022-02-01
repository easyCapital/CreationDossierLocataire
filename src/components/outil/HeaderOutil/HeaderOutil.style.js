import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const HeaderOutilWrapper = styled.div`
  .ligne1 {
    display: flex;
    .gauche {
      flex: 1;
      font-size: 23px;
      .titre {
        font-size: 37px;
        font-weight: bold;
        color: #101820;
        &:first-line {
          color: #ffa400;
        }
      }
      .txt {
        line-height: 50px;
      }
      .btn_header {
        display: flex;
        margin-top: 20px;
        positon: relative;
        .btn_gauche {
          background: #EBECEE;
          flex: 1;
          border-radius: 10px;
          max-width: 230px;
          height: 50px;
          font-size: 18px;
          &:hover{
            color: #101820;
            border:0px;
          }
        }
        .btn_droite {
          background: #4ca6e2;
          flex: 1;
          margin-left: 5%;
          border-radius: 10px;
          height: 50px;
          max-width: 230px;
          font-size: 18px;
        }
        .btn_droite:hover {
          color: white;
        }
      }
    }
    .droite {
      flex: 1;
      img {
        width: 95%;
        height: 100%;
        margin-left: 2%;
      }
    }
  }

  .ligne2 {
    display: flex;
    margin-top: 80px;
    flex-wrap: wrap;

    > div {
      color: #7d8c9a;
      flex: 1;
      .titre {
        color: #101820;
        font-size: 20px;
        font-weight:bold;
        text-align: center;
        margin-bottom: 20px;
      }
    }
    .col1 {
      padding-right: 25px;
    }
    .col2 {
      padding-left: 25px;
      border-left-style: dashed;
    }
    .col3 {
      padding-left: 50px;
      border-left-style: dashed;
    }
    .txt {
      font-size: 16px;
    }
  }
  .nouveaute {
    position: relative;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    border-style: solid;
    border-radius: 40px;
    color: #7d8c9a;
    top: 70px;
    background: white;
    font-style: italic;

    .titre {
      color: #293845;
      margin-left: 10%;
      font-size: 26px;
      .icone {
        vertical-align: top;
        margin-top:8px;
        color: #4ca6e2;
      }
    }
    .content {
      color: #7d8c9a;
      margin-left: 10%;
      margin-right: 4%;
      margin-bottom: 2%;
      font-size: 17px;
    }
  }
  @media (max-width: 800px) {
    .ligne1 {
      flex-direction: column;
      .gauche {
        .titre {
          font-size: 27px;
        }
        .btn_header {
          padding-bottom: 15px;

          flex-direction: column;

          .btn_gauche {
            font-size: 15px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 10px;
          }
          .btn_droite {
            font-size: 15px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .txt {
          line-height: 35px;
          font-size: 20px;
        }
      }
    }
    .ligne2 {
      flex-direction: column;
      .col1 {
        .titre {
          text-align: left;
        }
      }
      .col2 {
        border-left: none;
        padding: 0;
        .titre {
          text-align: left;
        }
      }
      .col3 {
        border-left-style: none;
        padding-left: 0px;
        .titre {
          text-align: left;
        }
      }
    }
    .nouveaute {
      margin-left: 0;
      margin-right: 0;
      width: 100%;
    }
  }
`;
