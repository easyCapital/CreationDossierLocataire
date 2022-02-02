import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Radio, Space, Form, Checkbox} from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import update from "react-addons-update";

export default function SecondForm({formInput, setFormInput}) {

  const [selected, setSelected] = useState({});

  function onChange(value){
    setSelected({...selected, value:selected[value]}==false ? true : false);
    console.log(selected[value]);
  }

  function update(){
    setFormInput({...formInput, garant:selected})
  }

  const options = [
    { label: 'Je n’ai en ai pas', value: 'Je n’ai en ai pas' },
    { label: 'J’ai une personne physique', value: 'J’ai une personne physique' },
    { label: 'VISALE', value: 'VISALE' },
    { label: 'Autre', value: 'Autre' },
  ];

  return (
    <div><Form.Item
      label="Possibilités de garants"
      name="garant"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Veuillez renseigner vos possibilité de garant.",
        },
      ]}
      >
      <Checkbox.Group options={formInput.options} onChange={onChange} />
      </Form.Item> 
       {/* 
      <Radio.Group onChange={onChange} value={formInput.garant}>
        <Space direction="vertical">
          <Radio value={"Je n’ai en ai pas"}>Je n’ai en ai pas</Radio>
          <Radio value={"J’ai une personne physique"}>J’ai une personne physique</Radio>
          <Radio value={"VISALE"}>VISALE</Radio>
        </Space>
      </Radio.Group>
      */}
    </div>
  );
}
