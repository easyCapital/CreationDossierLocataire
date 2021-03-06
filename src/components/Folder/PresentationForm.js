import { Form, Input, message, Radio, Select, Space } from "antd";
import { FormWrapper } from "./Form.style";
import validator from "validator";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import HttpService from "../../services/HttpService";
import presentez_vous from "../../../public/forms/presentez-vous.jpg";
import Image from "next/image";
import SearchLocationInput from "../google/SearchLocationInput";

export default function PresentationForm({
  arePreviousItemsFilled,
  validateMessages,
  handleCurrentStepChanged,
  folder,
  user,
  isDesktop,
}) {
  const [isFormFinished, setIsFormFinished] = useState();

  const { Option } = Select;

  const [form] = Form.useForm();
  const initFormValues = {
    civility: folder.civility,
    marital_status: folder.marital_status,
    firstname: folder.firstname,
    lastname: folder.lastname,
    date_of_birth: folder.date_of_birth,
    email: folder.email ?? user.email,
    mobile: folder.mobile,
    address: folder.address,
  };

  const checkIfFormIsFinished = () => {
    setIsFormFinished(
      form.getFieldValue("address") &&
        arePreviousItemsFilled("address", form.getFieldsValue())
    );
  };

  const onValuesChange = (changedValues) => {
    checkIfFormIsFinished();

    const fieldName = Object.keys(changedValues)[0];

    const data = {
      [fieldName]: changedValues[fieldName],
    };

    let url = "folders/" + folder.slug;

    new HttpService().putData(data, url).then((res) => {
      if (res.success) {
      } else {
        message.error(res.message);
      }
    });
  };

  useEffect(() => {
    checkIfFormIsFinished();
    window.scrollTo(0, 0);
  }, []);

  return (
    <FormWrapper className="reverse">
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
                    01 <span>Pr??sentez-vous !</span>
                  </p>
                  <p className="liveSave">
                    Toutes vos donn??es sont sauvegard??es ?? chaque modification !
                  </p>
                  <Form.Item label="Civilit??" name="civility">
                    <Radio.Group buttonStyle="solid">
                      {["Mr", "Mme"].map((civility, i) => (
                        <Radio.Button value={civility} key={"civility_" + i}>
                          {civility}
                        </Radio.Button>
                      ))}
                    </Radio.Group>
                  </Form.Item>
                  {arePreviousItemsFilled("marital_status", values) ? (
                    <Form.Item
                      label={"Situation matrimoniale"}
                      name="marital_status"
                    >
                      <Select>
                        <Option value={"single"}>C??libataire</Option>
                        <Option value={"married"}>
                          Mari??
                          {formInstance.getFieldValue("civility") == "Mme"
                            ? "e"
                            : ""}
                        </Option>
                        <Option value={"pacs"}>
                          Pacs??
                          {formInstance.getFieldValue("civility") == "Mme"
                            ? "e"
                            : ""}
                        </Option>
                        <Option value={"divorced"}>
                          Divorc??
                          {formInstance.getFieldValue("civility") == "Mme"
                            ? "e"
                            : ""}
                        </Option>
                        <Option value={"separated"}>
                          S??par??
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
                      <Form.Item label={"Pr??nom"} name="firstname">
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
                  {arePreviousItemsFilled("email", values) ? (
                    <Form.Item
                      label={"Adresse e-mail"}
                      name="email"
                      rules={[{ type: "email" }]}
                    >
                      <Input />
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled("mobile", values) &&
                  validator.isEmail(values.email) ? (
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
              alt="Pr??sentez-vous !"
              id="presentez-vous"
              placeholder="blur"
              priority
              objectFit="cover"
              objectPosition={"bottom"}
            />
          </span>
        </div>
      </div>
      <div className="arrows right">
        {(isFormFinished || !isDesktop) && (
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            onClick={
              isFormFinished ? () => handleCurrentStepChanged(true) : null
            }
            className={isFormFinished ? "" : "disabled"}
          />
        )}
      </div>
    </FormWrapper>
  );
}
