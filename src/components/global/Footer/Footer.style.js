import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const FooterWrapper = styled.div`
  background-color: #f6f7fa;
  padding-right: 0% !important;
  padding-left: 13% !important;
  .titre_footer {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
    margin-top: 15px;
  }
  .footer_ligne1 {
    display: flex;

    width: 100%;
    .col_footer_left {
      flex: 1;
      padding-top: 40px;
      padding-bottom: 50px;

      #logoImage {
        width: 57%;
      }
    }

    .col_footer_middle {
      flex: 1;
      padding-top: 20px;
      padding-bottom: 50px;
    }

    .col_footer_right {
      flex: 1;
      padding-top: 20px;
      padding-bottom: 50px;
      padding-left: 5%;
    }
  }
  .footer_ligne2 {
    display: flex;
    .footer_ligne2_gauche {
      flex: 2;
    }
    .footer_ligne2_droite {
      flex: 1;
      .footer_contact {
        margin-left: 5%;

        .reseaux {
          .iconFb {
            vertical-align: top;
            position: absolute;

            color: #3b5998;
            width: 30px;
            height: 30px;
            margin-top: 5px;
            &:hover {
              width: 35px;
              height: 35px;
            }
          }
          .iconLnkdIn {
            vertical-align: top;
            position: relative;
            left: 100px;
            color: #2867b2;
            width: 40px;
            height: 40px;
            padding-top: 2px;
            &:hover {
              width: 45px;
              height: 45px;
            }
          }
        }
      }
    }
  }
  .barre_footer {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  .footer_bas_bottom {
    text-align: center;
    margin-left: 15%;
    margin-right: 15%;
    display: flex;
    > div {
      flex: 1;
    }
  }
  @media (max-width: 800px) {
    padding-right: 0% !important;
    padding-left: 0% !important;

    .footer_ligne1 {
      flex-direction: column;
      #logoImage {
        margin-top: 20px;
      }
      > div {
        padding-left: 20px !important;
      }
      .col_footer_left {
        padding-top: 0px;
        padding-bottom: 20px;
      }
      .col_footer_middle {
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .col_footer_right {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .footer_ligne2 {
      flex-direction: column;
      > div {
        padding-left: 20px !important;
      }
      .footer_contact {
        margin-left: 0 !important;
        margin-bottom: 20px;

        .reseaux {
          margin-left: 27%;
        }
      }
      .footer_ligne2 {
        .titre_footer {
          a {
            font-size: 20px;
          }
        }
      }
    }
    .footer_bas_bottom {
      margin: 0;
      display: flex;
      flex-direction: column;
    }
  }
`;
