import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const ArticleGuidesWrapper = styled.div`
  margin-left:1%;
  margin-right:1%;
  margin-bottom: 30px;
  .ligne1 {
    font-size: 18px;
    display: flex;

    .article_date {
      flex: 1;
    }
    .article_theme {
      flex: 1;
      font-weight: bold;
    }
  }
  .tags {
    display: flex;
    margin-bottom: 10px;

    > Button {
      background: #788896;
      border-radius: 20px;
      margin-right: 5%;
    }
    .Button {
      flex: 1;
      width: 50px;
    }
  }
  .title {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .content {
    color: #3e4c57;
  }
  @media (max-width: 800px) {
    max-width:380px;
    margin-left:0%;
  margin-right:0%;
    .img{
      max-width:335px !important;
      margin-right:auto;
      margin-left:auto;

    }
    >div{
      max-width:380px;
    }
  }
`;
