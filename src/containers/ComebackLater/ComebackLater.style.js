import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const ComebackLaterWrapper = styled.div`
  padding-top: 300px;
  padding-bottom: 350px;
  background:white;
  .titre {
    #manque{
      font-weight:bold;
      color:#FFA400;
      font-size:40px;
    }

    text-align: center;
    font-size:25px;
    margin-bottom:30px;
    margin-left:20%;
    margin-right:20%;
  }
  .ant-input {
    width: 20%;
    margin-bottom:30px;
    margin-left:40%;
  }
  .ant-btn{
      margin-left:44%;
      font-size:25px;
      padding:10px;
      height:50px;
  }

  @media (max-width: 800px) {
  }
`;
