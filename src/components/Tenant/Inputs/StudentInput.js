import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Radio, Space, Form } from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import InputComponant from "./InputComponant";

export default function StudentInput({data, setFormData, setCurrentData}) {

  return (
    <div className="inputs">
        <InputComponant 
       name="CAF_aid" 
       label={<span>Aide CAF <b>mensuel</b> (APL, ALS)</span>}
       text="vos aide CAF mensuel (APL, ALS)" 
       addon="€" 
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>
       <InputComponant 
       name="other_income" 
       label={<span>Autre(s) revenu(s) net(s) <b>mensuel(s)</b></span>}
       text="vos autre(s) revenu(s) net(s) mensuel(s)" 
       addon="€" 
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>
    </div>
  );
}
