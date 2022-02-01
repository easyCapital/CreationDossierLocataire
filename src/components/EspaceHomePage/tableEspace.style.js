import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const TableEspaceWrapper = styled.div`
  .ant-table-tbody {
    tr:nth-child(1),
    tr:nth-child(6) {
      td:nth-child(1) {
        background-color: #f3c19d;
        .ligne {
          display: flex;
          flex-wrap: wrap;
          .btn {
            margin-left: auto;
            .ant-btn {
              border-radius: 20px;
            }
          }
        }
      }
    }
  }

  .ant-pagination {
    display: none;
  }

  @media (max-width: 800px) {
    .ant-table-tbody {
      tr:nth-child(1),
      tr:nth-child(6) {
        td:nth-child(1) {
          background-color: #f3c19d;
          padding-left: 0;
          padding-right: 0;
          span {
            margin-left: auto;
            margin-right: auto;
          }
          .btn {
            margin-left: auto !important;
            margin-right: auto;
          }
        }
      }
      tr {
        td:nth-child(2),
        td:nth-child(3),
        td:nth-child(4),
        td:nth-child(5) {
          padding-left: 0px;
          padding-right: 0px;
          text-align: center;
          max-width: 40px;
        }
      }
    }
    tr {
      th {
        text-align: center;
        padding-left: 0px;
        padding-right: 0px;
        width:40px;
      }
    }
  }
`;
