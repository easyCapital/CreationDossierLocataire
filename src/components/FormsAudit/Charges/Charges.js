import { ChargesWrapper } from "./Charges.style";
import { Checkbox, Row, Col } from "antd";
import { useState, useEffect } from "react";
import { Select } from "antd";
import { DatePicker } from "antd";
import { Input } from "antd";

export default function Charges() {
  const [checkedValue, setCheckedValue] = useState([]);
  const CheckboxGroup = Checkbox.Group;
  const onChange = (list) => {
    setCheckedValue(list);
  };
  return (
    <ChargesWrapper>
      <div className="ligne1">
        <CheckboxGroup
          options={[
            "Loyer",
            "Amortissable",
            "In fine",
            "Relais",
            "Prêt à paliers",
          ]}
          value={checkedValue}
          onChange={onChange}
        />
        <Select placeholder="Banque">
          <Option value="">AXA</Option>
          <Option value="lucy">Banque française mutualiste</Option>
        </Select>
      </div>
      <div className="ligne2">
        <DatePicker placeholder="Date signature ODP" />
        <DatePicker placeholder="Date première mensualité" />
      </div>
      <div className="ligne3">
        <Input placeholder="Capital initial" />
        <Input placeholder="Capital restant" />
        <Input placeholder="Durée (mois)" />
        <Input placeholder="Taux HA" />
        <Input placeholder="Mensualité" />
        <Input placeholder="Libellé" />
      </div>
    </ChargesWrapper>
  );
}
