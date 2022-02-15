import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Checkbox, Steps} from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import FirstForm from "./FirstForm";
import ThirdForm from "./ThirdForm";
import RevenuesForm from "./RevenuesForm";
import GarantForm from "./GarantForm";

export default function SecondForm({
  current,
  data,
  setFormData,
  setCurrentData,
}) {

  function onChange(values){
    setCurrentData('garant', values)
  }

  const options = [
    { label: 'Caution Bancaire', value: 'Caution Bancaire' },
    { label: 'Personne physique', value: 'Personne physique' },
    { label: 'VISALE', value: 'VISALE' },
    { label: 'Locapass', value: 'Locapass' },
    { label: 'Garant payant', value: 'Garant Payant' },
  ];
  
  return (
    <div>
      <Form.Item
      label="Possibilités de garants"
      name={'garant_' + current}
      hasFeedback
      className="garant_select"
      rules={[
        {
          required: true,
          message: "Veuillez renseigner vos possibilité de garant.",
        },
      ]}
      >
      <Checkbox.Group options={options} onChange={onChange} />
      </Form.Item>
    </div>
      
  );
}
