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

  .form {
    display: flex;
    align-items: center;
    > * {
      margin: 10px;
    }
    > Button {
      min-height: 60px;
      width: 170px;
      :hover {
        background-color: white;
        color: ${blue};
        font-size: 20px !important;
      }
    }
  }

  .inputContainer {
    display: flex;
    flex-direction: column;

    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    height: 60px;

    > label {
      text-align: left;
      font-weight: bold;
      margin-left: 11px;
    }
    > Input {
      border: none;
      height: 20px !important;
    }
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
        margin-right: 20px;
      }
      .ant-btn {
        font-size: 18px;
        height: 50px;
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
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 100px 5%;
    .main {
      justify-content: flex-start;
    }
    .arrow {
      top: 90vh !important;
    }
    h1 {
      font-size: 32px;
      span {
        font-size: 20px;
      }
    }

    h2 {
      font-size: 30px;
    }

    strong {
      text-align: center;
      margin-top: 30px !important;
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
