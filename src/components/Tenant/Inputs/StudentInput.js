import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Radio, Space, Form } from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import InputComponant from "./InputComponant";

export default function StudentInput({formInput, setFormInput, current}) {

  function onChange(value){
    setFormInput({...formInput, garant:value})
  }

  return (
    <div className="inputs">
        <InputComponant 
       name="caf" 
       label="Aide CAF mensuel (APL, ALS)" 
       text="vos aide CAF mensuel (APL, ALS)" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput}
       current={current}/>
       <InputComponant 
       name="otherR" 
       label="Autre(s) revenu(s) net(s) mensuel(s)" 
       text="vos autre(s) revenu(s) net(s) mensuel(s)" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput}
       current={current}/>
    </div>
  );
}
