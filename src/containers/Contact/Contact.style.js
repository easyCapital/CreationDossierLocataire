import styled from "styled-components";
import { blue, green } from "../../styles/variables.style";

export const ContactWrapper = styled.div`
  display: flex;
  height: 100vh;
  padding-top: 0px !important;

  .left {
    flex: 2;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 400px;
      cursor: pointer;
    }
  }

  .right {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0px 300px 50px 300px;

    .description {
      margin-bottom: 30px;
      p {
        font-size: 18px;
        color: grey;
      }
    }

    .form {
      display: flex;
      justify-content: center;
    }
  }

  p {
    padding-top: 5px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 100px;
    .description {
      margin-bottom: 0px !important;
    }
    .right {
      padding: 0px;
      max-width: 90%;
    }
  }
  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    .ant-row {
      margin-bottom: 20px !important;

      textarea {
        height: 200px;
      }
    }

    .ant-btn {
      margin-top: 30px;
      width: 400px;
      background: ${blue};
    }

    .ant-form {
      width: 100%;
      .ant-form-item {
        margin: 0px;
        .ant-form-item-control-input-content {
          display: flex;
          justify-content: center;
        }
      }
    }

    @media (max-width: 1024px) {
      .ant-input-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 300px;
      }

      .ant-btn {
        width: 95%;
      }
    }
  }
`;
