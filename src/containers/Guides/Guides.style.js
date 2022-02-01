import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const GuidesWrapper = styled.div`
  .App {
    margin-top: 200px;
  }
  > div {
    padding-right: 15%;
    padding-left: 15%;
  }
  .barre {
    display: flex;
    margin-bottom: 50px;
    margin-top: 50px;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .btn_haut {
      font-size: 25px;
      color: #516170;
      padding-left: 1%;
      height: 45px;
      border-radius: 30px;
      background: #4ca6e2;
      color: white;
      &:hover {
        font-weight: normal !important;
        font-style: italic;
      }
    }
  }
  .rechercheTags {
    display: flex;
    font-size: 20px;

    .rechercheText {
      margin-right: 5%;
    }
    .btns_tag {
      width: 16%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
      .btn_tag {
        border-radius: 20px;
        background: #788896;
        color: white;
      }
    }
    .ant-checkbox-group {
      flex-direction: row;
      display: flex;
      flex-wrap: wrap;
    }
  }
  .ant-checkbox-group {
    flex-wrap: nowrap;
  }

  .ligne {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 50px;
    .article {
      flex: 1;
    }
  }
  @media (max-width: 800px) {
    > div {
      padding-right: 3%;
      padding-left: 3%;
    }
    .barre {
      .btn_haut {
        height: 30px;
        font-size: 20px;
      }
    }
    .rechercheTags {
      flex-direction: column;
      .btns_tag {
        margin-left:auto;
        margin-right:auto;
        .ant-checkbox-group {
          flex-direction: row;
        }
      }
    }
  }
`;
