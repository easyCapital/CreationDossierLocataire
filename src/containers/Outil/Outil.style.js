import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const OutilWrapper = styled.div`
  margin-top: 150px;
  > div {
    padding-left: 15%;
    padding-right: 15%;
  }

  .relation {
    padding-left: 10% !important;
    padding-right: 10% !important;

    background: #80dd93;
    padding-top: 3.5%;
    padding-bottom: 3.5%;
    padding-left: 15%;
    padding-right: 15%;
    color: #c3cfd9;

    .title {
      text-align:center;
      font-size: 28px;
      margin-bottom: 20px;
      color: #101820;
      font-weight: bold;
    }
    .content {
      margin-bottom: 20px;
      font-size: 20px;
      color: #718096;
      text-align: justify;
      color: black;
    }
    .ant-btn{
      margin-top:50px;
      border-radius:20px;
      font-size:20px;
      padding:15px;
      height:50px;
      margin-left:auto;
      margin-right:auto;
      &:hover{
        color:black;
        border:0px;
      }
    }
  }
  @media (max-width: 800px) {
    > div {
      padding-left: 3%;
      padding-right: 3%;
    }
    .relation{
      padding-left:3% !important;
      padding-right:3% !important;
      .title{
        font-size:25px;
      }
      .content{
        padding-left:2%;
        padding-right:2%;
        font-size:20px;
      }
    }

  }
`;