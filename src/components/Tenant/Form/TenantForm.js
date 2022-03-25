import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Checkbox, Steps } from "antd";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import HttpService from "../../../services/HttpService";

export default function SecondForm({ current, setCurrentData, add }) {
  function onChange(values) {
    setCurrentData("guarant_possibilities", values);
    if (values.includes(2)){
      add()
    }
  }

  const [guarantPossibilities, setGuarantPossibilities] = useState([]);

  useEffect(() => {
    const http = new HttpService();
    let url = "guarant-possibilities";
    try {
      const data = http.getData(url);
      data.then((value) => {
        setGuarantPossibilities(value.data);
      });
    } catch (error) {}
  }, []);

  useEffect(() => {
  }, [guarantPossibilities]);

  return (
    <div>
      <Form.Item
        label="Possibilités de garants"
        name={"guarant_possibilities"}
        hasFeedback
        className="garant_select"
        rules={[
          {
            required: true,
            message: "Veuillez renseigner vos possibilité de garant.",
          },
        ]}
      >
        <Checkbox.Group onChange={onChange}>
          {guarantPossibilities.map((possibility) => (
            <Checkbox value={possibility.id}>{possibility.name}</Checkbox>
          ))}
        </Checkbox.Group>
      </Form.Item>
    </div>
  );
}
