import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Checkbox, Steps} from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import FirstForm from "./FirstForm";
import ThirdForm from "./ThirdForm";
import RevenuesForm from "./RevenuesForm";

export default function GarantForm({formInput, setFormInput, current}) {

  const [display, setDisplay] = useState(1);
  const { Step } = Steps;

  function onChange(values){
    setFormInput((formInput) => {
      if(!formInput[current]) formInput[current] = {};
      formInput[current].garant = values;
      return {...formInput};
    })
  }

  const options = [
    { label: 'Je n’ai en ai pas', value: 'Je n’ai en ai pas' },
    { label: 'J’ai une personne physique', value: 'J’ai une personne physique' },
    { label: 'VISALE', value: 'VISALE' },
    { label: 'Autre', value: 'Autre' },
  ];
  
  
  return (
    <div>
      <Form.Item
      label="Possibilités de garants"
      name={'garant_' + current}
      hasFeedback
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
