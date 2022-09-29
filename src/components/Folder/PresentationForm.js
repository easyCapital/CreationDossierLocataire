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
  maritalStatuses,
  folder,
  user,
  isDesktop,
}) {
  const [isFormFinished, setIsFormFinished] = useState();

  const { Option } = Select;

  const [form] = Form.useForm();
  const initFormValues = {
    civility: folder.civility,
    marital_status_id: folder.person.marital_status?.id,
    firstname: folder.person.firstname,
    lastname: folder.person.lastname,
    date_of_birth: folder.person.date_of_birth,
    email: folder.person.email ?? user.email,
    mobile: folder.person.mobile,
    place_of_birth: folder.person.place_of_birth,
    address: folder.person.address,
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
      if (!res.success) {
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
            {(values) => {
              return (
                <>
                  <p className="stepTitle">
                    01 <span>Présentez-vous !</span>
                  </p>
                  <p className="liveSave">
                    Toutes vos données sont sauvegardées à chaque modification !
                  </p>
                  <Form.Item label="Civilité" name="civility" required={true}>
                    <Radio.Group buttonStyle="solid">
                      {["Mr", "Mme"].map((civility, i) => (
                        <Radio.Button value={civility} key={"civility_" + i}>
                          {civility}
                        </Radio.Button>
                      ))}
                    </Radio.Group>
                  </Form.Item>
                  {arePreviousItemsFilled("marital_status_id", values) ? (
                    <Form.Item
                      label={"Situation matrimoniale"}
                      name="marital_status_id"
                      required={true}
                    >
                      <Select>
                        {maritalStatuses.map((maritalStatus) => {
                          return (
                            <Option
                              value={maritalStatus.id}
                              key={maritalStatus.value}
                            >
                              {maritalStatus.label}
                            </Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled("firstname", values) ? (
                    <Space align="baseline">
                      <Form.Item
                        label={"Prénom"}
                        name="firstname"
                        required={true}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item label={"Nom"} name="lastname" required={true}>
                        <Input />
                      </Form.Item>
                    </Space>
                  ) : null}
                  {arePreviousItemsFilled("date_of_birth", values) ? (
                    <Form.Item
                      label={"Date de naissance"}
                      name="date_of_birth"
                      required={true}
                    >
                      <Input type={"date"} />
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled("email", values) ? (
                    <Form.Item
                      label={"Adresse e-mail"}
                      name="email"
                      rules={[{ type: "email" }]}
                      required={true}
                    >
                      <Input />
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled("mobile", values) &&
                  validator.isEmail(values.email) ? (
                    <Form.Item label={"Mobile"} name="mobile" required={true}>
                      <Input />
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled("place_of_birth", values) ? (
                    <Form.Item
                      label={"Lieu de naissance"}
                      name="place_of_birth"
                      required={true}
                    >
                      <SearchLocationInput
                        placeOfBirthMode
                        placeholder="Recherchez une ville"
                      />
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled("address", values) ? (
                    <Form.Item label={"Adresse"} name="address" required={true}>
                      <SearchLocationInput placeholder="Recherchez une adresse" />
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
