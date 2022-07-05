import styled from "styled-components";
import { blue, lightblue } from "../../styles/variables.style";

export const MyFoldersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  h1 {
    text-align: center;
    font-size: 40px;
    span {
      color: ${blue};
    }
  }

  .foldersList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80vw;
  }

  .create-folder {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${blue};
      font-size: 50px;
      cursor: pointer;
      &:hover {
        color: ${lightblue};
      }
    }
  }

  .cardsWrapper {
    display: flex;
    padding-top: 50px;
    .card {
      margin: 0px 20px;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${blue};
    width: 16rem;
    height: fit-content;
    padding: 0 2rem 2rem 2rem;
    border-radius: 10px;

    h2 {
      margin: 0;
      margin-top: 1rem;
      color: white;
      font-weight: bold;
    }

    p {
      margin: 0;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
      color: white;
    }

    .btns {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      svg {
        color: white;
        font-size: 40px;
        margin: 0 10px;
        cursor: pointer;
        &:hover {
          color: lightgrey;
        }
      }
    }

    .cardContent {
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .createFolder {
      svg {
        color: white;
        font-size: 50px;
        cursor: pointer;
        &:hover {
          color: lightgrey;
        }
      }
    }

    .avancement {
      margin-top: -20%;
      width: 200px;
      height: 200px;
      border-radius: 20px;
      background: white;
      border: 2px solid ${blue};
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ant-progress-text svg {
      color: ${blue};
      font-size: 50px;
      cursor: pointer;
      &:hover {
        font-size: 60px;
      }
    }

    .description {
      height: 150px;
      padding: 10px 0px;
      p {
        margin: 0px;
        font-size: 16px;
        line-height: 2.5;
      }
    }
  }
`;
