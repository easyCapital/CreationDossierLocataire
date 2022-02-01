import { useState } from "react";
import { Button, Steps, Checkbox, Progress } from "antd";
import { useMediaQuery } from "react-responsive";
import { Form, Input, Select, DatePicker } from "antd";
import "antd/dist/antd.css";
import { List } from "antd";
import { default as MySelect } from "../../../components/global/Select/select";
import { default as MyInputN } from "../../../components/global/InputN/inputN";
import { HiInformationCircle } from "react-icons/hi";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Spin, Space } from "antd";

export default function Step7Form(props) {
  const {} = props;

  return (
    <div className="step7">
      <div className="title">Ma trésorerie</div>
      <div>
        Chez Easy Capital nous vous accompagnons tout au long de vos projets
        pour vous garantir une optimisation idéal de vos investissements. AU
        sein de notre cabinet, des experts sont là pour vous conseiller de la
        recherche de votre bien à la gestion locative tout en passant par la
        gestion de votre patrimoine.
        <br /> <br /> Afin de vous apporter le conseil le plus efficace, nous
        avons de deux informations supplémentaires. <br />
      </div>
      <Form.Item name="field34" label="Vous surveillez les annonces à ">
        <MySelect>
          <Select.Option value="Bordeaux">Bordeaux</Select.Option>
          <Select.Option value="Talence">Talence</Select.Option>
          <Select.Option value="Pessac">Pessac</Select.Option>
        </MySelect>
      </Form.Item>

      <div>
        Je souhaite reçevoir mon récapitulatif à l'adresse mail suivante :
        <Input placeholder="exemple@exemple.com" />
      </div>

    </div>
  );
}
