import styled from "styled-components";
import { blue } from "../../styles/variables.style";

export const FormWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  > div > svg {
    position: fixed;
    font-size: 40px;
    color: ${blue};
    cursor: pointer;
    &:hover {
      color: #0079f2;
    }
  }
  .content {
    flex: 10;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 100px;
    > div {
      flex: 1;
      max-width: 50%;
      display: flex;
      justify-content: center;
      &.picture {
        align-items: center;

        > span {
          position: fixed;
          img {
            width: 35vw !important;
            height: 700px !important;
            object-fit: cover;
            &#presentez-vous {
              object-position: 0px -40px !important;
            }
          }
        }
      }
      form {
        width: 70%;
        .stepTitle {
          font-size: 30px;
          margin-bottom: 10px;
          > span {
            color: ${blue};
          }
        }
        .ant-radio-group {
          display: flex;
          .ant-radio-button-wrapper {
            height: 50px;
            width: 100%;
            span {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100%;
              width: 100%;
              svg {
                font-size: 26px;
              }
            }
          }
        }
        .ant-space,
        .ant-space-item,
        .ant-input-number {
          width: 100%;
        }
        .ant-upload {
          svg {
            color: ${blue};
            font-size: 24px;
          }
        }
        .pdfThumbnail {
          &:hover {
            > div {
              display: flex;
            }
          }
          > div {
            background: rgba(50, 50, 50, 0.5);
            position: absolute;
            width: 102px;
            height: 102px;
            display: flex;
            align-items: center;
            justify-content: center;
            display: none;
            > svg {
              cursor: pointer;
              color: white;
              margin: 5px;
            }
          }
        }
        .ant-upload-list-item {
          padding: 0px;
        }
        .guarantees-checkbox {
          display: flex;
          flex-direction: column;
          .ant-checkbox-wrapper {
            margin: 0px;
          }
        }
      }
    }
    .info {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      p {
        margin: 0px;
        font-style: italic;
        &.important {
          font-weight: bold;
          color: ${blue};
          font-size: 16px;
        }
      }
      svg {
        margin-right: 30px;
        margin-left: -15%;
        font-size: 30px;
        color: ${blue};
      }
    }
  }
`;
