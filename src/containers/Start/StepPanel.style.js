import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const StepPanelWrapper = styled.div`
  background: white;
  font-size:17px;
  span{
    font-size:17px;
  }

  .gauche {
    flex: 2;

    padding-left: 3%;
    padding-top: 70px;
    padding-bottom: 70px;
    cursor: pointer;
    min-height: 1000px;

    .ant-steps-item-title {
      font-size: 17px;
      padding-bottom: 17%;

      &:hover {
        color: #4ca6e2;
        font-style: italic;
      }
    }
  }
  .hidden {
    display: none;
    color: red;
  }
  .droite {
    margin-top: 80px;
    flex: 5;
    margin-right: 15%;
  }
  .steps-action {
    position: fixed;
    top: 90%;
    display: flex;
    Button {
      font-size: 27px;

      height: 50px;
      border-radius: 10px;
      &:hover {
        font-weight: normal;
        border: 0px;
      }
    }
  }
  .suivant {
    position: absolute;
    left: 70%;
    background: #2cc84d;
    font-size: 23px !important;
    border: 0px;
    &:hover {
      font-style: italic;
    }
    svg {
      color: white;
    }
  }
  .retour {
    background: white;
    position: absolute;
    left: 40%;
    &:hover {
      font-style: italic;
    }
  }
  .terminer {
    background: #ffa400;
    position: absolute;
    left: 70%;
  }
  .steps-action {
    padding-top: 20px;
    padding-bottom: 20px;
    height: 100px;
    background: #f0f0f0;
    width: 110%;
    margin-left: -10%;
  }
  .titreChoosing {
    text-align: center;
    margin-top: 40px;
    font-size: 30px;
    font-weight: bold;
  }
  .choosingTheme {
    display: flex;
    width: 100%;
    .themeContainer {
      flex: 1;

      margin-top: 80px;
      margin-left: 20%;
      .theme {
        width: 100%;
        border: solid;
        margin-bottom: 20px;
        text-align: center;

        .title {
          font-size: 30px;
        }
        svg {
          width: 5%;
          height: 5%;
        }
        &:hover {
          svg {
            color: #4ca6e2;
          }
        }
      }
    }
    .droite {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 1000px;
      margin-right: 20%;
      .theme {
        border: solid;
        width: 100%;
        margin-bottom: 20px;
        text-align: center;

        .title {
          font-size: 30px;
        }
        .removeIcon {
          width: 5%;
          height: 5%;
        }
        &:hover {
          .removeIcon {
            color: #4ca6e2;
          }
        }

        .fleches {
          display: flex;
          padding-left: 40%;
          .ant-btn {
            border-radius: 30px;
          }
          svg {
            width: 40px;
            height: 40px;
          }
        }
      }
      .ant-empty-description {
        display: none;
      }
    }
  }
  .Go {
    font-size: 20px;
    height: 50px;
    min-width: 200px;
    border-radius: 100px;
    position: absolute;
    top: 830px;
    right: 45%;
    background: #ffa400;
    &:hover {
      border: 0px;
      color: white;
      font-weight: unset;
    }
  }
  .ant-btn{
    margin-right:5px;
    margin-left:5px;
    margin-bottom:5px;
    &:hover{
      font-weight:unset;
    }
  }

  @media (max-width: 800px) {
    .gauche {
      display: none;
    }
    .ant-progress-text {
      display: none;
    }
  }
`;
