import { useEffect, useState } from "react";
import { Form, Button, Steps } from "antd";
import FirstForm from "./Form/FirstForm";
import SecondForm from "./Form/SecondForm";
import ThirdForm from "./Form/ThirdForm";
import RevenuesForm from "./Form/RevenuesForm";
import { Tabs } from "antd";
import GarantForm from "./Form/GarantForm";
import {PlusOutlined} from "@ant-design/icons";
import disableScroll from 'disable-scroll';

export default function Tenant() {
  const [formInput, setFormInput] = useState({});
  const [display, setDisplay] = useState(1);
  const [folder, setFolder] = useState(0);
  const [counter, setCounter] = useState(0);
  disableScroll.on();
  const operations = (
    <Button className="margin-bottom-0" onClick={addTab}>Ajouter une personne</Button>
  );
  const { Step } = Steps;
  const { TabPane } = Tabs;

  function showDisplay(value){
    if(!formInput[folder]) formInput[folder] = {};
    if (formInput[folder].displayDone >= value-1) setDisplay(value)
  }

  function setDisplayDone(value){
    setFormInput((formInput) => {
      if(!formInput[folder]) formInput[folder] = {};
      formInput[folder].displayDone = value;
      return {...formInput};
    })
  }

  const handleUserRegister = () => {
    setDisplayDone(display)
    setDisplay(display + 1);
  };

  function prev() {
    setDisplay(display - 1);
  }

  useEffect(() => {
    console.log(formInput);
  }, [formInput]);

  useEffect(() => {
    console.log("folder", folder);
  }, [folder]);

  function addTab() {
    setFormInput((formInput) => {
      if (!formInput[counter + 1]) formInput[counter + 1] = {};
      formInput[counter + 1].first_name = "Nouveau";
      formInput[counter + 1].last_name = "Dossier";
      return { ...formInput };
    });
    setCounter(counter + 1);
  }

  function getForm(foldersss) {
    return (
      <>
        {display == 1 && (
          <FirstForm
            formInput={formInput}
            setFormInput={setFormInput}
            current={foldersss}
          />
        )}
        {display == 2 && (
          <RevenuesForm
            formInput={formInput}
            setFormInput={setFormInput}
            current={foldersss}
          />
        )}
        {display == 3 &&
          formInput[foldersss] &&
          formInput[foldersss].statut_gl &&
          (formInput[foldersss].statut_gl == "Locataire" ? (
            <SecondForm
              formInput={formInput}
              setFormInput={setFormInput}
              current={foldersss}
            />
          ) : (
            <GarantForm
              formInput={formInput}
              setFormInput={setFormInput}
              current={foldersss}
            />
          ))
          }
        {display == 4 && (
          <ThirdForm
            formInput={formInput}
            setFormInput={setFormInput}
            current={foldersss}
          />
        )}
      </>
    );
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 13 }}
      onFinish={handleUserRegister}
    >
      {display > 0 && (
        <Tabs
          tabBarExtraContent={{ right: operations }}
          onChange={(e) => {
            setDisplay(1);
            setFolder(e);
            console.log("FOLDER: " + folder)
            console.log("NEW FOLDER: " + e)
          }}
        >
          {Array(7)
            .fill(undefined)
            .map((e, i) => {
              return (
                <>
                  <TabPane
                    tab={
                      formInput[i] != null
                        ? (formInput[i].first_name == null
                            ? "Prenom"
                            : formInput[i].first_name) +
                          " " +
                          (formInput[i].last_name == null
                            ? "Nom"
                            : formInput[i].last_name) +
                          "\n" +
                          (formInput[i].statut_gl == null
                            ? " "
                            : formInput[i].statut_gl)
                        : i == 0
                        ? "Nouveau Dossier"
                        : ""
                    }
                    key={i}
                  >
                    <Steps current={display - 1} className="steps-p">
                      <Step title="Projet" onClick={() => showDisplay(1,)} className="hover-pointer" />
                      <Step title="Ressources" onClick={() => showDisplay(2)} className="hover-pointer" />
                      <Step title="Garants" onClick={() => showDisplay(3)} className="hover-pointer" />
                      <Step
                        title="Justificatifs"
                        onClick={() => showDisplay(4)  }
                      />
                    </Steps>
                    <br />
                    {getForm(i)}
                  </TabPane>
                </>
              );
            })}
        </Tabs>
      )}
      <div className="whiteBoard"></div>
      <div className="btns">
        {display >= 1 && (
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="success" onClick={prev} className="bottom_button">
              Retour
            </Button>
          </Form.Item>
        )}
        {display <= 3 && (
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button
              type="success"
              onClick={handleUserRegister}
              className="bottom_button"
            >
              Suivant
            </Button>
          </Form.Item>
        )}
        {display == 4 && (
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="success" htmlType="submit" className="bottom_button">
              Envoyer
            </Button>
          </Form.Item>
        )}
      </div>
    </Form>
  );
}
