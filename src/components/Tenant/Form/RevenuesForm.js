import "aos/dist/aos.css";
import { Form, Checkbox} from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import EmployeeInput from "../Inputs/EmployeeInput"
import TnsInput from "../Inputs/TnsInput"
import StudentInput from "../Inputs/StudentInput"

export default function RevenuesForm({formInput, setFormInput, current}) {

  return (
    <div>  
      {formInput[current] != null &&(String(formInput[current].statut_s).startsWith("s") && <EmployeeInput  formInput={formInput} setFormInput={setFormInput} current={current}/>)}
      {formInput[current] != null &&(String(formInput[current].statut_s).startsWith("tns") && <TnsInput  formInput={formInput} setFormInput={setFormInput} current={current}/>)}
      {formInput[current] != null &&(String(formInput[current].statut_s).startsWith("e")  && <StudentInput  formInput={formInput} setFormInput={setFormInput} current={current}/>)}

    </div>
  );
}
