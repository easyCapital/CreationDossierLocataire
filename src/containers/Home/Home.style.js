import styled from "styled-components";
import { blue } from "../../styles/variables.style";

export const HomeWrapper = styled.div`
  text-align: center;
  h1,
  h2,
  h3 {
    font-weight: bold;
  }

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 40px;
  }

  .blue {
    color: ${blue};
  }

  .ant-divider {
    min-width: 100px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin: 0px;
    }

    strong {
      margin: 50px 0px;
      font-size: 18px;
    }

    > div {
      display: flex;
      align-items: center;
      .ant-input {
        width: 400px;
        height: 50px;
      }
      .ant-btn {
        font-size: 18px;
        height: 50px;
        margin-left: 20px;
        font-weight: bold;
      }
    }

    .arrow {
      position: absolute;
      top: 95vh;
      font-size: 30px;
      animation: 1s linear 0s infinite alternate move_eye;
      -webkit-animation: 1s linear 0s infinite alternate move_eye;
    }
  }

  .explanation {
    margin-top: 50px;
    .steps {
      display: flex;
      justify-content: center;

      > div {
        align-text: center;
        padding: 0px 100px;
        width: 500px;

        h3 {
          margin-top: 40px;
          color: ${blue};
          font-size: 32px;
        }

        p {
          font-size: 18px;
        }
      }
    }
  }

  .partenaires {
    margin: 200px 0px;
    h2 {
      margin-bottom: 50px;
    }
    > div {
      img {
        margin: 0px 100px;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    .upper {
      text-align: center;
      h2 {
        font-size: 60px;
      }
      .mainText h3 {
        position: relative;
        color: #005fc3;
      }
      h3 {
        font-size: 20px;
        margin: 10px 100px;
        position: relative;
      }
    }

    .home_btn {
      margin: 10px 20px;
      font-size: 18px;
      padding: 30px 22px;
      background: #005fc3;
      position: relative;
    }
  }

  @media screen and (max-width: 1400px) {
    .explanation .steps {
      display: flex;
      padding: 0px 100px;
      flex: wrap;
      .column {
        flex: wrap;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .explanation .steps {
      display: block;
      .column {
        h3 {
          margin-top: 50px;
        }
      }
    }
  }

  @media screen and (max-width: 580px) {
    .upper {
      margin-top: 150px;
      text-align: center;
      h3 {
        font-size: 20px;
        margin: 10px 10px;
      }
    }

    .home_btn {
      margin: 100px 2px;
      font-size: 18px;
    }
    .home_btn:last-child {
      position: relative;
      top: 50px;
      right: 120px;
    }
    .home_btn:first-child {
      position: relative;
      left: 150px;
    }
  }

  @media screen and (max-width: 480px) {
    .home_btn {
      position: absolute;
      top: 800px;
      left: 167px;
      right: 160px;
    }
  }

  .tarif {
    h3 {
      margin: 0;
    }
    display: flex;
    > div {
      width: 50%;
    }
  }

  @-webkit-keyframes move_eye {
    from {
      margin-top: -1.5%;
    }
    to {
      margin-bottom: 0%;
    }
  }
  @keyframes move_eye {
    from {
      margin-top: -1.5%;
    }
    to {
      margin-bottom: 0%;
    }
  }
`;
