import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10%;
  position: sticky;
  height: 80px;

  .left {
    display: flex;
    align-items: center;

    .logoImage:hover {
      cursor: pointer;
    }
    .btn_login button {
      background-color: #005fc3;
    }
  }
  .simple {
    padding: 0px;
    font-weight: bold;
    margin-left: 20px;
    border: none;
    background: none;
    color: black;
    &:hover {
      font-style: italic;
      border-bottom: solid;
    }
  }

  .logoImage_start {
    width: 220px;
    margin-left: -16%;
    padding-right: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  
  @media (max-width: 800px) {
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    .am-navbar {
      background-color: unset;
      svg {
        color: black;
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
