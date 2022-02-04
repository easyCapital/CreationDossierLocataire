import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Checkbox, Steps} from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import FirstForm from "./FirstForm";
import ThirdForm from "./ThirdForm";
import RevenuesForm from "./RevenuesForm";
import GarantForm from "./GarantForm copy";

export default function SecondForm({formInput, setFormInput, current}) {

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
  
  function getForm(index){
    return <>
      {display == 1 && <FirstForm formInput={formInput} setFormInput={setFormInput}  current={index}/>}
      {display == 2 && <RevenuesForm formInput={formInput} setFormInput={setFormInput} current={index}/>}
      {display == 3 && <GarantForm formInput={formInput} setFormInput={setFormInput} current={index}/>}
      {display == 4 && <ThirdForm formInput={formInput} setFormInput={setFormInput}  current={index}/>}
    </>;

  }
  function showGarant(index){
           return (<>
            <Steps current={display-1} >
            <Step title="Mon projet" onClick={() => setDisplay(1)}/>
            <Step title="Mes revenus" onClick={() => setDisplay(2)}/>
            <Step title="Les personnes que je garanti" onClick={() => setDisplay(3)}/> 
            <Step title="Mes justificatifs" onClick={() => setDisplay(4)}/>
          </Steps>
          <br/>
          {console.log("SecondForm: " + index)}
          {getForm(index)}
          </>)
  }
  
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
      {formInput[current] && formInput[current].garant.includes("J’ai une personne physique") && showGarant(current + '_garant')}

    </div>
      
  );
}
