import "aos/dist/aos.css";
import { Form, Checkbox} from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import FirstForm from "./FirstForm";

export default function SecondForm({formInput, setFormInput, current}) {

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
      {formInput[current] != null && formInput[current].garant != null && formInput[current].garant.includes('J’ai une personne physique') 
      && <FirstForm formInput={formInput} setFormInput={setFormInput}  current={current  + "_garant"}/>}

    </div>
      
  );
}
