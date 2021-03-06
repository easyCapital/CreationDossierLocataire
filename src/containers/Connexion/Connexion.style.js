import styled from "styled-components";

export const ConnexionWrapper = styled.div`
  .noAccountWrapper {
    text-align: center;
  }
  .signIn {
    margin-top: 120px;
    display: flex;
    margin-left: 200px;
    margin-right: 200px;
    box-shadow: 0.2px -0.2px gray, -0.1em -0.1em 3em #a4adba;
    border-radius: 40px;
    text-align: center;
    .gauche {
      flex: 2;
      background: white;
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;

      .title {
        font-size: 40px;
        color: #327ac7;
        font-weight: bold;
        margin-top: 150px;
        margin-bottom: 50px;
      }
      .txt {
        color: #718096;
        margin-bottom: 30px;
      }
      .form {
        .buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .ant-btn {
          height: 60px;
          font-size: 22px;
          &.ant-btn-primary {
            margin-bottom: 20px;
            font-size: 24px;
            border-radius: 15px;
            width: 400px;
            padding: 10px;
          }
        }
      }
      .ant-alert {
        margin: 20px 10px;
      }
    }
    .droite {
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      flex: 1;
      background: #327ac7;
      padding-top: 360px;
      padding-bottom: 300px;
      text-align: center;
      color: white;

      .hello {
        font-size: 45px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          font-size: 60px;
          margin-right: 20px;
        }
      }
      .txt {
        font-size: 20px;
      }
      .ant-btn {
        margin-top: 15px;
        border-radius: 20px;
        margin-right: auto;
        margin-left: auto;
        height: 50px;
        font-size: 25px;
      }

      .t1 {
        position: absolute;
        top: 300px;
        right: 200px;
        height: 0;
        width: 0;
        border: solid #327ac7;
        border-width: 100px 100px 40px 100px;
        border-left-color: #7ebde8;
      }
      .t2 {
        position: absolute;
        top: 700px;
        right: 380px;
        height: 0;
        width: 0;
        border: 50px solid #327ac7;
        border-bottom-color: #7ebde8;
      }
      .cercle {
        position: absolute;
        top: 700px;
        right: 300px;
        height: 70px;
        width: 70px;
        border-radius: 35px;
        background-color: #7ebde8;
      }
    }
  }
  .cercleBack {
    position: absolute;
    height: 300px;
    width: 300px;
    border-radius: 200px;
    z-index: -1;
  }
  #c1 {
    background-color: #ffa400;
    top: 700px;
    right: 100px;
  }
  #c2 {
    background-color: #327ac7;
    top: 170px;
    left: 100px;
  }
  .carre {
    position: absolute;
    background-color: #4ca6e2;
    top: 800px;
    left: 100px;
    height: 300px;
    width: 300px;
    z-index: -1;
  }
  .alreadyConnected {
    text-align: center;
    margin-top: 400px;
    font-size: 40px;
  }
  .mailSent {
    font-size: 30px;
    font-weight: bold;
    margin-top: 30%;
    :first-line {
      font-size: 40px;
    }
  }

  @media (max-width: 1024px) {
    height: 100vh;
    .signIn {
      height: 100%;
      margin: 0px;
    }
    .gauche {
      padding: 0 5%;
      text-align: center;
      width: 100%;
      border-radius: 0px !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        margin: 0px !important;
        margin-bottom: 80px;
        font-size: 38px !important;
        font-weight: bold;
        color: #327ac7;
      }
      .txt {
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .ant-col {
        margin: 0px;
        .ant-btn {
          max-width: 100%;
        }
      }
      .buttons {
        .ant-btn {
          width: 100% !important;
        }
      }
      .ant-form-item-control-input-content {
        .ant-btn {
          margin-left: auto;
          margin-right: auto;
          margin-top: 0px;
        }
      }
      .passwordless {
        svg {
          height: 40px;
          width: 40px;
        }
      }
    }
  }
`;
