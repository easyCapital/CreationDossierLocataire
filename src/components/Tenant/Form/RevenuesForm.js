import "aos/dist/aos.css";
import { Form, Checkbox} from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import EmployeeInput from "../Inputs/EmployeeInput"
import TnsInput from "../Inputs/TnsInput"
import StudentInput from "../Inputs/StudentInput"

export default function RevenuesForm({formInput, setFormInput}) {

  function onChange(values){
    console.log(values)
    setFormInput({...formInput, garant:values})
  }

  const options = [
    { label: 'Je n’ai en ai pas', value: 'Je n’ai en ai pas' },
    { label: 'J’ai une personne physique', value: 'J’ai une personne physique' },
    { label: 'VISALE', value: 'VISALE' },
    { label: 'Autre', value: 'Autre' },
  ];

  return (
    <div>  {String(formInput.statut_s).startsWith("s") && <EmployeeInput  formInput={formInput} setFormInput={setFormInput}/>}
    {String(formInput.statut_s).startsWith("tns") && <TnsInput  formInput={formInput} setFormInput={setFormInput}/>}
    {String(formInput.statut_s).startsWith("e")  && <StudentInput  formInput={formInput} setFormInput={setFormInput}/>}

    </div>
  );
}
