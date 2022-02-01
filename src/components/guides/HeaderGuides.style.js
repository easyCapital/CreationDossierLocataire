import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const HeaderGuidesWrapper = styled.div`
  background: #f7f9fa;
  display: flex;
  padding-top:200px;
  flex-wrap: wrap;

  .gauche {
      flex:3;
    .date {
        font-size:20px;
    }
    .title {
      font-size: 30px;
    }
    .author {
        color:#798997;
        font-size:20px;
    }
    .btn{
        background:#2CC84D;
        border-radius:10px;
        position:relative;
        left:60%;
        top:8%;
        width:180px;
        height:40px;
        font-size:20px;
        color:white;
        &:hover{
            color: white;
        }
    }
  }
  .img{
      flex:1;
      max-width:450px;
      height:250px;
      margin-bottom:40px;
  }
  @media (max-width: 800px) {
    .gauche{
      .btn{
        left:27%;
      }
    }
  }
`;
