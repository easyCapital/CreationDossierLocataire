import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const ProfilWrapper = styled.div`
  margin-top: 200px;
  .denied {
    text-align: center;
    .title {
      font-size: 40px;
      font-weight: bold;
    }
    .subTitle {
      font-size: 30px;
    }
    .ant-btn {
      margin-left: auto;
      margin-right: auto;
      margin-top: 100px;
      font-size: 30px;
      border-radius: 30px;
      background: #4ca6e2;
      color: white;
      height: 50px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .connected {
    .ligne {
      margin-left: 35%;
      margin-right: 40%;
      display: flex;
      .name {
        margin-top: 20px;
        font-size: 30px;
      }
      img {
        border-radius: 60px;
        margin-right: 10%;
      }
    }
    .email {
      margin-top: 100px;
      margin-left: 35%;
    }
  }
  @media (max-width: 800px) {
  }
`;
