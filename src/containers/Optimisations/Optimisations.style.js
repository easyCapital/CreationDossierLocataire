import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const OptimisationsWrapper = styled.div`
  margin-top: 150px;
  .ant-input-affix-wrapper{
    width:30%;
    margin-left:35%

  }
  .filtredCards{
    min-height:100px;
    display:flex;
    .ant-btn{
      border-radius:20px;
    }
  }
  .ant-btn {
    height: 60px;
    font-size: 20px;

    margin-left: 50px;
    &:hover {
      font-weight: normal;
    }
  }
  .btnGauche {
    height: 100px;
    margin-right: 100px;
    &:hover{
      color:black;
      border-color:black;
    }
    &:focus{
      color:black;
      border-color:black;
    }
  }
  .sousCarteContainer{
    min-height:200px;
    .ant-btn{
      margin-bottom:20px;
      border-radius:20px;
    }
  }
  .immobilier {
    margin-top:50px;
    margin-bottom:100px;
    .ligne {
      display: flex;
    }
  }
  .financier {
    .ligne {
      display: flex;
    }
  }
  .sousCarte {
    margin-left: 200px;
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 800px) {
  }
`;
