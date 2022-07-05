import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 20px 100px;
  bottom: 0;
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
      p {
        margin: 0px;
        margin-left: 10px;
      }
    }
  }
`;
