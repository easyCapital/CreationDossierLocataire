import "aos/dist/aos.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import EmployeeInput from "../Inputs/EmployeeInput"
import TnsInput from "../Inputs/TnsInput"
import StudentInput from "../Inputs/StudentInput"
import InputComponant from "../Inputs/InputComponant";

export default function RevenuesForm({
  current,
  data,
  setFormData,
  setCurrentData,
}) {

  return (
    <div className="center">  
      {(String(data.find((e) => e.name == "statut_s").value).startsWith("s") && <EmployeeInput 
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>)}
      {(String(data.find((e) => e.name == "statut_s").value).startsWith("tns") && <TnsInput  
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>)}
      {(String(data.find((e) => e.name == "statut_s").value).startsWith("e")  && <StudentInput
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>)}
      {String(data.find((e) => e.name == "statut").value) == "Locataire" && <InputComponant
      className="loyerActuel"
       name="loyer" 
       label="Montant du loyer actuel" 
       text="votre montant du loyer actuel" 
       addon="€"
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}
       current={current}/>}

    </div>
  );
}
