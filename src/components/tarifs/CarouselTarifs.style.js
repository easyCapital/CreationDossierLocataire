import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const CarouselTarifsWrapper = styled.div`
  margin-top: 130px;
  margin-bottom: 220px;

  .ant-tabs-content-holder {
    background: #f7f9fa;
  }
  .ant-tabs-top > .ant-tabs-nav,
  .ant-tabs-bottom > .ant-tabs-nav,
  .ant-tabs-top > div > .ant-tabs-nav,
  .ant-tabs-bottom > div > .ant-tabs-nav {
    margin-bottom: 0px;
  }

  .title {
    font-weight: bold;
    font-size: 40px;
    color: #2cc84d;
    text-align: center;
    margin-bottom: 70px;
  }
  .titre {
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: #4ca6e2;
    margin-bottom: 20px;
    margin-top: 50px;
  }
  .page_carousel {
    display: flex;
    margin-left: 15%;
    margin-right: 15%;
    font-size: 17px;
    color: #68747e;
    background: #f7f9fa;
    h1,
    h2 {
      font-weight: bold;
    }

    .gauche {
      flex: 1;
      margin-right: 5%;
    }
    .droite {
      flex: 1;
    }
    .gestion {
      margin-left: auto;
      margin-right: auto;
    }
  }
  #text_center_droite {
    text-align: end;
  }
  @media (max-width: 800px) {
    .title {
      font-size: 25px;
      margin-bottom: 10px;
      padding-right: 0;
      padding-left: 0;
    }
    .ant-table-tbody{
      background:#F7F9FA;
    }
    .page_carousel{
      flex-direction: column;
      .ant-table-wrapper {
        margin-left: -30px;

        
      }
    }
  }
`;
