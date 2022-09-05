import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faCloudBolt,
  faCloudSun,
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
  getActivityType,
  validateMessages,
  folder,
  guarantees,
  activities,
  isDesktop,
  maritalStatuses,
}) {
  const [guaranteesForm] = Form.useForm();
  const [guarantsForm] = Form.useForm();
  const initFormValues = {
    guarantees: [...(folder.guarantees ?? [])].map((e) => e.id),
    guarants: [
      ...(folder.guarants.length
        ? folder.guarants.map((guarant) => ({ ...guarant, ...guarant.person }))
        : [{}]),
    ],
  };
  useEffect(() => {
    guaranteesForm.setFieldsValue(initFormValues);
    guarantsForm.setFieldsValue(initFormValues);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // console.log("useffect", guarantsForm.getFieldValue("activity_id"));
  });

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

  const putData = (data) => {
    let url = "folders/" + folder.slug;
    new HttpService().putData(data, url).then((res) => {
      if (!res.success) message.error(res.message);
    });
  };

  const onValuesChangeGuarantees = ({ guarantees }) => {
    const data = {
      guarantees,
    };
    putData(data);
  };

  const onValuesChangeGuarants = ({ action, index, value, attributeName }) => {
    // Autocompletition fields send an object while typing but a string when selecting an autocompleted value
    if (typeof value == "object") value = value.target.value;

    const data = {
      guarants: { action, index, values: { [attributeName]: value } },
    };

    putData(data);
  };

  const preventNonNumerical = (e) => {
    const specialCharRegex = new RegExp("^[0-9]*$");
    const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!specialCharRegex.test(pressedKey)) {
      e.preventDefault();
      return false;
    }
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

  const guarantsWatcher = Form.useWatch("guarantees", guaranteesForm);

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
          <div>
            <Form
              initialValues={initFormValues}
              form={guaranteesForm}
              layout={"vertical"}
              validateMessages={validateMessages}
              onValuesChange={onValuesChangeGuarantees}
            >
              <p className="stepTitle">
                04 <span>Garant(s) </span>
              </p>
              <p className="liveSave">
                Toutes vos données sont sauvegardées à chaque modification !
              </p>
              <div className="info">
                <FontAwesomeIcon icon={faCloudSun} />
                <div>
                  <p className="important">90% de chances supplémentaires</p>
                  <p>
                    Selon l’agence immobilière, on peut vous demander une ou
                    plusieurs garanties. Afin de maximiser vos chances d’être
                    selectionné
                    {folder.civility == "Mme" ? "e" : ""}, nous vous conseillons
                    de remplir le maximum d’informations.
                  </p>
                </div>
              </div>
              <Form.Item name="guarantees" required={true}>
                <Checkbox.Group className="guarantees-checkbox">
                  {guarantees.map((e, i) => (
                    <Tooltip
                      key={"guarantees" + i}
                      placement="bottom"
                      title={
                        e.value == "visale" && !isEligibleForVisale() ? (
                          <p>Vous n'êtes pas éligible à la garantie visale.</p>
                        ) : null
                      }
                    >
                      <Checkbox
                        value={e.id}
                        disabled={e.value == "visale" && !isEligibleForVisale()}
                      >
                        {e.label}
                      </Checkbox>
                    </Tooltip>
                  ))}
                </Checkbox.Group>
              </Form.Item>
            </Form>
            <Form
              form={guarantsForm}
              initialValues={initFormValues}
              layout={"vertical"}
              validateMessages={validateMessages}
            >
              {() => {
                return (
                  <>
                    {/* Si garant physique */}
                    {guarantsWatcher?.includes(1) && (
                      <Form.List name="guarants">
                        {(fields, { add, remove }) => {
                          const onEdit = (targetKey, action) => {
                            if (action === "add") {
                              add();
                              onValuesChangeGuarants({ action: "create" });
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
                                    <span
                                      onClick={() => {
                                        onValuesChangeGuarants({
                                          action: "delete",
                                          index,
                                        });
                                        remove(field.name);
                                      }}
                                    >
                                      X
                                    </span>
                                  }
                                >
                                  <Space align="baseline">
                                    <Form.Item
                                      label="Nom"
                                      name={[field.name, "lastname"]}
                                      onChange={(e) =>
                                        onValuesChangeGuarants({
                                          action: "update",
                                          index,
                                          value: e.target.value,
                                          attributeName: "lastname",
                                        })
                                      }
                                    >
                                      <Input />
                                    </Form.Item>
                                    <Form.Item
                                      label="Prénom"
                                      name={[field.name, "firstname"]}
                                      onChange={(e) =>
                                        onValuesChangeGuarants({
                                          action: "update",
                                          index,
                                          value: e.target.value,
                                          attributeName: "firstname",
                                        })
                                      }
                                    >
                                      <Input />
                                    </Form.Item>
                                  </Space>
                                  <Space align="baseline">
                                    <Form.Item
                                      label="Téléphone"
                                      name={[field.name, "mobile"]}
                                      onChange={(e) =>
                                        onValuesChangeGuarants({
                                          action: "update",
                                          index,
                                          value: e.target.value,
                                          attributeName: "mobile",
                                        })
                                      }
                                    >
                                      <Input />
                                    </Form.Item>
                                    <Form.Item
                                      label="Mail"
                                      name={[field.name, "email"]}
                                      onChange={(e) =>
                                        onValuesChangeGuarants({
                                          action: "update",
                                          index,
                                          value: e.target.value,
                                          attributeName: "email",
                                        })
                                      }
                                    >
                                      <Input />
                                    </Form.Item>
                                  </Space>
                                  <Form.Item
                                    label={"Situation matrimoniale"}
                                    name={[field.name, "marital_status_id"]}
                                  >
                                    <Select
                                      onChange={(e) =>
                                        onValuesChangeGuarants({
                                          action: "update",
                                          index,
                                          value: e,
                                          attributeName: "marital_status_id",
                                        })
                                      }
                                    >
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

                                  <Form.Item
                                    label={"Date de naissance"}
                                    name={[field.name, "date_of_birth"]}
                                    onChange={(e) =>
                                      onValuesChangeGuarants({
                                        action: "update",
                                        index,
                                        value: e.target.value,
                                        attributeName: "date_of_birth",
                                      })
                                    }
                                  >
                                    <Input type={"date"} />
                                  </Form.Item>
                                  <Form.Item
                                    label={"Lieu de naissance"}
                                    name={[field.name, "place_of_birth"]}
                                  >
                                    <SearchLocationInput
                                      placeOfBirthMode
                                      placeholder="Recherchez une ville"
                                      onChange={(e) =>
                                        onValuesChangeGuarants({
                                          action: "update",
                                          index,
                                          value: e,
                                          attributeName: "place_of_birth",
                                        })
                                      }
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    label={"Adresse"}
                                    name={[field.name, "address"]}
                                  >
                                    <SearchLocationInput
                                      placeholder="Recherchez une addresse"
                                      onChange={(e) =>
                                        onValuesChangeGuarants({
                                          action: "update",
                                          index,
                                          value: e,
                                          attributeName: "address",
                                        })
                                      }
                                    />
                                  </Form.Item>
                                  <Form.Item
                                    label="Activité principale"
                                    name={[field.name, "activity_id"]}
                                  >
                                    <Select
                                      onChange={(e) => {
                                        onValuesChangeGuarants({
                                          action: "update",
                                          index,
                                          value: e,
                                          attributeName: "activity_id",
                                        });
                                      }}
                                    >
                                      {activities.map((activity) => {
                                        return (
                                          <Option
                                            value={activity.id}
                                            key={activity.value}
                                          >
                                            {activity.label}
                                          </Option>
                                        );
                                      })}
                                    </Select>
                                  </Form.Item>
                                  {[1, 2].includes(
                                    guarantsForm.getFieldValue([
                                      "guarants",
                                      index,
                                      "activity_id",
                                    ])
                                  ) && ( // student_with_job
                                    <Form.Item
                                      label={"Cursus"}
                                      name={[field.name, "course"]}
                                      required={true}
                                      onChange={(e) =>
                                        onValuesChangeGuarants({
                                          action: "update",
                                          index,
                                          value: e.target.value,
                                          attributeName: "course",
                                        })
                                      }
                                    >
                                      <Input />
                                    </Form.Item>
                                  )}
                                  {getActivityType(
                                    guarantsForm.getFieldValue([
                                      "guarants",
                                      index,
                                      "activity_id",
                                    ])
                                  ) == "employee" && (
                                    <Form.Item
                                      label={"Profession"}
                                      name={[field.name, "profession"]}
                                      required={true}
                                      onChange={(e) =>
                                        onValuesChangeGuarants({
                                          action: "update",
                                          index,
                                          value: e.target.value,
                                          attributeName: "profession",
                                        })
                                      }
                                    >
                                      <Input />
                                    </Form.Item>
                                  )}
                                  <Form.Item
                                    label={
                                      guarantsForm.getFieldValue([
                                        "guarants",
                                        index,
                                        "activity_id",
                                      ]) != "18"
                                        ? "Revenus d'activité"
                                        : "Pension de retraite"
                                    }
                                    name={[field.name, "monthly_income"]}
                                    onChange={(e) =>
                                      onValuesChangeGuarants({
                                        action: "update",
                                        index,
                                        value: e.target.value,
                                        attributeName: "monthly_income",
                                      })
                                    }
                                  >
                                    <InputNumber
                                      onKeyPress={preventNonNumerical}
                                      pattern="[0-9]*"
                                      inputMode="numeric"
                                    />
                                  </Form.Item>
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
                                          onChange={(input) =>
                                            onValuesChangeGuarants({
                                              action: "update",
                                              index,
                                              value: input.target.value,
                                              attributeName:
                                                "annual_income_tax_" + e,
                                            })
                                          }
                                        >
                                          <InputNumber
                                            onKeyPress={preventNonNumerical}
                                            pattern="[0-9]*"
                                            inputMode="numeric"
                                            step={1}
                                          />
                                        </Form.Item>
                                      );
                                    })}
                                  </Space>
                                  <Form.Item
                                    label="Votre garant est"
                                    name={[field.name, "housing_situation"]}
                                    onChange={(e) =>
                                      onValuesChangeGuarants({
                                        action: "update",
                                        index,
                                        value: e.target.value,
                                        attributeName: "housing_situation",
                                      })
                                    }
                                  >
                                    <Radio.Group buttonStyle="solid">
                                      <Radio.Button value={"owner"}>
                                        Propriétaire
                                      </Radio.Button>
                                      <Radio.Button value={"tenant"}>
                                        Locataire
                                      </Radio.Button>
                                      <Radio.Button
                                        value={"free_accommodation"}
                                      >
                                        Logé à titre gratuit
                                      </Radio.Button>
                                    </Radio.Group>
                                  </Form.Item>
                                  {guarantsForm.getFieldValue([
                                    "guarants",
                                    index,
                                    "housing_situation",
                                  ]) == "tenant" && (
                                    <Form.Item
                                      label="Montant du loyer"
                                      name={[field.name, "rent_amount"]}
                                      onChange={(e) =>
                                        onValuesChangeGuarants({
                                          action: "update",
                                          index,
                                          value: e.target.value,
                                          attributeName: "rent_amount",
                                        })
                                      }
                                    >
                                      <InputNumber
                                        onKeyPress={preventNonNumerical}
                                        pattern="[0-9]*"
                                        inputMode="numeric"
                                      />
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
            disabled={guaranteesForm.getFieldValue("guarantees")?.length}
            icon={<FontAwesomeIcon icon={faCloudBolt} />}
          >
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              onClick={
                guaranteesForm.getFieldValue("guarantees")?.length
                  ? () => handleCurrentStepChanged(true)
                  : null
              }
            />
          </Popconfirm>
        ) : (
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            onClick={
              guarantsForm.getFieldValue("guarantees")?.length
                ? () => handleCurrentStepChanged(true)
                : showConfirm
            }
          />
        )}
      </div>
    </FormWrapper>
  );
}
