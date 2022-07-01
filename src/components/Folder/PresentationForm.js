import { Form, Input, message, Radio, Select, Space } from "antd";
import { FormWrapper } from "./Form.style";
import validator from "validator";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faVenus,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import HttpService from "../../services/HttpService";
import presentez_vous from "../../../public/forms/presentez-vous.jpg";
import Image from "next/image";
import SearchLocationInput from "../google/SearchLocationInput";

export default function PresentationForm({
  arePreviousItemsFilled,
  validateMessages,
  user,
  handleCurrentStepChanged,
}) {
  const [isFormFinished, setIsFormFinished] = useState();

  const { Option } = Select;

  const [form] = Form.useForm();
  const initFormValues = {
    civility: user.civility,
    marital_status: user.marital_status,
    firstname: user.firstname,
    lastname: user.lastname,
    date_of_birth: user.date_of_birth,
    tenant_email: user.tenant_email,
    mobile: user.mobile,
    address: user.address,
  };

  const checkIfFormIsFinished = () => {
    setIsFormFinished(
      form.getFieldValue("mobile") &&
        arePreviousItemsFilled("mobile", form.getFieldsValue())
    );
  };

  const onValuesChange = (changedValues) => {
    checkIfFormIsFinished();

    const fieldName = Object.keys(changedValues)[0];

    const data = {
      [fieldName]: changedValues[fieldName],
    };

    let url = "users/" + user.id;

    new HttpService().putData(data, url).then((res) => {
      if (res.success) {
      } else {
        message.error(res.message);
      }
    });
  };

  useEffect(() => {
    checkIfFormIsFinished();
  }, []);

  return (
    <FormWrapper>
      <div></div>
      <div className="content">
        <div>
          <Form
            form={form}
            initialValues={initFormValues}
            layout={"vertical"}
            validateMessages={validateMessages}
            onValuesChange={onValuesChange}
          >
            {(values, formInstance) => {
              return (
                <>
                  <p className="stepTitle">
                    01 <span>Présentez-vous !</span>
                  </p>
                  <Form.Item label="Civilité" name="civility">
                    <Radio.Group buttonStyle="solid">
                      <Radio.Button value={"Mr"}>
                        <FontAwesomeIcon icon={faMars} />
                      </Radio.Button>
                      <Radio.Button value={"Mme"}>
                        <FontAwesomeIcon icon={faVenus} />
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  {arePreviousItemsFilled("marital_status", values) ? (
                    <Form.Item
                      label={"Situation matrimoniale"}
                      name="marital_status"
                    >
                      <Select>
                        <Option value={"single"}>Célibataire</Option>
                        <Option value={"married"}>
                          Marié
                          {formInstance.getFieldValue("civility") == "Mme"
                            ? "e"
                            : ""}
                        </Option>
                        <Option value={"pacs"}>
                          Pacsé
                          {formInstance.getFieldValue("civility") == "Mme"
                            ? "e"
                            : ""}
                        </Option>
                        <Option value={"divorced"}>
                          Divorcé
                          {formInstance.getFieldValue("civility") == "Mme"
                            ? "e"
                            : ""}
                        </Option>
                        <Option value={"separated"}>
                          Séparé
                          {formInstance.getFieldValue("civility") == "Mme"
                            ? "e"
                            : ""}
                        </Option>
                        <Option value={"widower"}>
                          Veu
                          {formInstance.getFieldValue("civility") == "Mme"
                            ? "ve"
                            : "f"}
                        </Option>
                      </Select>
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled("firstname", values) ? (
                    <Space align="baseline">
                      <Form.Item label={"Prénom"} name="firstname">
                        <Input />
                      </Form.Item>
                      <Form.Item label={"Nom"} name="lastname">
                        <Input />
                      </Form.Item>
                    </Space>
                  ) : null}
                  {arePreviousItemsFilled("date_of_birth", values) ? (
                    <Form.Item label={"Date de naissance"} name="date_of_birth">
                      <Input type={"date"} />
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled("tenant_email", values) ? (
                    <Form.Item
                      label={"Adresse e-mail"}
                      name="tenant_email"
                      rules={[{ type: "email" }]}
                    >
                      <Input />
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled("mobile", values) &&
                  validator.isEmail(values.tenant_email) ? (
                    <Form.Item label={"Mobile"} name="mobile">
                      <Input />
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled("address", values) ? (
                    <Form.Item label={"Adresse"} name="address">
                      <SearchLocationInput />
                    </Form.Item>
                  ) : null}
                </>
              );
            }}
          </Form>
        </div>
        <div className="picture">
          <span>
            <Image
              src={presentez_vous}
              alt="Présentez-vous !"
              id="presentez-vous"
              placeholder="blur"
              priority
            />
          </span>
        </div>
      </div>
      <div>
        {isFormFinished && (
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            onClick={() => handleCurrentStepChanged(true)}
          />
        )}
      </div>
    </FormWrapper>
  );
}
