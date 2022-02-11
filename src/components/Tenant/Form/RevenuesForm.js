import "aos/dist/aos.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import EmployeeInput from "../Inputs/EmployeeInput"
import TnsInput from "../Inputs/TnsInput"
import StudentInput from "../Inputs/StudentInput"
import InputComponant from "../Inputs/InputComponant";

export default function RevenuesForm({formInput, setFormInput, current}) {

  return (
    <div className="center">  
      {formInput[current] == null && <h2>Veuillez selectionner un statut sur le formulaire précedent</h2>}
      {formInput[current] != null && formInput[current].statut_s == null && <h2>Veuillez selectionner un statut sur le formulaire précedent</h2>}
      {formInput[current] != null &&(String(formInput[current].statut_s).startsWith("s") && <EmployeeInput  formInput={formInput} setFormInput={setFormInput} current={current}/>)}
      {formInput[current] != null &&(String(formInput[current].statut_s).startsWith("tns") && <TnsInput  formInput={formInput} setFormInput={setFormInput} current={current}/>)}
      {formInput[current] != null &&(String(formInput[current].statut_s).startsWith("e")  && <StudentInput  formInput={formInput} setFormInput={setFormInput} current={current}/>)}
      {formInput[current] != null && formInput[current].statut == "Locataire" && <InputComponant
       name="snap_loyer" 
       label="Montant du loyer actuel" 
       text="votre montant du loyer actuel" 
       addon="€"
       formInput={formInput} 
       setFormInput={setFormInput}
       current={current}/>}

    </div>
  );
}
