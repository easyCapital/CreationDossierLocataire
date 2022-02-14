import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Radio, Space, Form } from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import InputComponant from "./InputComponant";

export default function TnsInput({formInput, setFormInput, current, fields, setFields}) {

  
  function getPrevDate(val){
    var x = new Date();
    x.setDate(1);
    x.setMonth(x.getMonth()-val);
    console.log(x.getMonth())
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
       name="rnme" 
       label="Revenu net mensuel estimé " 
       text="votre revenu net mensuel estimé" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput}
       current={current}/>
      <InputComponant 
       name="caf" 
       label="Aide CAF mensuel (APL, ALS)" 
       text="vos aide CAF mensuel (APL, ALS)" 
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput}
       current={current}/>
       <InputComponant 
       name="snmap_1" 
       label={ "Salaire net mensuel avant prél " + convertMonth(getPrevDate(1).getMonth()) + " " + getPrevDate(1).getFullYear()}
       text={"votre salaire net mensuel avant prélèvemment " + convertMonth(getPrevDate(1).getMonth()) + " " + getPrevDate(1).getFullYear()}
       addon="€" 
       formInput={formInput} 
       setFormInput={setFormInput}
       current={current}/>
       <InputComponant 
       name="snmap_2" 
       label={ "Salaire net mensuel avant prél " + convertMonth(getPrevDate(2).getMonth()) + " " + getPrevDate(2).getFullYear()}
       text={"votre salaire net mensuel avant prélèvemment " + convertMonth(getPrevDate(2).getMonth()) + " " + getPrevDate(2).getFullYear()}
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
