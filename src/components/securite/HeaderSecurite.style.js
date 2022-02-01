import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const HeaderSecuriteWrapper = styled.div`
  background: #142a3f;
  .wrap {
    padding-right: 15%;
    padding-left: 15%;
    padding-top: 130px;
    padding-bottom: 35px;
    display: flex;
    .gauche {
      flex: 1;
      .title {
        padding: 0;
        color: #ffa400;
        font-weight: bold;
        font-size: 35px;
        margin-bottom: 30px;
      }
      .txt {
        font-size: 25px;
        color: white;
      }
    }
    .droite {
      flex: 1;
      border-radius: 60px;
      text-align: center;
      svg {
        width: 60%;
        height: 60%;
        color: #4ca6e2;
      }
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
  @media (max-width: 800px) {
    > div {
      padding-right: 3% !important;
      padding-left: 3% !important;
    }
    .wrap {
      flex-direction: column;
      .txt {
        text-align: justify;
      }
    }
  }
`;
