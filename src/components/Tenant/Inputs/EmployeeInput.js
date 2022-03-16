import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Radio, Space, Form } from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import InputComponant from "./InputComponant";

export default function EmployeeInput({data, setFormData, setCurrentData}) {

  function getPrevDate(val){
    var x = new Date();
    x.setDate(1);
    x.setMonth(x.getMonth()-val);
    return x
  }

  function convertMonth(val){

    switch (val) {
      case 0:
        return "Janvier"
        break;
      case 1:
          return "Fevrier"
          break;
      case 2:
          return "Mars"
          break;
      case 3:
        return "Avril"
        break;
      case 4:
        return "Mai"
        break;
      case 5:
        return "Juin"
        break;
      case 6:
          return "Juillet"
          break;
      case 7:
          return "Aout"
          break;
      case 8:
          return "Septembre"
        break;
      case 9:
        return "Octobre"
        break;
      case 10:
        return "Novembre"
        break;
      case 11:
        return "Décembre"
        break;
      default:
        break;
    }

  }

  return (
    <div className="inputs">
       <InputComponant 
       name="snmap_1" 
       label={ "Salaire net mensuel av. prél " + convertMonth(getPrevDate(1).getMonth()) + " " + getPrevDate(1).getFullYear()}
       text={"votre salaire net mensuel av. prélèvemment " + convertMonth(getPrevDate(1).getMonth()) + " " + getPrevDate(1).getFullYear()}
       addon="€" 
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>
       <InputComponant 
       name="snmap_2" 
       label={ "Salaire net mensuel av. prél " + convertMonth(getPrevDate(2).getMonth()) + " " + getPrevDate(2).getFullYear()}
       text={"votre salaire net mensuel av. prélèvemment " + convertMonth(getPrevDate(2).getMonth()) + " " + getPrevDate(2).getFullYear()}
       addon="€" 
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>
       <InputComponant 
       name="snmap_3" 
       label={ "Salaire net mensuel av. prél " + convertMonth(getPrevDate(3).getMonth()) + " " + getPrevDate(2).getFullYear()}
       text={"votre salaire net mensuel av. prélèvemment " + convertMonth(getPrevDate(3).getMonth()) + " " + getPrevDate(2).getFullYear()}
       addon="€" 
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>
       <InputComponant 
       name="CAF_aid" 
       label="Aide CAF mensuel (APL, ALS)" 
       text="vos aide CAF mensuel (APL, ALS)" 
       addon="€" 
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>
       <InputComponant 
       name="isr_1" 
       label="Impôts sur le revenu annuel de ref. 2021" 
       text="vos impôts sur le revenu annuel de ref. 2021" 
       addon="€"  
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>
       <InputComponant 
       name="isr_2" 
       label="Impôts sur le revenu annuel de ref. 2020" 
       text="vos impôts sur le revenu annuel de ref. 2020" 
       addon="€" 
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>
        <InputComponant 
       name="other_income" 
       label="Autre(s) revenu(s) net(s) mensuel(s)" 
       text="vos autre(s) revenu(s) net(s) mensuel(s)" 
       addon="€" 
       data={data}
       setFormData={setFormData}
       setCurrentData={setCurrentData}/>
    </div>
  );
}
