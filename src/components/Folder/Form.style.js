import { rollIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { blue } from "../../styles/variables.style";

const flipAnimation = keyframes`${rollIn}`;

export const FormWrapper = styled.div`
  @media (min-width: 1024px) {
    height: 100vh;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .arrows {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  > div > svg {
    animation: 1s ${flipAnimation};
    position: fixed;
    font-size: 60px;
    color: ${blue};
    cursor: pointer;
    &:hover {
      color: #0079f2;
    }
  }
  .mean {
    color: ${blue};
    cursor: pointer;
    &:hover {
      font-weight: bold;
    }
  }
  .acceptedFormats {
    font-style: italic;
    opacity: 90%;
  }
  .content {
    flex: 10;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 100px;
    > div {
      > div {
        /* padding-top: 400px; */
        display: flex;
        align-items: center;
        flex-direction: column;
      }
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
        .liveSave {
          font-style: italic;
        }
        .ant-radio-group {
          display: flex;
          .ant-radio-button-wrapper {
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
          > div {
            margin: 0px;
          }
          .uploadIcon {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-style: italic;
            color: grey;
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

  @media (max-width: 1024px) {
    min-height: 100vh;
    padding: 0px !important;
    padding-bottom: 500px !important;
    &.reverse {
      .content {
        flex-direction: column-reverse;
      }
    }
    .content {
      padding: 0px;
      min-width: 100%;
      flex-direction: column;
      > div {
        min-width: 100% !important;
        &.picture {
          margin-top: 70px;
          max-height: 100px;
          position: relative !important;
          > span {
            width: 100%;
            max-height: 100% !important;
            position: relative !important;
            > span {
              min-width: 100%;
              max-height: 100%;
            }
            img {
              height: 100px !important;
              &#presentez-vous,
              &#votre_situation_actuelle {
                object-position: 0px -200px !important;
              }
              &#vos_ressources {
                object-position: 0px -85px !important;
              }
              &#vos_garanties {
                object-position: 0px -150px !important;
              }
              &#pieces_justificatives {
                object-position: 0px -300px !important;
              }
            }
          }
        }
      }
    }
    form {
      min-width: 90%;
    }
    .ant-space {
      flex-direction: column;
    }
    .arrows {
      z-index: 1;
      svg {
        bottom: 20px;
        position: fixed;
        &.disabled {
          color: grey;
        }
      }
      &.left {
        svg {
          right: 100px;
        }
      }
      &.right {
        svg {
          right: 20px;
        }
      }
    }
    .info {
      display: flex;
      svg {
        flex: 1;
        margin: 0px !important;
      }
      p {
        margin-left: 10px !important;
        flex: 5;
        text-align: justify;
      }
    }
    .ant-radio-group {
      flex-direction: column;
    }
  }
`;
