import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Input, Button, Radio, Select, InputNumber} from "antd";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
const { Option } = Select;

export default function InitForm({formInput, setFormInput}) {

  function onChange(value){
    setFormInput({...formInput, folder:value})
  }

  return (
    <div className="page_o">
      
      <h2>
        Afin de facilité le stockage des données et l'optimisation de vos dossiers locataires, veuillez renseigner le nombre de dossiers locataires à créer 
      </h2>
      <InputNumber min={1} max={1000} onChange={onChange} />
      
    </div>
  );
}
