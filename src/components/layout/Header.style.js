import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const HeaderWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  position: sticky;
  padding-left: 10%;
  padding-right: 5%;
  position: sticky;

  > div {
    flex: 1;
  }

  .barre {
    display: flex;
    .ant-btn {
      margin-left: 30px;
      font-size: 17px;
      font-weight: bold;

      &:hover {
        font-style: italic;
      }
      a {
        display: flex;
      }
      .numberCircle {
        border-radius: 50%;
        width: 28px;
        height: 28px;
        color: #ffa400;
        border-color: #ffa400;
        background: #fff;
        border: 2px solid;
        margin-left: 10px;
        text-align: center;
        font: 20px Arial, sans-serif;
      }

      svg {
        vertical-align: top;
        margin-left: 10px;
        padding-top: 2px;
        height: 25px;
        width: 25px;
        color: #ffa400;
      }
    }
  }

  .push {
    display: flex;
    margin-right: 10%;
    justify-content: flex-end;
    .Button {
      border: none;
      border-radius: 7px;
      font-size: 17px;
    }
    .profilPic {
      margin-left: 20px;
      height: 50%;
      border-radius: 30px;
    }
    .profil {
      margin-right: 20px;
      border-radius: 30px;
    }
  }

  .button {
    padding: 0;
    border: none;
    background: none;
    color: black;
    ${"" /* box-shadow: 0px 2px 2px #f5f5f5; */}

    &:hover {
      border-radius: 0px;
      border-bottom: solid;
    }
  }

  .logoImage {
    width: 220px;
    padding-right: 20px;
    margin-bottom: 50px;
    margin-left: 50px;
  }
  .logoImage:hover {
    cursor: pointer;
  }

  .bleu {
    color: white;
    background-color: #4ca6e2;
    width: 250px;
    margin-left: 10%;
    border-radius: 20px;
    border-width: 0px;
  }

  #btn1 {
    font-weight: bold;
  }

  #logoImage {
    margin-right: 50px;
    width: 150px;
  }
  .test {
    vertical-align: bottom;
  }
  //step
  .logoImage_start {
    width: 220px;
    margin-left: -16%;
    padding-right: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  .revenir {
    margin-left: 55%;
    border: 0px;

    svg {
      width: 50px;
      height: 20px;
      flex: 1;
    }
    .ligne {
      display: flex;
    }
    span {
      flex: 3;
    }
    &:hover {
      font-weight: normal;
    }
  }
  .besoin {
    margin-left: 5%;
    border: 0px;
    svg {
      width: 50px;
      height: 20px;
      flex: 1;
    }
    .ligne {
      display: flex;
    }
    span {
      flex: 3;
    }
    &:hover {
      font-weight: normal;
    }
  }
  //login
  .modal-body {
    display: flex;
    .gauche {
      flex: 2;
    }
    .droite {
      flex: 1;
    }
  }

  //version mobile
  @media (max-width: 800px) {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    .am-navbar{
      background-color:unset;
      svg{
        color:black;
      }
    }

    .ligne {
      display: flex;
      .logoImage {
        flex: 1;
        max-height: 70px;
        max-width: 250px;
        padding-right: 0;
      }
      .menu {
        flex: 1;
        position: relative;
        top: -8px;
        width: 100%;
        svg {
          width: 50%;
          height: 50%;
          position: relative;
          left: 32%;
        }
      }
      .my-drawer {
        position: relative;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
      .my-drawer .am-drawer-sidebar {
        background-color: #fff;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
      .my-drawer .am-drawer-sidebar .am-list {
        width: 300px;
        padding: 0;
      }
      .am-navbar {
        height: 82px;
        .am-navbar-right {
          display: none;
        }
        .am-navbar-title {
          .iconMenu {
            width: 100%;
            height: 100%;
            svg {
              margin-top: 13px;
              margin-right: 25px;
              width: 70%;
              height: 70%;
            }
          }
        }
      }
      .am-list-item {
        margin-bottom: 20px;
        .am-list-content {
          position: absolute;
          left: 30%;

          .ant-btn {
            font-size: 20px;
            width: 100px;
          }
        }
      }
      .btnBottom {
        margin-top: 59%;
        .btnBottom1 {
          .am-list-content {
            position: absolute;
            left: 12%;
            .ant-btn {
              width: 200px;
            }
          }
        }
        .btnBottom2 {
          background: #ffa400;
          .am-list-content {
            position: absolute;
            left: -4%;
            .ant-btn {
              width: 300px;
            }
          }
        }
      }
    }
  }
`;
