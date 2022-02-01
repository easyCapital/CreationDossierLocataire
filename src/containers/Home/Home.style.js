import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const HomeWrapper = styled.div`
  margin-top: 150px;
  position: relative;

  margin-left: 10%;
  margin-right: 10%;

  #followMyConformityBtnWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    .ant-btn {
      font-size: 36px;
      padding: 40px;
    }
  }

  > h1 {
    font-weight: bold;
  }

  p {
    font-size: 24px;
  }

  .main {
    width: 100%;
    > div {
      padding-right: 15%;
      padding-left: 15%;

      &:nth-child(even) {
        background: white;
      }
    }
  }

  ${
    "" /* strong {
    font-weight: unset;
  } */
  }

  .textG {
    margin-bottom: 85px;
    display: flex;
    flex-wrap: wrap;
    min-height: 740px;
    .txtGray {
      color: #343a58;
      padding-top: 3%;
      font-size: 20px;
    }
    .middle_text {
      flex: 1;
      width: 100%;
      h1 {
        margin-bottom: 10px;
        color: #101820;
        &:first-line {
          color: #ffa400;
        }
      }

      .p_text {
        text-align: left;
        font-size: 46px;
        color: black;
        font-weight: bold;
        margin-bottom: 0px;
      }
    }
    .tableImage {
      align-items: center;
      flex: 1;
      justify-content: flex-end;
      width: 100%;
      .img_header_fixe {
        position: relative;
        width: 100%;
      }
      .img_header_dyn_gauche {
        position: absolute;
        right: 37.5%;
        top: 4%;
        border-radius: 20px;
        box-shadow: 5px 5px 5px #dbddf1;
        -webkit-animation: 1.3s linear 0s infinite alternate move_eye;
        animation: 1.3s linear 0s infinite alternate move_eye;
        border-radius: 20px;
      }
      .img_header_dyn_droite {
        position: absolute;
        right: 15%;
        top: 5%;
        border-radius: 20px;
        box-shadow: 5px 5px 5px #dbddf1;
        -webkit-animation: 1.5s linear 0s infinite alternate move_eye;
        animation: 1.5s linear 0s infinite alternate move_eye;
        border-radius: 20px;
      }
    }
  }

  ul {
    margin-bottom: 0px;
  }

  .begin {
    padding-top: 6%;
    display: flex;
    flex-wrap: wrap;
    Button {
      height: 45px;
      margin-right: 10px;
      border: none;
      border-radius: 5px;
      flex: 1;
      &:hover {
        font-style: italic;
        font-weight: normal;
      }
    }

    .bl {
      color: white;
      background-color: #4ca6e2;

      font-size: 17px;
    }
    .btn_header {
      background: #ebecee !important;
      font-size: 17px !important;
      margin-bottom: 10px;
      &:hover {
        color: #4ca6e2;
      }
    }
  }

  .ant-menu-title-content:hover {
    font-weight: bold;
  }

  .text_fonction {
    flex: 3;
  }

  .ant-btn ant-btn-Primary bl {
    font-size: 20px;
  }

  .footer {
    min-height: 50px;

    display: flex;
    justify-content: center;

    align-items: center;
  }

  #footer_img {
    margin-top: 20px;
    flex: 1;
    max-width: 270px;
    padding-right: 45px;
    padding-left: 45px;
  }

  .elemCoche {
    margin-top: 30px;
    display: inline-block;
    font-size: 17px;
    text-align: center;
  }
  .title a {
    color: #0070f3;
    text-decoration: none;
  }
  .fin {
    padding-top: 40px;
    padding-bottom: 20px;
    color: grey;
    align: left;
    text-align: center;
    background: white !important;
  }

  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
  }

  #checkbox {
    width: 1.9%;
    color: #4ca6e2;
  }

  #yellowstar {
    width: 10%;
    height: 50px;
    padding-top: 10px;
    color: #ffa400;
  }

  .section_steps {
    display: flex;
    padding-top: 100px;
  }
  .steps {
    margin-left: 5%;
    flex: 1;
  }

  .steps_gauche {
    flex: 1;
    margin-top: -25px;
    max-width: 550px;
  }
  .images_superpose {
    position: relative;
    top: 0;
    left: 0;
  }

  .img_fixe {
    position: relative;
    top: 0;
    left: 0;
    border-radius: 30px;
    width: 100%;
  }

  .img_bouge {
    position: absolute;
    top: 370px;
    left: 270px;
    box-shadow: 5px 5px 5px #dbddf1;
    -webkit-animation: 1.5s linear 0s infinite alternate move_eye;
    animation: 1.5s linear 0s infinite alternate move_eye;
    border-radius: 20px;
  }
  @-webkit-keyframes move_eye {
    from {
      margin-top: -1.5%;
    }
    to {
      margin-bottom: 0%;
    }
  }
  @keyframes move_eye {
    from {
      margin-top: -1.5%;
    }
    to {
      margin-bottom: 0%;
    }
  }

  .titre_steps {
    font-size: 38px;
    font-weight: bold;
    margin-left: 30%;
    margin-top: 50px;
    padding-top: 80px;
  }

  .text_steps {
    color: #8e9bac;
    font-size: 20px;
    max-width: 70%;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .btn_steps {
    border-radius: 30px;
    background: #ffa400;
    width: 65%;
    height: 50px;
    font-size: 25px;
  }

  .steps {
    flex: 1;

    padding-bottom: 220px;
    .ant-steps-item-wait
      > .ant-steps-item-container
      > .ant-steps-item-content
      > .ant-steps-item-title {
      font-weight: bold;
      font-size: 25px;
      color: #333d4d;
      margin-bottom: 10px;
    }
    .ant-steps-item-description {
      font-size: 18px;
    }

    .ant-steps-item-content {
      margin-left: 10%;
    }

    .ant-steps-item-wait
      > .ant-steps-item-container
      > .ant-steps-item-content
      > .ant-steps-item-description {
      color: #718096;
    }

    .ant-steps-item-wait .ant-steps-item-icon {
      background-color: #ffa400;
      height: 45px;
      width: 45px;
    }
    .ant-steps-icon {
      color: white !important;

      font-size: 25px;
      position: relative;
      top: 9px;
    }

    .ant-steps-vertical
      > .ant-steps-item
      > .ant-steps-item-container
      > .ant-steps-item-tail {
      left: 22px;
      margin-top: 7px;
      top: 18px;
      height: 100px;
      width: 5px;
    }

    .ant-steps-item-container {
      padding-bottom: 23px;
    }

    .ant-steps-item-wait
      > .ant-steps-item-container
      > .ant-steps-item-tail::after {
      background-color: #ced5df;
    }
  }

  .ant-progress-text {
    color: #225292;
    font-weight: bold;
  }

  .ant-progress-inner:not(.ant-progress-circle-gradient)
    .ant-progress-circle-path {
    stroke: #225292;
  }

  .section_metier_wrapper {
    position: relative;
    .&:after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.3;
      background: url(https://res.cloudinary.com/easycapital/image/upload/v1624960716/espace_client/rw1ebub1neb9logmhunz.svg)
        no-repeat center center;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-size: 45%;
    }

    #cercle_vert {
      width: 35px;
      height: 35px;
      border-radius: 20px;
      background: #2cc84d;
      position: absolute;
      top: 25%;
      left: 62%;
      opacity: 0.3;
    }
    #cercle_noir {
      width: 35px;
      height: 35px;
      border-radius: 20px;
      background: #101820;
      position: absolute;
      top: 20%;
      left: 50%;
      opacity: 0.3;
    }
    #cercle_jaune {
      width: 35px;
      height: 35px;
      border-radius: 20px;
      background: #ffa400;
      position: absolute;
      top: 21%;
      left: 40%;
      opacity: 0.3;
    }
    #cercle_bleu {
      width: 35px;
      height: 35px;
      border-radius: 20px;
      background: #4ca6e2;
      position: absolute;
      top: 25%;
      left: 32%;
      opacity: 0.3;
    }

    .titre_metiers_orange {
      font-weight: bold;
      font-size: 38px;
      text-align: center;
      margin-top: 20px;
      color: #4ca6e2;
    }
    .section_metiers {
      position: relative;
      margin-top: 100px;
      margin-bottom: 100px;
      color: #2f2f57;
      display: flex;

      .metiers_col1 {
        text-overflow: ellipsis;
        flex: 1;
        max-width: 20%;
        margin-left: 15%;
      }
      .metiers_col2 {
        flex: 1;
        max-width: 30%;
        .img_metiers {
          border-radius: 30px;
          width: 100%;
        }
      }
      .metiers_col3 {
        flex: 1;
        max-width: 20%;
        padding-left: 1%;
      }

      .bloc_metier_left {
        text-align: right;
        margin-right: 8%;
        margin-right: 8%;
      }
      .bloc_metier_middle {
        width: 80%;
        text-align: justify;
      }
      .metier_titre_left {
        color: #2d3748;
        text-overflow: clip;
        font-weight: bold;
        padding-top: 60px;
        font-size: 28px;
      }
      .metier_titre_right {
        color: #2d3748;
        font-weight: bold;
        padding-top: 60px;
        font-size: 28px;
      }
      .metier_titre_middle {
        color: #2d3748;
        font-weight: bold;
        font-size: 28px;
        text-align: center;
        margin-top: 20px;
      }
    }
  }

  .ant-carousel {
    margin-top: 100px;
    max-width: 1400px;
  }

  .style_carousel {
    height: "600px";
    color: black;
    lineheight: "50px";
    textalign: "center";
    background: "white";
    border-radius: "30px";
  }

  .petit_titre {
    text-align: center;
    margin-top: 150px;
    font-weight: bold;
    font-size: 25px;
    color: #929aa7;
  }

  .petit_titre_blog {
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    color: #929aa7;
  }

  .titre_carousel {
    font-size: 55px;
    text-align: center;
    margin-top: 20px;

    font-weight: bold;
    color: #ffa400;
  }

  .carousel1 .slick-dots li.slick-active button {
    background: white;
    border-radius: 10px;
  }

  .carousel1 .slick-dots li button {
    background: white;
    border-radius: 10px;
  }

  .titre_carousel1 {
    color: #ffa400;
    padding-top: 60px;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 0;
  }
  .titre_carousel2 {
    color: #101820;
    font-weight: bold;
    font-size: 40px;
  }

  .titrePageCarousel {
    margin-top: 60px;
    font-weight: bold;
    font-size: 35px;
    color: #101820;
    &:first-line {
      color: #ffa400;
    }
  }

  .Carousel {
    height: 1000px;
  }
  .carousel1 {
    padding-bottom: 200px;
  }

  .page_carousel {
    display: flex;
    img {
      width: 100%;
      height: 100%;
    }
    .page_carousel_droite {
      flex: 1;
    }
    .page_carousel_gauche {
      padding-top: 60px;
      padding-left: 10%;
      flex: 1;
    }
  }
  .text_carousel {
    color: #718096;
    font-size: 18px;
  }

  .slick-dots slick-dots-top {
    magin-right: 0px;
  }
  .carousel1 .slick-dots li button {
    width: 250px;
    height: 90px;
  }

  .ant-carousel .slick-dots li.slick-active {
    color: #1890ff;
    font-weight: bold;
  }

  .carousel1 .slick-dots li button {
    height: 70px;
    width: 300px;
    margin-right: 50%;
  }

  .ant-tabs-tab-btn {
    font-size: 17px;
    font-weight: bold;
  }

  .titre_faq {
    margin-left: auto;
    margin-right: auto;
    padding-top: 150px;
    font-weight: bold;
    font-size: 35px;
    #weAre {
      color: #ffa400;
      text-align: center;
      margin: 0;
      font-weight: bold;
      font-size: 32px;
    }

    #Freq {
      text-align: center;
      color: #101820;
      font-weight: bold;
      font-size: 38px;
    }
  }

  .ant-collapse-header {
    font-weight: bold;
    font-size: 20px;
  }

  .ant-collapse-content-box {
    color: #718096;
    font-weight: bold;
  }

  .collapse {
    padding-top: 80px;
    padding-bottom: 50px;
    max-width: 70%;
    margin-left: 15%;
    border-radius: 30px;
  }
  .ant-collapse ant-collapse-icon-position-left {
    border-radius: 30px;
  }

  .blog {
    display: flex;
    padding-bottom: 250px;
    padding-top: 80px;
    flex-wrap: wrap;
  }

  .article {
    border-radius: 30px;
  }

  .ant-card ant-card-bordered ant-card-hoverable {
    width: 400px;
  }

  .ant-card-meta-description {
    line-height: 26px;
  }

  .ant-card-meta-title {
    font-weight: bold;
    font-size: 23px;
  }

  .titre_blog {
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: #4ca6e2;
  }

  .blog > div {
    flex: 1;
  }

  .titre_footer {
    font-weight: bold;
  }

  .ant-card-head-title {
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
  .side-card-wrapper {
    padding-bottom: 50px;
    justify-content: center;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;
  }

  @media (max-width: 800px) {
    margin-top: 50px;
    .main {
      > div {
        padding-right: 3% !important;
        padding-left: 3% !important;
      }
    }

    .textG {
      flex-direction: column;
      padding-left: 3% !important;
      padding-right: 3% !important;

      background: linear-gradient(to bottom, transparent, white),
        url("https://res.cloudinary.com/easycapital/image/upload/v1624960716/espace_client/rw1ebub1neb9logmhunz.svg");
      .middle_text {
        .p_text {
          font-size: 40px;
        }
        .begin {
          .btn_header {
            max-width: 335px;
          }
        }
      }
    }
    .footer {
      flex-direction: column;
    }
    .petit_titre {
      margin-top: 30px;
    }
    .section_steps {
      flex-direction: column;
      .steps {
        padding-bottom: 0;
        margin-bottom: 50px;
      }
    }
    .tableImage {
      display: none;
      .img_header_dyn_gauche {
        right: 65% !important;
        top: 8.5% !important;
        width: 100px;
      }
      .img_header_dyn_droite {
        top: 9% !important;
        width: 100px;
      }
    }
    .img_bouge {
      top: 240px !important;
      left: 150px;
      width: 190px;
    }
    .titre_steps {
      margin: 0;
      margin-top: 50px;
      text-align: center;
    }

    .section_Metiers {
      .petit_titre {
        margin-top: 0px;
      }

      .titre_metiers_orange {
        font-size: 35px;
        position: -webkit-sticky;
        position: sticky;
        top: 70px;
        margin-bottom: 20px;
        z-index: 900;
        background-color: #f5f7fa;
        transition: top 0.6s;
      }

      .section_metiers {
        flex-direction: column;
        margin-top: 0;
        .metiers_col1 {
          max-width: 100%;
          margin-bottom: 40px !important;
          > div {
            text-align: center;
          }
        }
        .metiers_col2 {
          max-width: 100%;
          .img_metiers {
            display: none;
          }
          > div {
            text-align: center;
          }
        }
        .metiers_col3 {
          max-width: 100%;
          margin-left: 0;
          > div {
            text-align: center;
          }
        }
        .metiers_col1 {
          margin: 0;
        }
        .metier_titre_left {
          margin-left: 0;
        }
        .bloc_metier_middle {
          width: 100%;
        }
      }
    }
    //faq
    .titre_faq {
      padding-top: 0;
    }
    .collapse {
      margin: 0;
      margin-left: 3%;
      margin-right: 3%;
      max-width: 100%;
    }
    .blog {
      padding-bottom: 50px;
    }
    .titre_blog {
      font-size: 35px;
    }
    #weAre {
      font-size: 30px;
    }
    #Freq {
      font-size: 40px !important;
    }
    //carousel
    .titre_carousel {
      font-size: 33px;
    }
    .ant-tabs {
      img {
        width: 100%;
      }
      .page_carousel {
        flex-direction: column;
        .titre_carousel1 {
          padding-top: 20px;
          margin: 0;
        }
      }
    }
  }
`;
