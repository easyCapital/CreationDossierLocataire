import { Table, Button, Space } from "antd";
import { TableEspaceWrapper } from "./tableEspace.style";
import React, { Component } from "react";

const data = [
  {
    col1: (
      <div className="ligne">
        <span>Crédits</span>
        <div className="btn">
          <Button>Détails</Button>
        </div>
      </div>
    ),
  },
  {
    col1: "Taux d'endettement bancaire",
    2021: "35%",
    2022: "35%",
    2023: "32%",
    année: "15%",
  },
  {
    col1: "Reste à vivre",
    2021: "35%",
    2022: "35%",
    2023: "32%",
    année: "15%",
  },
  {
    col1: "Taux d'endettement différentiel",
    2021: "35%",
    2022: "35%",
    2023: "32%",
    année: "15%",
  },
  {
    col1: "Encours à rembourser",
    2021: "35%",
    2022: "35%",
    2023: "32%",
    année: "15%",
  },
  {
    col1: (
      <div className="ligne">
        <span>Impôts</span>
        <div className="btn">
          <Button>Détails</Button>
        </div>
      </div>
    ),
  },
  {
    col1: "Impôts sur le revenu",
    2021: "",
    2022: "",
    2023: "",
    année: "",
  },
  {
    col1: "Contribution sociales",
    2021: "",
    2022: "",
    2023: "",
    année: "",
  },
  {
    col1: "Impôts sur la fortune",
    2021: "",
    2022: "",
    2023: "",
    année: "",
  },
  {
    col1: "Impôts sur les sociétés",
    2021: "",
    2022: "",
    2023: "",
    année: "",
  },
  {
    col1: "Impôt succesion",
    2021: "",
    2022: "",
    2023: "",
    année: "",
  },
];

export default class App extends React.Component {
    
  render() {

    const columns = [
      {
        title: "",
        dataIndex: "col1",
        key: "name",
        ellipsis: true,
      },
      {
        title: "2021",
        dataIndex: "2021",
        key: "age",
        ellipsis: true,
      },
      {
        title: "2022",
        dataIndex: "2022",
        key: "address",
        ellipsis: true,
      },
      {
        title: "2023",
        dataIndex: "2023",
        key: "2023",
        ellipsis: true,
      },
      {
        title: "Année",
        dataIndex: "année",
        key: "année",
        ellipsis: true,
      },
    ];
    return (
      <TableEspaceWrapper>
        <Space style={{ marginBottom: 16 }}></Space>
        <Table
          columns={columns}
          dataSource={data}
        />
      </TableEspaceWrapper>
    );
  }
}
