import { useEffect, useState } from "react";
import { Form, Badge, Button, Steps } from "antd";
import FirstForm from "./Form/FirstForm";
import SecondForm from "./Form/SecondForm";
import ThirdForm from "./Form/ThirdForm";
import RevenuesForm from "./Form/RevenuesForm";
import { Tabs, Affix, Modal } from "antd";
import GarantForm from "./Form/GarantForm";
import { getCookies } from "cookies-next";
import router from "next/router";
import HttpService from "../../services/HttpService";
import TenantContainer from "../../containers/Tenant/TenantContainer";

export default function Tenant(param) {
  const initFormData = [
    {
      name: "statut_gl",
      value: "",
    },
    {
      name: "civil",
      value: "",
    },
    {
      name: "firstname",
      value: "",
    },
    {
      name: "lastname",
      value: "",
    },
    {
      name: "email",
      value:'',
    },
    {
      name: "phone",
      value: "",
    },
    {
      name: "born_date",
      value: "",
    },
    {
      name: "born_place",
      value: "",
    },
    {
      name: "housing_type",
      value: "",
    },
    {
      name: "address",
      value: "",
    },
    {
      name: "activity_id",
      value: "",
    },
    {
      name: "owner_lastname",
      value: "",
    },
    {
      name: "owner_firstname",
      value: "",
    },
    {
      name: "owner_phone",
      value: "",
    },
    {
      name: "owner_email",
      value: "",
    },
    {
      name: "employer_lastname",
      value: "",
    },
    {
      name: "employer_firstname",
      value: "",
    },
    {
      name: "employer_phone",
      value: "",
    },
    {
      name: "employer_email",
      value: "",
    },
    {
      name: "snmap_1",
      value: "",
    },
    {
      name: "snmap_2",
      value: "",
    },
    {
      name: "snmap_3",
      value: "",
    },
    {
      name: "caf",
      value: "",
    },
    {
      name: "isr",
      value: "",
    },
    {
      name: "otherR",
      value: "",
    },
    {
      name: "rnme",
      value: "",
    },
    {
      name: "caf",
      value: "",
    },
    {
      name: "identity",
      value: [],
    },
    {
      name: "justify",
      value: [],
    },
    {
      name: "altg",
      value: [],
    },
    {
      name: "rib",
      value: [],
    },
    {
      name: "tdbs",
      value: [],
    },
    {
      name: "ddbc",
      value: [],
    },
    {
      name: "studentCard",
      value: [],
    },
    {
      name: "tdq",
      value: [],
    },
    {
      name: "garant",
      value: [],
    },
    {
      name: "isr_1",
      value: "",
    },
    {
      name: "isr_2",
      value: "",
    },
    {
      name: "loyer",
      value: "",
    },
    {
      name: "displayDone",
      value: 0,
    },
  ];
  const [formData, setFormData] = useState([initFormData]);
  const [display, setDisplay] = useState(1);
  const [folder, setFolder] = useState(0);
  const [i, seti] = useState(1);
  const [visible, setVisible] = useState(false);
  
  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (getCookies("mail")) {
      setCurrentData("email", String(getCookies("mail")?.mail)
      .replace("%40", "@")
      .replace("undefined", ""));

    }
  }, []);


  function setCurrentData(name, value) {
    setFormData((formData) => {
      formData[folder].find((e) => e.name == name).value = value;
      return [...formData];
    });
  }

  function getData(name, index) {
    return formData[index].find((e) => e.name == name).value;
  }

  function submit() {
    console.log("---------------------------");
    console.log(JSON.stringify(formData));
    console.log("---------------------------");

    /*
    1. Enregistre le dossier
    2. Si l'utilisateur n'est pas login ->
    3. Definir un mdp dans la page suivante
    */

    if (false) {
      return;
    }
    if (/*utilisateur non connecté*/ false) {
      /* Rediriger vers la page de connexion */
      return;
    }
    /* Redirection vers la page de définition de mot de passe */
    return;
  }

  function getText() {
    if (display == 1) {
      if (getData("statut_gl", folder) == null) {
        return (
          <>
            <h2>Vous êtes candidat locataire ou garant et vous souhaitez gagner du
              temps et présenter un dossier conforme aux agences et / ou
              propriétaire ?</h2>
            <h2>Nous sommes là pour ça !</h2>
          </>
        );
      }
      if (getData("statut_gl", folder) == "Locataire") {
        return (
          <>
            <h2>Commencez à créer votre dossier locataire en quelques clics.{" "}</h2>

            <h2>Présentez votre dossier à n'importe quel particulier ou agence.{" "} </h2>

            <h2>Vos données sont stockées en France et ne sont pas revendues.{" "}</h2>
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
      if (getData("statut_gl", folder) == "Locataire") {
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
      if (getData("statut_gl", folder) == "Locataire") {
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
        {(!getData("firstname", index)
          ? "Prenom"
          : getData("firstname", index)) +
          " " +
          (!getData("lastname", index) ? "Nom" : getData("lastname", index))}
        <br />
        {getData("statut_gl", index) ? getData("statut_gl", index) : " \n "}
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

  useEffect(() => {
    console.log(formData);
    const mail =
      String(getCookies("mail")?.mail)
        .replace("%40", "@")
        .replace("undefined", "") ?? "";
  }, [formData]);

  function add() {
    setFormData([...formData, initFormData]);
    seti(i + 1);
    panes.push({ key: i });
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
    if (getData("displayDone", folder) >= value - 1) setDisplay(value);
  }

  function setDisplayDone(value) {
    setCurrentData("displayDone", value);
  }

  const handleUserRegister = () => {
    setDisplayDone(display);
    setDisplay(display + 1);
  };

  function prev() {
    setDisplay(display - 1);
  }
  useEffect(() => {
  }, [folder]);

  function getForm(foldersss)  {

    return (
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 13 }}
        onFinish={handleUserRegister}
        fields={formData[folder]}
      >
        {display == 1 && (
          <FirstForm
            current={foldersss}
            data={formData[folder]}
            setFormData={setFormData}
            setCurrentData={setCurrentData}
          />
        )}
        {display == 2 && (
          <RevenuesForm
            current={foldersss}
            data={formData[folder]}
            setCurrentData={setCurrentData}
          />
        )}
        {display == 3 &&
          (formData[folder].find((e) => e.name == "statut_gl").value ==
          "Locataire" ? (
            <SecondForm
              current={foldersss}
              data={formData[folder]}
              setCurrentData={setCurrentData}
            />
          ) : (
            <GarantForm
              current={foldersss}
              data={formData[folder]}
              setCurrentData={setCurrentData}
              formData={formData}
            />
          ))}
        {display == 4 && (
          <ThirdForm
            current={foldersss}
            data={formData[folder]}
            setCurrentData={setCurrentData}
          />
        )}
        <button type="submit" style={{ display: "none" }} />
      </Form>
    );
  }

  return (
    <TenantContainer>
    <Modal title="Erreur" visible={visible}  onOk={handleOk} onCancel={handleCancel}>
        <p>Erreur d'accès à la base de données</p>
        <p>Un message vient d'être envoyé à nos développeurs</p>
      </Modal>
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
            <Button type="success" onClick={add} className="bottomButton">
              Ajouter une personne
            </Button>
          </Form.Item>
        )}
        {display == 4 && (
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button
              type="success"
              onClick={() => submit()}
              className="bottomButton"
            >
              Enregistrer
            </Button>
          </Form.Item>
        )}
      </div>
    </TenantContainer>
  );
}
