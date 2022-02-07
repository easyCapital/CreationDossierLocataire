import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Checkbox, Steps, C, Col } from "antd";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import FirstForm from "./FirstForm";
import ThirdForm from "./ThirdForm";
import RevenuesForm from "./RevenuesForm";

export default function GarantForm({ formInput, setFormInput, current }) {
  const [display, setDisplay] = useState(1);
  const { Step } = Steps;

  function onChange(values) {
    setFormInput((formInput) => {
      if (!formInput[current]) formInput[current] = {};
      formInput[current].garant = values;
      return { ...formInput };
    });
  }

  function getCols() {
    return Array(Object.values(formInput).length)
      .fill(undefined)
      .map((e, i) => {
        return (
          formInput[i].garant && 
          (formInput[i].statut_gl == "Locataire" && formInput[i].garant.includes("Personne physique") ? <Col>
          <Checkbox value={i}>{formInput[i].first_name + " " + formInput[i].last_name}</Checkbox>
        </Col>: '')
        );
      });
  }

  return (
    <div>
      <Form.Item
        label="Les personnes que je garanti"
        name={"garant_" + current}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner vos possibilité de garant.",
          },
        ]}
      >
        <Checkbox.Group onChange={onChange}>{getCols()}</Checkbox.Group>
      </Form.Item>
    </div>
  );
}
