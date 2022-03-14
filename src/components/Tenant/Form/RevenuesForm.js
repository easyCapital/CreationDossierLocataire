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
      {(data?.find((e) => e.name == "activity_id").value <= 7 && <EmployeeInput 
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>)}
       {(data?.find((e) => e.name == "activity_id").value <= 13 && (data?.find((e) => e.name == "activity_id").value>7) && <TnsInput  
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>)}
       {(data?.find((e) => e.name == "activity_id").value <= 15 && (data?.find((e) => e.name == "activity_id").value>13)&&  <StudentInput
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>)}
      {String(data?.find((e) => e.name == "housing_type").value) == "tenant" && <InputComponant
      className="loyerActuel"
       name="current_rent"
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
