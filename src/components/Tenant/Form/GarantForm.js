import { Form, Checkbox, Steps, C, Col } from "antd";
import { useEffect, useState } from "react";

export default function GarantForm({ current, formData, setCurrentData }) {
  const defaultCheckedList = formData[current].find(
    (e) => e.name == "tenants"
  ).value;
  const ID_PERSONNE_PHYSIQUE = 2;
  const [options, setOptions] = useState([]);
  const [load, setLoad] = useState(false);

  function onChange(e) {
    console.log(e.target.value);
    let checkedList = formData[current].find((e) => e.name == "tenants").value;
    let newArray = [];
    for (let element of checkedList) {
      if (element == e.target.value) {
        continue;
      }
      newArray.push(element);
    }
    if (!checkedList.includes(e.target.value)) {
      newArray.push(e.target.value);
    }
    console.log(newArray);
    setCurrentData("tenants", newArray);
  }

  useEffect(() => {
    let tmpArray = [];
    formData.map((user) => {
      // --- user properties
      const type = user.find((property) => property.name == "type");
      const guarant_possibilities = user.find(
        (property) => property.name == "guarant_possibilities"
      );
      const firstname = user.find(
        (property) => property.name == "firstname"
      ).value;
      const lastname = user.find(
        (property) => property.name == "lastname"
      ).value;
      const id = user.find((property) => property.name == "id").value;

      // --- logs to check
      // console.log(user)
      // console.log(type)
      // console.log(guarant_possibilities)

      // --- Check and add
      if (
        String(type.value) == "tenant" &&
        guarant_possibilities.value.includes(ID_PERSONNE_PHYSIQUE)
      ) {
        console.log(firstname + " " + lastname);
        console.log(defaultCheckedList.includes(id));
        console.log(id);
        console.log(defaultCheckedList);
        tmpArray.push({ label: firstname + " " + lastname, value: id });
      }
    });
    setOptions(tmpArray);
    setLoad(true);
  }, []);

  return (
    <div>
      <Form.Item
        label="Les personnes que je garanti"
        name={"garant"}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner la liste de vs locataires.",
          },
        ]}
      >
        {load &&
          options.map((option) => (
            <Checkbox
              onChange={onChange}
              value={option.value}
              defaultChecked={defaultCheckedList.includes(option.value)}
              checked={defaultCheckedList.includes(option.value)}
            >
              {option.label}
            </Checkbox>
          ))}
      </Form.Item>
    </div>
  );
}
