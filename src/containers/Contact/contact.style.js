import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const ContactWrapper = styled.div`
   {
    margin-top: 100px;

    .titre {
      text-align: center;
      p {
        font-size: 37px;
        font-weight: bold;
      }
    }
    .conseiller {
      display: flex;
      flex-direction: column;
      .gauche {
        flex: 1;
        max-width: 30%;
      }
      .droite {
        flex: 2;
      }
    }
    .btnContact {
      margin-top: 40px;
      margin-right: auto;
      margin-left: 22.5%;
      display: flex;
      flex-wrap: wrap;

      .ant-btn {
        color: white;
        font-size: 18px;
        height: 50px;
        &:hover {
          color: white;
          font-weight: unset;
          font-weight: italic;
        }
      }
      .mail {
        background: #2cc84d;
        margin-right: 3%;
      }
      .adresseMail {
        font-size: 22px;
        font-weight: bold;
        text-align: center;
      }
      .numero {
        font-size: 22px;
        font-weight: bold;
        text-align: center;
      }
      .tel {
        background: #4ca6e2;
        margin-right: 3%;
        p {
          text-align: center;
        }
      }
      .fiche {
        background: #ffa400;
      }
      .caseMail {
        width: 350px;
      }
      .caseTel {
        width: 400px;
      }
    }
    .infoContact {
      margin-top: 100px;
      margin-bottom: 100px;
      .ficheContact {
        margin-left: 25%;
        width: 50%;
        p {
          font-weight: bold;
          text-align: center;
          font-size: 20px;
        }
        .ant-input {
          margin-bottom: 10px;
        }
      }
      .ant-btn {
        margin-left: 45%;
        margin-top: 50px;
        background: #4ca6e2;
        &:hover {
          color: white;
        }
      }
    }
    @media (max-width: 800px) {
      .btnContact {
        margin-left: 5%;
      }
      .conseiller {
        .gauche {
          max-width: 100%;
        }
      }
    }
  }
`;
