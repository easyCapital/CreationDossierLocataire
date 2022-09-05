import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faCloudSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Input, message, Modal, Radio, Select, Space } from "antd";
import { FormWrapper } from "./Form.style";
import { useEffect, useState } from "react";
import HttpService from "../../services/HttpService";
import votre_situation_actuelle from "../../../public/forms/votre_situation_actuelle.jpg";
import Image from "next/image";

export default function SituationForm({
  arePreviousItemsFilled,
  validateMessages,
  activities,
  folder,
  handleCurrentStepChanged,
  isDesktop,
}) {
  const getActivityType = (activity) => {
    return activities.find((e) => e.id == activity)?.type ?? "";
  };

  const [form] = Form.useForm();
  const initFormValues = {
    activity_id: parseInt(folder.activity_id),
    seniority: folder.seniority,
    ...(folder.activity?.type == "employee"
      ? {
          company_name: folder.company_name,
          employer_firstname: folder.employer_firstname,
          employer_lastname: folder.employer_lastname,
          employer_phone: folder.employer_phone,
          employer_email: folder.employer_email,
        }
      : {}),
    housing_situation: folder.housing_situation,
  };

  const [isFormFinished, setIsFormFinished] = useState();

  const { Option } = Select;

  const checkIfFormIsFinished = () => {
    let ok = true;
    [
      "activity_id",
      ...(getActivityType(form.getFieldValue("activity_id")) == "employee"
        ? [
            "company_name",
            "employer_firstname",
            "employer_lastname",
            "employer_phone",
            "employer_email",
          ]
        : []),
      "housing_situation",
    ].forEach((e) => {
      if (!form.getFieldValue(e)) ok = false;
    });
    setIsFormFinished(ok);
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
    <FormWrapper>
      <div className="arrows left">
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          onClick={() => handleCurrentStepChanged(false)}
        />
      </div>
      <div className="content">
        <div className="picture">
          <span>
            <Image
              id="votre_situation_actuelle"
              src={votre_situation_actuelle}
              alt="Votre situation actuelle"
              placeholder="blur"
              priority
            />
          </span>
        </div>
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
                    02 <span>Votre situation actuelle</span>
                  </p>
                  <p className="liveSave">
                    Toutes vos données sont sauvegardées à chaque modification !
                  </p>
                  <Form.Item
                    label={"Activité principale"}
                    name="activity_id"
                    required={true}
                  >
                    <Select>
                      {activities.map((activity) => {
                        return (
                          <Option value={activity.id} key={activity.value}>
                            {activity.label}
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                  <div className="info">
                    <FontAwesomeIcon icon={faCloudSun} />
                    <p>
                      Ces informations permettent au propriétaire de mieux vous
                      connaître et ainsi de doubler vos chances d’être
                      selectionné.
                    </p>
                  </div>
                  {getActivityType(form.getFieldValue("activity_id")) ==
                    "employee" && (
                    <>
                      <Form.Item
                        label={"Nom de l'entreprise"}
                        name="company_name"
                        required={true}
                      >
                        <Input />
                      </Form.Item>
                      <Space align="baseline">
                        <Form.Item
                          label={"Prénom du responsable"}
                          name="employer_firstname"
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          label={"Nom du responsable"}
                          name="employer_lastname"
                        >
                          <Input />
                        </Form.Item>
                      </Space>
                      <Space align="baseline">
                        <Form.Item
                          label={"Mobile du responsable"}
                          name="employer_phone"
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          label={"Mail du responsable"}
                          name="employer_email"
                        >
                          <Input />
                        </Form.Item>
                      </Space>
                      <Form.Item label={"Ancienneté"} name="seniority">
                        <Input />
                      </Form.Item>
                    </>
                  )}

                  <Form.Item
                    label={"Vous êtes"}
                    name="housing_situation"
                    required={true}
                  >
                    <Radio.Group buttonStyle="solid">
                      <Radio.Button value={"owner"}>Propriétaire</Radio.Button>
                      <Radio.Button value={"tenant"}>Locataire</Radio.Button>
                      <Radio.Button value={"free_accommodation"}>
                        Logé à titre gratuit
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </>
              );
            }}
          </Form>
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
