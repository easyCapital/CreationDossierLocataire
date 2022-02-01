import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const NousWrapper = styled.div`
  &:nth-child(even) {
    background: white;
  }
  .img_team {
    background: url("https://res.cloudinary.com/easycapital/image/upload/v1625732994/espace_client/yxpztbwd0jycbwksp1fj.jpg");
    .hello {
      padding-top: 230px;
      padding-bottom: 230px;
      font-weight: bold;
      text-align: center;
      font-size: 130px;
      color: white;
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
  }
  .section2 {
    margin-left: 30%;
    margin-right: 30%;
    margin-top: 50px;
    margin-bottom: 100px;
    .txt {
      margin-bottom: 50px;
      color: #788896;
      font-size: 20px;
    }
    .btn {
      margin-left: auto;
      margin-right: auto;
      border-radius: 30px;
      background: #4ca6e2;
      height: 40px;
      padding: 3%;
      font-size: 20px;

      &:hover {
        font-weight: normal;
        color: white;
      }
    }
  }
  .section3 {
    padding-left: 8%;
    padding-right: 8%;
    background: #80dd93;
    display: flex;
    .gauche {
      flex: 1;
      padding-top: 7%;
      img {
        max-width: 100%;
      }
    }
    .droite {
      flex: 2;

      margin-bottom: 70px;
      padding-left: 5%;
      .title {
        font-weight: bold;
        font-size: 30px;
        margin-bottom: 30px;
        padding-top: 50px;
      }
      .txt {
        font-size: 18px;
        text-align: justify;
      }
    }
  }
  .blocs {
    > div {
      padding-left: 15%;
      padding-right: 15%;
    }
  }
  .jobs {
    background: #93c9ed;

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
  //mobile
  @media (max-width: 800px) {
    .img_team {
      background-position: 50% 0%;
      background-size: cover;
      background-position: 39% 0px, 50% 100%;
      background-size: 290%, cover;
    }
    .hello {
      font-size: 80px !important;
      height: 325px;
    }
    .section2 {
      margin-left: 20px;
      margin-right: 20px;
    }
    .section3 {
      flex-direction: column;
      padding-left: 10px;
      padding-right: 10px;
      .title {
        font-size: 25px !important;
      }
    }
    .blocs {
      > div {
        padding-left: 15px;
        padding-right: 15px;
      }
    }
    .txt {
      font-size: 17px !important;
    }
  }
`;
