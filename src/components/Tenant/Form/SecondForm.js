import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Radio, Space, Form } from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";

export default function SecondForm({formInput, setFormInput}) {

  function onChange(value){
    setFormInput({...formInput, garant:value})
  }

  return (
    <div>
       <Form.Item
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
      <Radio.Group onChange={onChange} value={formInput.garant}>
        <Space direction="vertical">
          <Radio value={"Je n’ai en ai pas"}>Je n’ai en ai pas</Radio>
          <Radio value={"J’ai une personne physique"}>J’ai une personne physique</Radio>
          <Radio value={"VISALE"}>VISALE</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>  
    </div>
  );
}
