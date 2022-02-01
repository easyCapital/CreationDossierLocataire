import { useState } from "react";
import { Button } from "antd";

import { Form, Select, DatePicker } from "antd";
import "antd/dist/antd.css";

import { default as MySelect } from "../../../components/global/Select/select";
import { default as MyInputN } from "../../../components/global/InputN/inputN";

import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Space } from "antd";

export default function Step5Form(props) {
  const {} = props;
  const [pension, setPension] = useState(false);
  const [credit, setCredit] = useState(false);

  return (
    <div className="step5">
      <div className="title">Mes charges</div>
      <div className="ligne">
        <p>Je</p>
        <Form.Item name="field23" className="quartwidth">
          <MySelect selectValue={pension} handleChange={setPension}>
            <Select.Option value={false}>ne verse pas de</Select.Option>
            <Select.Option value={true}>verse une</Select.Option>
          </MySelect>
        </Form.Item>
        <p>pension alimentaire</p>
        {pension === true ? (
          <div className="ligne">
            <p> &nbsp; qui s'élève à</p>
            <Form.Item name="field24" rules={[{ type: "number", min: 0 }]}>
              <MyInputN /> <span>€ / mois</span>
            </Form.Item>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="ligne">
        <Form.Item name="field25" className="quartwidth">
          <MySelect selectValue={credit} handleChange={setCredit}>
            <Select.Option value={true}>J'ai</Select.Option>
            <Select.Option value={false}>Je n'ai pas</Select.Option>
          </MySelect>
        </Form.Item>
        <p>d'autre(s) crédit(s) en cours.</p>
      </div>
      {credit === true ? (
        <div className="addForm">
          <Form name="dynamic_form_nest_item" autoComplete="off">
            <Space
              style={{ display: "flex", marginBottom: 8 }}
              align="baseline"
            >
              <Form.Item style={{ width: "180px" }}>
                <MySelect>
                  <Select.Option value="creditImmobilier">
                    Crédit immobilier
                  </Select.Option>
                  <Select.Option value="creditConso">
                    Crédit conso
                  </Select.Option>
                  <Select.Option value="creditVoiture">
                    Crédit voiture
                  </Select.Option>
                </MySelect>
              </Form.Item>
              <span>avec une mensualité de</span>
              <Form.Item rules={[{ type: "number", min: 0 }]}>
                <MyInputN />
              </Form.Item>
              <span>€ par mois qui se termine</span>
              <Form.Item>
                <DatePicker placeholder="mois et année" />
              </Form.Item>
            </Space>
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item name="field30" style={{ width: "180px" }}>
                        <MySelect>
                          <Select.Option value="creditImmobilier">
                            Crédit immobilier
                          </Select.Option>
                          <Select.Option value="creditConso">
                            Crédit conso
                          </Select.Option>
                          <Select.Option value="creditVoiture">
                            Crédit voiture
                          </Select.Option>
                        </MySelect>
                      </Form.Item>
                      <span>avec une mensualité de</span>
                      <Form.Item
                        name="field31"
                        rules={[{ type: "number", min: 0 }]}
                      >
                        <MyInputN />
                      </Form.Item>
                      <span>€ par mois qui se termine</span>
                      <Form.Item name="field32">
                        <DatePicker placeholder="mois et année" />
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
                      Ajouter un crédit
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
