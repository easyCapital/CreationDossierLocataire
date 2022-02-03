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
import InitForm from "./Form/IniitForm";

export default function SignUp() {

    const [formInput, setFormInput] = useState({});
    const [display, setDisplay] = useState(0)
    const [folder, setFolder] = useState(0)
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
      {display > 0 && <Steps current={folder-1} > 
      
      {

        Array(formInput.folder).fill(undefined).map((e, i) => {
          return <Step title={i+1 + "e"} onClick={() => setFolder(i+1)}/>;
        })

      }

      </Steps>} 
      <br/>

       {display > 0 && <Steps current={display-1} >
        <Step title="Mon projet" onClick={() => setDisplay(1)}/>
        <Step title="Mes garants" onClick={() => setDisplay(2)}/>
        <Step title="Mes revenus" onClick={() => setDisplay(3)}/>
        <Step title="Mes justificatifs" onClick={() => setDisplay(4)}/>
      </Steps>}
      <br/>
      {display == 0 && <InitForm formInput={formInput} setFormInput={setFormInput}/>}
      {display == 1 && <FirstForm formInput={formInput} setFormInput={setFormInput}/>}
      {display == 2 && <SecondForm formInput={formInput} setFormInput={setFormInput}/>}
      {display == 4 && <ThirdForm formInput={formInput} setFormInput={setFormInput}/>}

      {String(formInput.statut_s).startsWith("s") && display == 0 && <EmployeeInput  formInput={formInput} setFormInput={setFormInput}/>}
      {String(formInput.statut_s).startsWith("tns") && display == 0 && <TnsInput  formInput={formInput} setFormInput={setFormInput}/>}
      {String(formInput.statut_s).startsWith("e") && display == 0 && <StudentInput  formInput={formInput} setFormInput={setFormInput}/>}

      <div className="btns">
      {display >= 1 &&  <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="success" onClick={prev}>
          Retour
        </Button>
      </Form.Item>}
      {display <= 3 &&<Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="success" onClick={handleUserRegister}>
          Suivant
        </Button>
      </Form.Item>}
      {display == 4 &&<Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="success" htmlType="submit">
          Envoyer
        </Button>
      </Form.Item>}
      
      </div>
    </Form>
  );
}
