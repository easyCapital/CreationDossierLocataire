import styled from "styled-components";
import {
  blue,
  green,
  lightgreen,
  orange,
  yellow,
} from "../../styles/variables.style";

export const ConformiteWrapper = styled.div`
  padding-top: 200px;
  padding-bottom: 200px;
  margin-left: 10%;
  margin-right: 10%;

  .ant-collapse-item.isFinished {
    .ant-collapse-header {
      filter: grayscale(80%);
    }
  }

  .ant-collapse-header {
    display: flex;
    align-items: center !important;

    .ant-collapse-arrow svg {
      font-size: 30px;
    }
  }

  .notFirstOpportunity {
    .ant-collapse-header {
      .ant-collapse-arrow {
        margin-top: 45px;
      }
    }
  }

  .ant-divider {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .ant-collapse-header > div :nth-child(2) {
    width: 90%;
  }

  .opportunityHeaderWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-style: italic;
      display: flex;
      align-items: center;
      font-weight: bold;
      svg {
        margin-right: 5px;
      }
    }
    .opportunityType {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      flex: 1;

      h1,
      h2 {
        margin: 0px;
      }

      h2 {
        font-weight: bold;
        font-style: italic;
      }

      h1 {
        background-color: ${yellow};
        border-radius: 15px;
        padding: 5px;
        padding-left: 15px;
        padding-right: 15px;
        font-weight: bold;
        margin-right: 10px;
      }

      p {
        margin-bottom: 0px;
        margin-left: 15px;
      }
    }
    .opportunityInfo {
      flex: 2;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      svg {
        margin-right: 10px;
        min-width: 14px;
        min-height: 14px;
      }
      p {
        margin: 0px;
      }
    }
  }

  .conformityWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > svg {
      height: 30px;
      width: 40px;
    }
  }
  .ant-btn {
    color: white;

    svg {
      margin-right: 10px;
      font-size: 18px;
    }

    &.toWait {
      background: ${orange};
      border: 1px solid ${orange};
    }
    &.toSign {
      background: ${lightgreen};
      border: 1px solid ${lightgreen};
    }
    &.signed {
      background: ${green};
      border: 1px solid ${green};
    }
    &.toSee {
      background: ${blue};
      border: 1px solid ${blue};
    }
    &:hover {
      font-weight: normal;
      border: 1px solid white;
    }
  }
  .cursor {
    margin-top: 100px;
    position: relative;

    display: flex;
    flex-direction: column;
    max-width: 170px;
    p {
      margin: 0;
      color: #2cc84d;
    }

    svg {
      height: 50px;
      width: 50px;
      color: #4ca6e2;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .ant-slider {
    margin-left: 25%;
    margin-right: 25%;
    max-width: 40%;
    height: 50px;
    background: linear-gradient(to right, #4da600, yellow, red);
    border-radius: 30px;
    .ant-slider-rail {
      height: 50px;
      background-color: #11ffee00;
    }
    .ant-slider-track {
      background-color: #11ffee00;
      height: 50px;
    }
    .ant-slider-handle {
      height: 70px;
      width: 2px;
      border: solid 2px black;
    }
    .ant-slider-handle-1 {
      border: solid 2px #11ffee00;
      z-index: -5;
    }
  }
  .txtSlider {
    margin-left: 600px;
    margin-right: 600px;
    margin-top: 20px;
    font-size: 25px;
  }
  @media (max-width: 800px) {
  }
`;
