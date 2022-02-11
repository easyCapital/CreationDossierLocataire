import { useEffect, useState } from "react";
import { Form, Badge, Button, Steps } from "antd";
import FirstForm from "./Form/FirstForm";
import SecondForm from "./Form/SecondForm";
import ThirdForm from "./Form/ThirdForm";
import RevenuesForm from "./Form/RevenuesForm";
import { Tabs, Affix } from "antd";
import GarantForm from "./Form/GarantForm";
import { PlusOutlined } from "@ant-design/icons";
import { set } from "react-hook-form";

export default function Tenant() {
  const [formInput, setFormInput] = useState({});
  const [display, setDisplay] = useState(1);
  const [folder, setFolder] = useState(0);
  const [counter, setCounter] = useState(0);
  const [ammount, setAmmount] = useState(1);
  const [i, seti] = useState(1);

  function getText() {
    if (display == 1) {
      if (formInput[folder] == null) {
        return (
          <>
            <h2>
              Vous êtes candidat locataire ou garant et vous souhaitez gagner du
              temps et présenter un dossier conforme aux agences et / ou
              propriétaire ?
            </h2>
            <h2>Nous sommes là pour ça !</h2>
          </>
        );
      }
      if (formInput[folder].statut_gl == null) {
        return (
          <>
            <h2>
              Vous êtes candidat locataire ou garant et vous souhaitez gagner du
              temps et présenter un dossier conforme aux agences et / ou
              propriétaire ?
            </h2>
            <h2>Nous sommes là pour ça !</h2>
          </>
        );
      }
      if (formInput[folder].statut_gl == "Locataire") {
        return (
          <>
            <h2>
              Commencez à créer votre dossier locataire en quelques clics.{" "}
            </h2>

            <h2>
              Présentez votre dossier à n'importe quel particulier ou agence.{" "}
            </h2>

            <h2>
              Vos données sont stockées en France et ne sont pas revendues.{" "}
            </h2>
          </>
        );
      }
      return (
        <>
          <h2>
            Saviez-vous qu'un dossier complet permet d'améliorer vos chances
            d'être retenu par le propriétaire ?{" "}
          </h2>
        </>
      );
    }

    if (display == 2) {
      if (formInput[folder].statut_gl == "Locataire") {
        return (
          <>
            <h2>
              Indiquez ici quels sont vos revenus. Ils permettront au
              propriétaire d'étudier votre situation.
            </h2>
          </>
        );
      }
      return (
        <>
          <h2>
            Votre situation pourra faire la différence par rapport aux autres
            candidats, soyez précis.
          </h2>
        </>
      );
    }
    if (display == 3) {
      if (formInput[folder].statut_gl == "Locataire") {
        return (
          <>
            <h2>
              Présentez ici toutes les options possibles pour garantir votre
              loyer.{" "}
            </h2>

            <h2>
              Seule une de ces solutions pourra être retenue par le
              propriétaire.
            </h2>

            <h2>
              Étudiez bien ces points, c'est souvent ce qui fait la différence.
            </h2>
          </>
        );
      }
      return (
        <>
          <h2>
            Votre situation pourra faire la différence par rapport aux autres
            candidats, soyez précis.
          </h2>
        </>
      );
    }
    if (display == 4) {
      return (
        <>
          <h2>
            Vos pièces justificatives sont stockées en France, non revendues et
            peuvent être supprimées à tout moment. Elles peuvent être, selon
            votre choix, transmises ou non.{" "}
          </h2>
        </>
      );
    }
  }



  function getTitle(index) {
    return (
      <>
        {!formInput[index]
          ? "Nouveau Dossier"
          : (!formInput[index].first_name
              ? "Prenom"
              : formInput[index].first_name) + " " +
            (!formInput[index].last_name ? "Nom" : formInput[index].last_name)}
        <br />
        {formInput[index] && formInput[index].statut_gl ? formInput[index].statut_gl : ''}
      </>
    );
  }

  function getContent(index) {
    return (
      <>
        <Steps current={display - 1} className="steps-p">
          <Step
            title="Projet"
            onClick={() => showDisplay(1)}
            className="hover-pointer"
          />
          <Step
            title="Ressources"
            onClick={() => showDisplay(2)}
            className="hover-pointer"
          />
          <Step
            title="Garants"
            onClick={() => showDisplay(3)}
            className="hover-pointer"
          />
          <Step
            className="last-p"
            title="Justificatifs"
            onClick={() => showDisplay(4)}
          />
        </Steps>
        <br />
        {getForm(index)}
      </>
    );
  }

  const [panes, setPanes] = useState([{ key: 0 }]);

  const { Step } = Steps;
  const { TabPane } = Tabs;

  function add() {
    seti(i + 1);
    panes.push({ key: i });
  }
  function remove() {
    setAmmount(ammount - 1);
  }

  function editPanes(targetKey, action) {
    if (action == "add") {
      seti(i + 1);
      add();
    }
    if (action == "remove") {
      setPanes(panes.slice);
    }
  }

  function showDisplay(value) {
    if (!formInput[folder]) formInput[folder] = {};
    if (formInput[folder].displayDone >= value - 1) setDisplay(value);
  }

  function setDisplayDone(value) {
    setFormInput((formInput) => {
      if (!formInput[folder]) formInput[folder] = {};
      formInput[folder].displayDone = value;
      return { ...formInput };
    });
  }

  const handleUserRegister = () => {
    setDisplayDone(display);
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
          ))}
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
    <>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 13 }}
        onFinish={handleUserRegister}
      >
        <div className="formWrapper">
          <div className="tabWrapper">
            {display > 0 && (
              <Tabs
                className="tabs"
                type="editable-card"
                onChange={(e) => {
                  setDisplay(1);
                  setFolder(e);
                }}
                onEdit={editPanes}
              >
                {console.log(panes)}
                {panes.map((pane) => (
                  <TabPane
                    tab={getTitle(pane.key)}
                    key={pane.key}
                    closable={false}
                  >
                    {getContent(pane.key)}
                  </TabPane>
                ))}
              </Tabs>
            )}
          </div>
          <div className="text">
            <Affix style={{ position: "absolute", top: 380 }}>
              <div className="rightText">{getText()}</div>
            </Affix>
          </div>
        </div>
      </Form>
      <div className="btns">
        {display == 1 && (
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="success" className="bottomButton">
              Retour
            </Button>
          </Form.Item>
        )}
        {display >= 2 && (
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="success" onClick={prev} className="bottomButton">
              Retour
            </Button>
          </Form.Item>
        )}
        {display <= 3 && (
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button
              type="success"
              onClick={handleUserRegister}
              className="bottomButton"
            >
              Suivant
            </Button>
          </Form.Item>
        )}
        {display == 4 && (
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="success" className="bottomButton">
              Enregistrer
            </Button>
          </Form.Item>
        )}
      </div>
    </>
  );
}
