import { StartWrapper } from "./Start.style";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Spin, Space, Button } from "antd";
import { Form, Input, Select, DatePicker } from "antd";
import { StepPanel } from "./StepPanel";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { default as MySelect } from "../../components/global/Select/select";
import { default as MyInputN } from "../../components/global/InputN/inputN";
import { HiInformationCircle } from "react-icons/hi";
import Step1Form from "./Steps/Step1";
import Step2Form from "./Steps/Step2";
import Step3Form from "./Steps/Step3";
import Step4Form from "./Steps/Step4";
import Step5Form from "./Steps/Step5";
import Step6Form from "./Steps/Step6";
import Step7Form from "./Steps/Step7";
import Link from "next/link";

export default function Start() {
  const [loaded, setLoaded] = useState(false);

  const [travail, setTravail] = useState("");
  const [contratTravail, setContratTravail] = useState("");
  const [essai, setEssai] = useState(false);
  const [primes, setPrimes] = useState(false);
  const [revenuAdd, setRevenuAdd] = useState(false);

  const [coemprunteur, setCoemprunteur] = useState("seul");
  const [themes, setThemes] = useState([]);
  const [maxStep, setMaxStep] = useState(0);


  useEffect(() => {
    Aos.init({ duration: 1500 });
    setLoaded(true);
    console.log("loaded");
  }, []);
  const [stepForm] = Form.useForm();






  const StepAdeux1Form = () => {
    return (
      <div className="step2">
        <div className="title">Vos informations</div>
        <div className="ligne">
          <Form.Item
            name="field5"
            label="il a"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <MyInputN /> <span>ans&nbsp; </span>
          </Form.Item>
          <Form.Item name="field6" label="et il ">
            <MySelect>
              <Select.Option value="0">a pas</Select.Option>
              <Select.Option value="1">a un</Select.Option>
              <Select.Option value="2">a deux</Select.Option>
              <Select.Option value="3">a trois</Select.Option>
              <Select.Option value="4">a quatre</Select.Option>
              <Select.Option value="5">a cinq</Select.Option>
              <Select.Option value="6">a six</Select.Option>
            </MySelect>
          </Form.Item>
          <div>&nbsp; enfants à charge</div>
        </div>

        <Form.Item name="field6" label="Il habite" style={{ width: 300 }}>
          <Input />
        </Form.Item>
        <div className="ligne">
          <Form.Item name="field4" label="il est">
            <MySelect>
              <Select.Option value="locataire">
                locataire de son logement
              </Select.Option>
              <Select.Option value="neuf">
                propriétaire de son logement
              </Select.Option>
              <Select.Option value="gratuitement">
                hebergé gratuitement
              </Select.Option>
              <Select.Option value="fonction">
                dans un logement de fonction
              </Select.Option>
            </MySelect>
          </Form.Item>

          <Form.Item
            name="field5"
            label="et son loyer est de"
            rules={[{ type: "number", min: 0 }]}
          >
            <MyInputN /> <span>€ par mois</span>
          </Form.Item>
        </div>
      </div>
    );
  };

  const StepAdeux2Form = () => {
    return (
      <div className="step3">
        <div className="title">Vos informations</div>
        <span className="ligne">
          <Form.Item name="field10" label="il est" className="quartwidth">
            <MySelect selectValue={travail} handleChange={setTravail}>
              <Select.Option value="privé">salarié dans le privé</Select.Option>
              <Select.Option value="public">
                salarié dans le public
              </Select.Option>
              <Select.Option value="autre">autre statut</Select.Option>
            </MySelect>
          </Form.Item>
          {travail === "privé" && (
            <Form.Item name="field11" label="en" className="quartwidth">
              <MySelect
                selectValue={contratTravail}
                handleChange={setContratTravail}
              >
                <Select.Option value="cdi">CDI</Select.Option>
                <Select.Option value="cdd">CDD</Select.Option>
              </MySelect>
            </Form.Item>
          )}
          {contratTravail === "cdi" && travail === "privé" && (
            <Form.Item name="field12">
              <MySelect>
                <Select.Option value="cadre">cadre</Select.Option>
                <Select.Option value="non_cadre">non cadre</Select.Option>
              </MySelect>
            </Form.Item>
          )}
          {contratTravail === "cdi" && travail === "privé" && (
            <Form.Item name="field13">
              <MySelect selectValue={essai} handleChange={setEssai}>
                <Select.Option value={true}>en période d'essai</Select.Option>
                <Select.Option value={false}>
                  hors période d'essai
                </Select.Option>
              </MySelect>
            </Form.Item>
          )}

          {contratTravail === "cdd" && (
            <Form.Item name="field14" label="Depuis">
              <DatePicker />
            </Form.Item>
          )}
          {travail === "public" && (
            <Form.Item
              name="field40"
              label="avec un statut de"
              className="quartwidth"
            >
              <MySelect
                handleChange={setContratTravail}
                selectValue={contratTravail}
              >
                <Select.Option value="titulaire">titulaire</Select.Option>
                <Select.Option value="contractuel">contractuel</Select.Option>
                <Select.Option value="stagiaire">stagiaire</Select.Option>
              </MySelect>
            </Form.Item>
          )}
          {contratTravail === "contractuel" && (
            <Form.Item name="field41" label="depuis">
              <DatePicker />
            </Form.Item>
          )}
          {travail === "autre" && (
            <Form.Item name="field42" label="plus précisement">
              <MySelect>
                <Select.Option value="travailleur indépendant">
                  travailleur indépendant
                </Select.Option>
                <Select.Option value="médecin">médecin</Select.Option>
                <Select.Option value="autre libéral">
                  autre libéral
                </Select.Option>
                <Select.Option value="retraité">retraité</Select.Option>
                <Select.Option value="chef d'entreprise">
                  chef d'entreprise
                </Select.Option>
                <Select.Option value="portage salarial">
                  portage salarial
                </Select.Option>
                <Select.Option value="artisan">artisan</Select.Option>
                <Select.Option value="intermittent du spectacle">
                  intermittent du spectacle
                </Select.Option>
                <Select.Option value="agriculteur">agriculteur</Select.Option>
                <Select.Option value="agriculteur">sans activité</Select.Option>
              </MySelect>
            </Form.Item>
          )}
          {travail === "autre" && (
            <Form.Item name="field43" label="Depuis">
              <DatePicker />
            </Form.Item>
          )}
        </span>
        {essai === true && travail === "privé" && contratTravail === "cdi" && (
          <div className="bulle">
            Vos revenus ne seront pas pris en compte en période d'essai. Vous
            pouvez attendre ou, si c'est possible, vous accorder avec votre
            employeur pour confirmer votre CDI.
          </div>
        )}
        {contratTravail === "cdd" && (
          <div className="bulle">
            <HiInformationCircle /> Vos revenus en CDD ne seront pas pris en
            compte par les banques dans le calcul de votre capacité d'emprunt
          </div>
        )}
      </div>
    );
  };

  const StepAdeux3Form = () => {
    return (
      <div className="step4">
        <div className="title">Les revenus de mon coemprunteur</div>
        <div className="ligne" style={{ width: "100%" }}>
          <Form.Item name="field15" label="Il reçoit un salaire fixe ">
            <MySelect>
              <Select.Option value="mensuel">mensuel</Select.Option>
              <Select.Option value="annuel">annuel</Select.Option>
            </MySelect>
          </Form.Item>
          <Form.Item name="field16" title="truc" label="">
            <MySelect>
              <Select.Option value="net">
                net avant impôt
              </Select.Option>
              <Select.Option value="brut">
                brut
              </Select.Option>
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
          <Form.Item name="field22" label="Il " className="quartwidth">
            <MySelect selectValue={revenuAdd} handleChange={setRevenuAdd}>
              <Select.Option value={true}>a</Select.Option>
              <Select.Option value={false}>n'a pas</Select.Option>
            </MySelect>
          </Form.Item>
          <span>
            de revenu additionnel (locatif, autoentreprise, pension alimentaire,
            allocation).
          </span>
        </div>
        {revenuAdd == true ? (
          <div className="ligne">
            <Form
              name="dynamic_form_nest_item"
              onFinish={onFinish}
              autoComplete="off"
            >
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
  };



  const onFinish = (fieldsValue) => {
    const formData = stepForm.getFieldsValue();

    // POST the data to backend and show Notification
    console.log(formData);
  };

  const steps =
    coemprunteur === "adeux"
      ? [
          {
            step: 1,
            title: "Votre projet",
            content: <Step1Form coemprunteur={coemprunteur} setCoemprunteur={setCoemprunteur} />,
          },
          {
            step: 2,
            title: "Vos informations",
            content: <Step2Form />,
          },
          {
            step: 3,
            title: "Votre situation pro",
            content: <Step3Form />,
          },
          {
            step: 4,
            title: "Vos revenus",
            content: <Step4Form />,
          },
          {
            step: 5,
            title: "La situation de votre coemprunteur",
            content: <StepAdeux1Form />,
          },
          {
            step: 6,
            title: "La situation pro de votre coemprunteur",
            content: <StepAdeux2Form />,
          },
          {
            step: 7,
            title: "Les revenus de votre coemprunteur",
            content: <StepAdeux3Form />,
          },

          {
            step: 8,
            title: "Vos charges",
            content: <Step5Form />,
          },
          {
            step: 9,
            title: "Votre apport",
            content: <Step6Form />,
          },
          {
            step: 10,
            title: "Finalisation de mon projet",
            content: <Step7Form />,
          },
        ]
      : [
          {
            step: 1,
            title: <div>Ma situation</div>,
            content: <Step2Form />,
          },
          {
            step: 2,
            title: (
              <div classname={false ? "cliquable" : "pasCliquable"}>
                Mes informations
              </div>
            ),
            content: <Step3Form />,
          },
          {
            step: 3,
            title: "Mes revenus",
            content: <Step4Form />,
          },
          {
            step: 4,
            title: "Mes charges",
            content: <Step5Form />,
          },

          {
            step: 5,
            title: "Mon immobilier",
            content: <Step6Form />,
          },
          {
            step: 6,
            title: "Ma trésorerie",
            content: <Step7Form />,
          },
        ];


  if (!loaded)
    return (
      <div className="loading_spinner">
        <Space size="middle">
          <Spin size="large" className="loading_spinner" />
        </Space>
      </div>
    );
  else
    return (
      <StartWrapper>
        <Form form={stepForm} onFinish={onFinish}>
          <StepPanel
            steps={steps}
            maxStep={maxStep}
            setMaxStep={setMaxStep}
            themes={themes}
            setThemes={setThemes}
          />
        </Form>
      </StartWrapper>
    );
}
