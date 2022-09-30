import styled from "styled-components";
export const AdvertsTableWrapper = styled.div`
  margin-bottom: 30px;
  position: relative;
  width: 80%;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: 559px;
  overflow-y: scroll;

  table {
    tbody {
      display: flex;
      flex-direction: column-reverse;
    }
    table-layout: fixed;
  }

  .ant-table-wrapper {
    width: 100%;
  }

  @media (max-width: 1374px) {
    width: 99%;
  }
  img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }

  .ant-table-row:last-child {
    border-top: 0;
  }

  .ant-table-row {
    display: flex;
    flex-direction: column;
    border-top: 1px solid grey;
    td {
      display: flex;
      justify-content: center;
    }
  }

  .url {
    overflow-wrap: anywhere;
  }

  .ant-table-row:last-child {
    border-bottom: none;
  }

  .actionsCell {
    width: 200px;
    display: flex;
    justify-content: space-around;
  }

  .addRowBtn {
    border-radius: 5px;
    margin: 10px;
  }

  .unableToSendText {
    text-decoration: Line-through;
  }

  .noData {
    margin: 10px;
  }
`;
