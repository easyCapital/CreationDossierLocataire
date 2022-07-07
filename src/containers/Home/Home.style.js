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

    form {
      display: flex;
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

  @media screen and (max-width: 1024px) {
    padding: 0px 5%;
    .arrow {
      top: 90vh !important;
    }
    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 30px;
    }

    form {
      flex-direction: column;
      width: 100%;
      .ant-input {
        max-width: 100%;
      }
      .ant-btn {
        margin: 0px !important;
      }
    }

    .explanation .steps {
      display: block;
      .column {
        h3 {
          margin-top: 50px;
        }
      }
      > div {
        padding: 0px;
        width: 100%;
      }
    }

    .ant-divider {
      width: 100%;
    }

    .partenaires {
      margin: 50px 0px;
      h2 {
        margin: 0px;
      }
      img {
        margin: 0px !important;
        margin-top: 30px !important;
      }
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
