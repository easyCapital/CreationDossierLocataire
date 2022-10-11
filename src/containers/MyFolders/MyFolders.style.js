import styled, { keyframes } from "styled-components";
import { tada } from "react-animations";
import { blue, lightblue } from "../../styles/variables.style";

const activeAnimation = keyframes`${tada}`;

export const MyFoldersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;

  h1 {
    text-align: center;
    font-size: 40px;
    margin-top: 40px;
  }
  h1.myFolders {
    color: ${blue};
  }

  .foldersList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80vw;
  }

  .foldersWrapper {
    width: 100%;
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
        margin: 0 -2px;
        &:hover {
          color: lightgrey;
        }
      }
    }

    .linkingBtn {
      position: relative;
      top: -50px;
      animation: 2s ${activeAnimation} infinite;
      svg {
        color: white;
        font-size: 40px;
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
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
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

  @media (max-width: 1024px) {
    padding: 80px 3%;
    padding-bottom: 0px;
    h1 {
      font-size: 24px;
    }
    .cardsWrapper {
      flex-direction: column;
      .card {
        margin-bottom: 10px;
      }
    }
    .carouselWrapper {
      > div:last-child {
        margin: 0px;
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }

  .carouselWrapper {
    width: 60%;

    @media (max-width: 900px) {
      width: 100%;
    }
  }

  .carouselInfos {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: start;

    @media (max-width: 1374px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .infosWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .advertsTableWrapper {
    width: 100%;
  }

  .disabled {
    opacity: 50%;

    path {
      color: #cdcdcd;
    }
  }
  .cancelFolderLinkingBtn {
    margin: 5px 0;
  }
`;
