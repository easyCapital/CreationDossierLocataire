import styled from "styled-components";
import { blue, lightblue } from "../../styles/variables.style";

export const ErrorWrapper = styled.div`
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${blue};
    font-size: 100px;
    margin: 0px;
  }

  p {
    font-size: 24px;
    text-align: justify;
  }

  &.notlost {
    height: 100vh;
    > div {
      display: flex;
      justify-content: center;
      flex-wrap: wrap-reverse;
      > div {
        width: 500px !important;
        flex: 1;
        margin: 0px 40px;
      }

      &.error {
        > div {
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 400px;
        }
      }

      &.description {
        margin-top: 60px;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .ant-row {
      margin: 0px;
      width: 100%;
      margin-bottom: 10px;
      .ant-form-item-control-input-content {
        display: flex;
        justify-content: center;
      }
    }

    .ant-input {
      border: 2px solid ${blue};
      border-radius: 20px;
      &::placeholder {
        color: ${lightblue};
      }
    }

    .ant-input {
      height: 60px;
    }

    .ant-btn {
      background: ${blue};
      &:hover {
        background: ${lightblue} !important;
      }
    }

    .ant-form-item-explain-error {
      text-align: center;
    }

    textarea {
      height: 150px !important;
    }
  }

  &.lost {
    h1 {
      margin: 0px;
    }
    img {
      width: 100%;
      object-fit: cover;
      filter: saturate(0) brightness(0.7);
      height: 100vh;
    }
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      height: 60%;
      width: 100%;
      position: absolute;
      padding: 0 10%;
      margin: 0 auto;
      > div {
        width: 500px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          text-align: center;
        }
        a {
          color: ${blue};
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .ant-btn {
        width: 100%;
        background: ${blue};
        border-color: ${blue};
        font-weight: bold;
        &:hover {
          font-style: italic;
          background: ${lightblue} !important;
          border-color: ${lightblue};
          color: white;
        }
      }
    }
  }

  @media (max-width: 750px) {
    .notlot {
      img {
        max-width: 200px !important;
      }
      > div {
        flex-direction: column;
        p {
          font-size: 20px;
          text-align: center;
        }
        > div {
          width: 300px !important;
        }
        &.error {
          flex-direction: row;
          > div {
            margin: 0px;
            height: 100px;
          }
        }
        &.description {
          margin-top: 0px;
          > div {
            margin: 0px !important;
          }
        }
      }
    }
  }
  @media (max-width: 1255px) {
    &.lost {
      > div {
        justify-content: center;
      }
    }
  }
`;
