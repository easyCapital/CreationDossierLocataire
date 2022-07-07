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
    padding-right: 20px;
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    -webkit-transition: "none";
    -webkit-transition: "all 0.2s ease-out";
    -webkit-transform: "translate(XXpx, XXpx)";

    padding: 0px;
    background: linear-gradient(white, white, transparent) !important;
    width: 100vw;

    &.top.security {
      background: transparent !important;
      .iconMenu {
        color: white;
      }
    }
    &.scroll {
      background: linear-gradient(white, white, transparent) !important;
      .iconMenu {
        color: black;
      }
    }
    .am-navbar {
      background-color: unset;
      width: 100%;
      .am-navbar-title {
        display: flex;
        justify-content: flex-end;
        svg {
          color: black;
        }
      }
    }
    .logo > img {
      width: 30px;
    }
    .whiteLogo > img {
      width: 60px;
    }
    .logoImage {
      max-height: 70px;
      max-width: 250px;
    }
    .am-navbar {
      height: 70px;
      .am-navbar-right {
        display: none;
      }
      .am-navbar-title {
        svg {
          margin-top: -5px;
          margin-right: 25px;
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;
