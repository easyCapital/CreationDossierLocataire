import "aos/dist/aos.css";
import { Form, Checkbox, Steps, C, Col } from "antd";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
export default function GarantForm({
  current,
  formData,
  setCurrentData,
}) {

  function onChange(values) {
    setCurrentData('garant', values);
  }

  function getCols() {
    return Array(Object.values(formData).length)
      .fill(undefined)
      .map((ez, i) => {
        return (
          formData[i] && 
          (String(formData[i].find((e) => e.name == "type").value) == "tenant" && formData[i]?.find((e) => e.name == "garant")?.value?.includes("Personne physique") ? <Col>
          <Checkbox value={i}>{formData[i]?.find((el) => el.name == 'firstname').value + " " + formData[i]?.find((el) => el.name == 'lastname').value}</Checkbox>
        </Col>: '')
        );
      });
  }

  return (
    <div>
      <Form.Item
        label="Les personnes que je garanti"
        name={"garant"}
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
