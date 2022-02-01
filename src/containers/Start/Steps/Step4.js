import { useState } from "react";
import { Button, Steps, Checkbox, Progress } from "antd";
import { useMediaQuery } from "react-responsive";
import { Form, Input, Select, DatePicker, Space } from "antd";
import "antd/dist/antd.css";
import { List } from "antd";
import { default as MySelect } from "../../../components/global/Select/select";
import { default as MyInputN } from "../../../components/global/InputN/inputN";
import { HiInformationCircle } from "react-icons/hi";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export default function Step4Form(props) {
  const {} = props;

  const [brutNet, setBrutNet] = useState("");
  const [primes, setPrimes] = useState(false);
  const [revenuAdd, setRevenuAdd] = useState(false);

  return (
    <div className="step4">
      <div className="title">Mes revenus</div>
      <div className="ligne" style={{ width: "100%" }}>
        <p>Je reçois un salaire fixe :</p>
        <Button>Mensuel</Button>
        <Button>Annuel</Button>
        <Form.Item name="field16" label="">
          <MySelect handleChange={setBrutNet} selectValue={brutNet}>
            <Select.Option value="net">net avant impôt</Select.Option>
            <Select.Option value="brut">brut</Select.Option>
          </MySelect>
        </Form.Item>
        <Form.Item
          name="field17"
          label="de"
          rules={[{ type: "number", min: 0 }]}
          style={{ width: 100 }}
        >
          <MyInputN /> <span>€ .</span>
        </Form.Item>
      </div>
      {brutNet === "net" && (
        <p>
          <HiInformationCircle
            style={{
              width: "25px",
              height: "25px",
              "vertical-align": "top",
            }}
          />
          À retrouver sur votre fiche de paie sous la mention "net à payer avant
          impôt sur le revenu".
        </p>
      )}
      <div className="ligne">
        <Form.Item name="field18" label="et" className="quartwidth">
          <MySelect selectValue={primes} handleChange={setPrimes}>
            <Select.Option value={true}>des primes</Select.Option>
            <Select.Option value={false}>pas de primes</Select.Option>
          </MySelect>
        </Form.Item>

        {primes === true && (
          <Form.Item name="field19" label="">
            <MySelect>
              <Select.Option value="mensuel">mensuel</Select.Option>
              <Select.Option value="annuel">annuel</Select.Option>
            </MySelect>
          </Form.Item>
        )}
        {primes === true && (
          <Form.Item name="field20" label="">
            <MySelect>
              <Select.Option value="net">nettes avant impôt</Select.Option>
              <Select.Option value="brut">brutes</Select.Option>
            </MySelect>
          </Form.Item>
        )}
        {primes === true && (
          <Form.Item
            name="field21"
            label="de"
            rules={[{ type: "number", min: 0 }]}
          >
            <MyInputN />
            <span>€ (en moyenne sur les 3 dernières années)</span>
          </Form.Item>
        )}
      </div>
      <div className="ligne">
        <Form.Item name="field22" className="quartwidth">
          <MySelect selectValue={revenuAdd} handleChange={setRevenuAdd}>
            <Select.Option value={true}>J'ai des</Select.Option>
            <Select.Option value={false}>Je n'ai pas de</Select.Option>
          </MySelect>
        </Form.Item>
        <span>
          revenu(s) additionnel(s) (locatif, autoentreprise, pension
          alimentaire, allocation).
        </span>
      </div>
      {revenuAdd == true ? (
        <div className="ligne">
          <Form name="dynamic_form_nest_item" autoComplete="off">
            <div className="ligne">
              <Form.Item>
                <Input placeholder="Revenu locatif" />
              </Form.Item>
              <Form.Item rules={[{ type: "number", min: 0 }]}>
                <Input placeholder="Pour un montant mensuel de" />
              </Form.Item>
            </div>
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item
                        {...restField}
                        name={[name, "first"]}
                        fieldKey={[fieldKey, "first"]}
                        rules={[
                          {
                            required: true,
                            message: "Il manque le revenu locatif",
                          },
                        ]}
                      >
                        <Input placeholder="Revenu locatif" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "last"]}
                        fieldKey={[fieldKey, "last"]}
                        rules={[{ type: "number", min: 0 }]}
                      >
                        <Input placeholder="Pour un montant mensuel de" />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Ajouter un champ
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
