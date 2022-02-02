import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Radio, Space, Form } from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import InputComponant from "./InputComponant";

export default function EmployeeInput({formInput, setFormInput}) {

  function onChange(value){
    setFormInput({...formInput, garant:value})
  }

  return (
    <div>
       <InputComponant 
       name="snap_1" 
       label="Salaire net mensuel avant prélèvemment Janvier 2022" 
       text="votre Salaire net mensuel avant prélèvemment Janvier 2022" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput} />
       <InputComponant 
       name="snap_2" 
       label="Salaire net mensuel avant prélèvemment Décembre 2021" 
       text="votre Salaire net mensuel avant prélèvemment Décembre 2021" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput} />
    </div>
  );
}
