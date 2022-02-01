import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const BlocOutilWrapper = styled.div`
  display: flex;
  padding-top: 100px;
  position: relative;
  padding-bottom: 100px;
  .droite {
    .title {
      color: #4ca6e2;
      font-size: 28px;
      padding-left: 20px;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .content {
      line-height: 30px;
      padding-bottom: 50px;
      padding-left: 20px;
      padding-right: 14%;
      font-size: 17px;
      color: #718096;
      text-align: justify;
    }
    .ant-btn {
      border-radius: 10px;
      width: 270px;
      height: 40px;
      font-size: 20px;
      background: #4ca6e2;
      margin-left: auto;
      margin-right: auto;
      &:hover {
        color: white;
        font-weight:unset;
      }
    }
    flex: 1;
  }
  .gauche {
    flex: 1;
  }
  //mobile
  @media (max-width: 800px) {
    flex-direction: column;
    .content {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .gauche {
      img{
        max-width:100%;
      }
    }
  }
`;
