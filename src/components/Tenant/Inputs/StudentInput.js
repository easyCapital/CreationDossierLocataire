import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Radio, Space, Form } from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import InputComponant from "./InputComponant";

export default function StudentInput({formInput, setFormInput}) {

  function onChange(value){
    setFormInput({...formInput, garant:value})
  }

  return (
    <div className="inputs">
        <InputComponant 
       name="snap_4" 
       label="Aide CAF mensuel (APL, ALS)" 
       text="vos aide CAF mensuel (APL, ALS)" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput} />
       <InputComponant 
       name="snap_7" 
       label="Autre(s) revenu(s) net(s) mensuel(s)" 
       text="vos autre(s) revenu(s) net(s) mensuel(s)" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput} />  
    </div>
  );
}
