import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Radio, Space, Form } from "antd";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import InputComponant from "./InputComponant";

export default function EmployeeInput({ data, setFormData, setCurrentData }) {
  function getPrevDate(val) {
    var x = new Date();
    x.setDate(1);
    x.setMonth(x.getMonth() - val);
    return x;
  }

  function convertMonth(val) {
    switch (val) {
      case 0:
        return "Janvier";
      case 1:
        return "Fevrier";
      case 2:
        return "Mars";
      case 3:
        return "Avril";
      case 4:
        return "Mai";
      case 5:
        return "Juin";
      case 6:
        return "Juillet";
      case 7:
        return "Aout";
      case 8:
        return "Septembre";
      case 9:
        return "Octobre";
      case 10:
        return "Novembre";
      case 11:
        return "Décembre";
      default:
        break;
    }
  }

  return (
    <div className="inputs">
      <InputComponant
        name="snmap_1"
        label={
          <span>
            {" "}
            Salaire net <b>mensuel</b> av. prél{" "}
            {convertMonth(getPrevDate(1).getMonth()) +
              " " +
              getPrevDate(1).getFullYear()}
          </span>
        }
        text={
          "votre salaire net mensuel av. prélèvemment " +
          convertMonth(getPrevDate(1).getMonth()) +
          " " +
          getPrevDate(1).getFullYear()
        }
        addon="€"
        data={data}
        setFormData={setFormData}
        setCurrentData={setCurrentData}
      />
      <InputComponant
        name="snmap_2"
        label={
          <span>
            {" "}
            Salaire net <b>mensuel</b> av. prél{" "}
            {convertMonth(getPrevDate(2).getMonth()) +
              " " +
              getPrevDate(2).getFullYear()}
          </span>
        }
        text={
          "votre salaire net mensuel av. prélèvemment " +
          convertMonth(getPrevDate(2).getMonth()) +
          " " +
          getPrevDate(2).getFullYear()
        }
        addon="€"
        data={data}
        setFormData={setFormData}
        setCurrentData={setCurrentData}
      />
      <InputComponant
        name="snmap_3"
        label={
          <span>
            {" "}
            Salaire net <b>mensuel</b> av. prél{" "}
            {convertMonth(getPrevDate(3).getMonth()) +
              " " +
              getPrevDate(3).getFullYear()}
          </span>
        }
        text={
          "votre salaire net mensuel av. prélèvemment " +
          convertMonth(getPrevDate(3).getMonth()) +
          " " +
          getPrevDate(2).getFullYear()
        }
        addon="€"
        data={data}
        setFormData={setFormData}
        setCurrentData={setCurrentData}
      />
      <InputComponant
        name="CAF_aid"
        label="Aide CAF mensuel (APL, ALS)"
        text="vos aide CAF mensuel (APL, ALS)"
        addon="€"
        data={data}
        setFormData={setFormData}
        setCurrentData={setCurrentData}
      />
      <InputComponant
        name="isr_1"
        label={
          <span>
            Impôts sur le revenu <b>annuel</b> de ref. 2021"
          </span>
        }
        text="vos impôts sur le revenu annuel de ref. 2021"
        addon="€"
        data={data}
        setFormData={setFormData}
        setCurrentData={setCurrentData}
      />
      <InputComponant
        name="isr_2"
        label={
          <span>
            Impôts sur le revenu <b>annuel</b> de ref. 2020"
          </span>
        }
        text="vos impôts sur le revenu annuel de ref. 2020"
        addon="€"
        data={data}
        setFormData={setFormData}
        setCurrentData={setCurrentData}
      />
      <InputComponant
        name="other_income"
        label={
          <span>
            Autre(s) revenu(s) net(s) <b>mensuel(s)</b>
          </span>
        }
        text="vos autre(s) revenu(s) net(s) mensuel(s)"
        addon="€"
        data={data}
        setFormData={setFormData}
        setCurrentData={setCurrentData}
      />
    </div>
  );
}
