import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faCloudBolt,
  faCloudSun,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Checkbox,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Popconfirm,
  Radio,
  Select,
  Space,
  Tabs,
  Tooltip,
} from "antd";
import { FormWrapper } from "./Form.style";
import { useEffect, useState } from "react";
import moment from "moment";
import HttpService from "../../services/HttpService";
import vos_garants from "../../../public/forms/vos_garants.jpg";
import Image from "next/image";
import SearchLocationInput from "../google/SearchLocationInput";
import { blue } from "../../styles/variables.style";

export default function GarantForm({
  handleCurrentStepChanged,
  validateMessages,
  folder,
  guarantees,
  activities,
  isDesktop,
}) {
  const [form] = Form.useForm();
  const initFormValues = {
    guarantees: [...(folder.guarantees ?? [])].map((e) => e.id),
    guarants: [...(folder.guarants.length ? folder.guarants : [{}])],
  };
  useEffect(() => {
    form.setFieldsValue(initFormValues);
    window.scrollTo(0, 0);
  }, []);
  const { TabPane } = Tabs;
  const { Option } = Select;

  const [activeKey, setActiveKey] = useState(0);

  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };

  const isEligibleForVisale = () => {
    const diff = moment().diff(moment(folder.date_of_birth), "years");
    return diff >= 18 && diff <= 30;
  };

  const onValuesChange = (changedValues, allValues) => {
    const fieldName = Object.keys(changedValues)[0];

    let data = null;
    if (fieldName == "guarants") {
      console.log(changedValues, allValues);
      console.log(form.getFieldValue("guarants"));
      data = {
        guarants: form.getFieldValue("guarants").map((e) => e ?? {}),
      };
    } else {
      data = {
        [fieldName]: changedValues[fieldName],
      };
    }

    let url = "folders/" + folder.slug;
    new HttpService().putData(data, url).then((res) => {
      if (res.success) {
      } else {
        message.error(res.message);
      }
    });
  };

  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: (
        <p>
          <b style={{ color: "#005fc3" }}>Attention !</b> Vous n'avez pas
          renseigné de garantie.
        </p>
      ),
      content: (
        <p>
          Votre dossier a 2 fois plus de chances d'être sélectionné <br />
          si vous présentez des garanties pour votre location. <br />
          Voulez-vous passez à l'étape suivante ?
        </p>
      ),
      onOk() {
        handleCurrentStepChanged(true);
      },
      icon: <FontAwesomeIcon icon={faCloudBolt} style={{ color: blue }} />,
    });
  }

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
              id="vos_garanties"
              src={vos_garants}
              alt="Vos garanties"
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
                    04 <span>Garant(s) </span>
                  </p>
                  <p className="liveSave">
                    Toutes vos données sont sauvegardées à chaque modification !
                  </p>
                  <div className="info">
                    <FontAwesomeIcon icon={faCloudSun} />
                    <div>
                      <p className="important">
                        90% de chances supplémentaires
                      </p>
                      <p>
                        Selon l’agence immobilière, on peut vous demander une ou
                        plusieurs garanties. Afin de maximiser vos chances
                        d’être selectionné
                        {folder.civility == "Mme" ? "e" : ""}, nous vous
                        conseillons de remplir le maximum d’informations.
                      </p>
                    </div>
                  </div>
                  <Form.Item name="guarantees">
                    <Checkbox.Group className="guarantees-checkbox">
                      {guarantees.map((e, i) => (
                        <Tooltip
                          key={"guarantees" + i}
                          placement="bottom"
                          title={
                            e.value == "visale" && !isEligibleForVisale() ? (
                              <p>
                                Vous n'êtes pas éligible à la garantie visale.
                              </p>
                            ) : null
                          }
                        >
                          <Checkbox
                            value={e.id}
                            disabled={
                              e.value == "visale" && !isEligibleForVisale()
                            }
                          >
                            {e.label}
                          </Checkbox>
                        </Tooltip>
                      ))}
                    </Checkbox.Group>
                  </Form.Item>
                  {/* Si garant physique */}
                  {form.getFieldValue("guarantees").includes(1) && (
                    <Form.List name="guarants">
                      {(fields, { add, remove }) => {
                        const onEdit = (targetKey, action) => {
                          if (action === "add") {
                            add();
                            setActiveKey(fields.length);
                          } else {
                            remove(targetKey);
                            setActiveKey(0);
                          }
                        };
                        return (
                          <Tabs
                            type="editable-card"
                            onChange={onChange}
                            activeKey={activeKey.toString()}
                            onEdit={onEdit}
                          >
                            {fields.map((field, index) => (
                              <TabPane
                                tab={"Garant " + (index + 1)}
                                key={index.toString()}
                                closable={index !== 0}
                                closeIcon={
                                  <span onClick={() => remove(field.name)}>
                                    X
                                  </span>
                                }
                              >
                                <Space align="baseline">
                                  <Form.Item
                                    label="Nom"
                                    name={[field.name, "lastname"]}
                                  >
                                    <Input />
                                  </Form.Item>
                                  <Form.Item
                                    label="Prénom"
                                    name={[field.name, "firstname"]}
                                  >
                                    <Input />
                                  </Form.Item>
                                </Space>
                                <Space align="baseline">
                                  <Form.Item
                                    label="Téléphone"
                                    name={[field.name, "mobile"]}
                                  >
                                    <Input />
                                  </Form.Item>
                                  <Form.Item
                                    label="Mail"
                                    name={[field.name, "email"]}
                                  >
                                    <Input />
                                  </Form.Item>
                                </Space>
                                <Form.Item
                                  label={"Adresse"}
                                  name={[field.name, "address"]}
                                >
                                  <SearchLocationInput />
                                </Form.Item>
                                <Form.Item
                                  label="Activité principale"
                                  name={[field.name, "activity_id"]}
                                >
                                  <Select>
                                    {activities.map((activity) => {
                                      return (
                                        <Option
                                          value={activity.id.toString()}
                                          key={activity.value}
                                        >
                                          {activity.label}
                                        </Option>
                                      );
                                    })}
                                  </Select>
                                </Form.Item>
                                <Form.Item
                                  label={
                                    form.getFieldValue([
                                      "guarants",
                                      index,
                                      "activity_id",
                                    ]) != "18"
                                      ? "Revenus d'activité"
                                      : "Pension de retraite"
                                  }
                                  name={[field.name, "monthly_income"]}
                                >
                                  <InputNumber pattern="\d*" />
                                </Form.Item>
                                <input type="number" pattern="[0-9]*" inputmode="numeric"></input>
                                <Space align="baseline">
                                  {[2, 1].map((e) => {
                                    const date = moment()
                                      .subtract(e, "year")
                                      .startOf("year")
                                      .format("YYYY");
                                    return (
                                      <Form.Item
                                        label={date}
                                        name={[
                                          field.name,
                                          "annual_income_tax_" + e,
                                        ]}
                                        key={e}
                                      >
                                        <InputNumber pattern="\d*" step={1} />
                                      </Form.Item>
                                    );
                                  })}
                                </Space>
                                <Form.Item
                                  label="Votre garant est"
                                  name={[field.name, "housing_situation"]}
                                >
                                  <Radio.Group buttonStyle="solid">
                                    <Radio.Button value={"owner"}>
                                      Propriétaire
                                    </Radio.Button>
                                    <Radio.Button value={"tenant"}>
                                      Locataire
                                    </Radio.Button>
                                    <Radio.Button value={"free_accommodation"}>
                                      Logé à titre gratuit
                                    </Radio.Button>
                                  </Radio.Group>
                                </Form.Item>
                                {form.getFieldValue([
                                  "guarants",
                                  index,
                                  "housing_situation",
                                ]) == "tenant" && (
                                  <Form.Item
                                    label="Montant du loyer"
                                    name={[field.name, "rent_amount"]}
                                  >
                                    <InputNumber pattern="\d*" />
                                  </Form.Item>
                                )}
                              </TabPane>
                            ))}
                          </Tabs>
                        );
                      }}
                    </Form.List>
                  )}
                </>
              );
            }}
          </Form>
        </div>
      </div>
      <div className="arrows right">
        {isDesktop ? (
          <Popconfirm
            placement={"left"}
            title={
              <p>
                <b style={{ color: "#005fc3" }}>Attention !</b> Vous n'avez pas
                renseigné de garantie.
                <br />
                Votre dossier a 2 fois plus de chances d'être sélectionné <br />
                si vous présentez des garanties pour votre location. <br />
                Voulez-vous passez à l'étape suivante ?
              </p>
            }
            onConfirm={() => handleCurrentStepChanged(true)}
            okText="Oui"
            cancelText="Non"
            disabled={form.getFieldValue("guarantees")?.length}
            icon={<FontAwesomeIcon icon={faCloudBolt} />}
          >
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              onClick={
                form.getFieldValue("guarantees")?.length
                  ? () => handleCurrentStepChanged(true)
                  : null
              }
            />
          </Popconfirm>
        ) : (
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            onClick={
              form.getFieldValue("guarantees")?.length
                ? () => handleCurrentStepChanged(true)
                : showConfirm
            }
          />
        )}
      </div>
    </FormWrapper>
  );
}
