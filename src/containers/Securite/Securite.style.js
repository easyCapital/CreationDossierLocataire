import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const SecuriteWrapper = styled.div`
  &:nth-child(even) {
    background: white;
  }
  > div {
    padding-left: 15%;
    padding-right: 15%;
    :first-child {
      padding-left: 0;
      padding-right: 0;
    }
  }
  .maskhero {
    position: relative;
    left: 0px;
    top: 0px;
    z-index: 200;
    display: block;
    width: 100%;
    height: 80px;
    min-width: 100%;
    margin-right: auto;
    margin-left: auto;
    direction: ltr;
  }

  .title {
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
    background: #80dd93;
    padding-bottom: 50px;
    padding-top: 10px;
    margin-top: 80px;
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
      background: gray;
      color: white;
      height: 40px;
      padding: 2%;
      margin-top: 20px;

      &:hover {
        color: white;
        font-weight: normal;
      }
    }
  }
  //version mobile
  @media (max-width: 800px) {
    > div {
      padding-right: 3%;
      padding-left: 3%;
      :first-child {
        padding-left: 0;
        padding-right: 0;
      }
    }
    .title {
      padding-left: 0;
      padding-right: 0;
      text-align: center;
    }
    .reponses {
      padding-left: 3%;
      padding-right: 3%;
    }
    .gauche {
      img {
        padding-top: 50px;
        margin-right: auto;
        margin-left: auto;
      }
    }
    .jobs {
      .btn {
        font-size: 20px;
      }
    }
  }
`;
