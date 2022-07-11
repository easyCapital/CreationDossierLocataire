import styled from "styled-components";
import { blue } from "../../../styles/variables.style";

export const FooterWrapper = styled.div`
  padding: 20px 100px;
  margin-top: auto;
  width: 100%;
  img {
    height: 50px;
  }
  .ant-divider {
    margin: 10px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      a {
        margin: 0px;
        margin-left: 10px;
        color: black;
        &:hover {
          color: ${blue};
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 10px 5%;
    text-align: center;
    .top {
      justify-content: center;
    }
    .bottom,
    .bottom > div {
      justify-content: center;
      flex-direction: column;
    }
  }
`;
