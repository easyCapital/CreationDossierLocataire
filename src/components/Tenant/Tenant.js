import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Button } from "antd";
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

  const handleUserRegister = () => {
      setDisplay(display+1)
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
      
      {display == 0 && <FirstForm formInput={formInput} setFormInput={setFormInput}/>}
      {display == 1 && <SecondForm formInput={formInput} setFormInput={setFormInput}/>}
      {display == 2 && <ThirdForm formInput={formInput} setFormInput={setFormInput}/>}

      {String(formInput.statut_s).startsWith("s") && <EmployeeInput  formInput={formInput} setFormInput={setFormInput}/>}
      {String(formInput.statut_s).startsWith("tns") && <TnsInput  formInput={formInput} setFormInput={setFormInput}/>}
      {String(formInput.statut_s).startsWith("e") && <StudentInput  formInput={formInput} setFormInput={setFormInput}/>}

      {display <= 1 &&<Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="success" htmlType="submit">
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
