import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Button, Steps } from "antd";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import FirstForm from "./Form/FirstForm";
import SecondForm from "./Form/SecondForm";
import ThirdForm from "./Form/ThirdForm";
import EmployeeInput from "./Inputs/EmployeeInput"
import TnsInput from "./Inputs/TnsInput"
import StudentInput from "./Inputs/StudentInput"

export default function SignUp() {

    const [formInput, setFormInput] = useState({});
    const [display, setDisplay] = useState(0)
    const { Step } = Steps;

  const handleUserRegister = () => {
    if (display == 1){
      
    }
      setDisplay(display+1)
      console.log(formInput)
  };

  function prev(){
    setDisplay(display-1)
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 13 }}
      onFinish={handleUserRegister}
    >
       <Steps current={display} >
        <Step title="Fichier Locataire" onClick={() => setDisplay(0)}/>
        <Step title="Possibilités de garants" onClick={() => setDisplay(1)}/>
        <Step title="Dossier necéssaires" onClick={() => setDisplay(2)}/>
      </Steps>
      <br/>
      {display == 0 && <FirstForm formInput={formInput} setFormInput={setFormInput}/>}
      {display == 1 && <SecondForm formInput={formInput} setFormInput={setFormInput}/>}
      {display == 2 && <ThirdForm formInput={formInput} setFormInput={setFormInput}/>}

      {String(formInput.statut_s).startsWith("s") && display == 0 && <EmployeeInput  formInput={formInput} setFormInput={setFormInput}/>}
      {String(formInput.statut_s).startsWith("tns") && display == 0 && <TnsInput  formInput={formInput} setFormInput={setFormInput}/>}
      {String(formInput.statut_s).startsWith("e") && display == 0 && <StudentInput  formInput={formInput} setFormInput={setFormInput}/>}

      {display <= 1 &&<Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="success" onClick={handleUserRegister}>
          Suivant
        </Button>
      </Form.Item>}
      {display == 2 &&<Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="success" htmlType="submit">
          Envoyer
        </Button>
      </Form.Item>}
      {display >= 1 &&  <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="success" onClick={prev}>
          Retour
        </Button>
      </Form.Item>}
      
    </Form>
  );
}
