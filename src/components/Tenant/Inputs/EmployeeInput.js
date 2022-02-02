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
    <div className="inputs">
       <InputComponant 
       name="snap_1" 
       label="Salaire net mensuel avant prélèvemment Janvier 2022" 
       text="votre salaire net mensuel avant prélèvemment Janvier 2022" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput} />
       <InputComponant 
       name="snap_2" 
       label="Salaire net mensuel avant prélèvemment Décembre 2021" 
       text="votre salaire net mensuel avant prélèvemment Décembre 2021" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput} />
       <InputComponant 
       name="snap_3" 
       label="Salaire net mensuel avant prélèvemment Novembre 2021" 
       text="votre salaire net mensuel avant prélèvemment Novembre 2021" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput} />
       <InputComponant 
       name="snap_4" 
       label="Aide CAF mensuel (APL, ALS)" 
       text="vos aide CAF mensuel (APL, ALS)" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput} />
       <InputComponant 
       name="snap_5" 
       label="Impôts sur le revenu annuel de référence 2021" 
       text="vos impôts sur le revenu annuel de référence 2021" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput} />
       <InputComponant 
       name="snap_6" 
       label="Impôts sur le revenu annuel de référence 2020" 
       text="vos impôts sur le revenu annuel de référence 2020" 
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
