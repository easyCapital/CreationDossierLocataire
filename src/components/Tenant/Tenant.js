import { useEffect, useState } from "react";
import { Form, Button, Steps } from "antd";
import FirstForm from "./Form/FirstForm";
import SecondForm from "./Form/SecondForm";
import ThirdForm from "./Form/ThirdForm";
import RevenuesForm from "./Form/RevenuesForm";
import { Tabs, Affix, Modal } from "antd";
import GarantForm from "./Form/GarantForm";
import { getCookies } from "cookies-next";
import HttpService from "../../services/HttpService";
import TenantContainer from "../../containers/Tenant/TenantContainer";
import { useDispatch, useSelector } from "react-redux";
import { LoadProfileAction } from "../../redux/actions/ProfileActions";
import { useRouter } from "next/router";

export default function Tenant(slug) {
  const initFormData = [
    {
      name: "type",
      value: "",
    },
    {
      name: "civility",
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
      value: "",
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
  const [formData, setFormData] = useState([]);
  const [display, setDisplay] = useState(1);
  const [folder, setFolder] = useState(0);
  const [activeKey, setActiveKey] = useState(0);
  const [load, setLoad] = useState(false);
  const [i, seti] = useState(1);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = Form.useForm();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.userDetails.userProfile);
  const router = useRouter();
  const [folderUsersNumber, setFolderUsersNumber] = useState(null);

  useEffect(() => {
    dispatch(LoadProfileAction());
  }, []);

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  function autoFill() {
    const http = new HttpService();
    console.log(router);
    let url = "folders/" + router.query.slug;
    http
      .getData(url)
      .then((data) => {
        console.log(data);
        const dataData = data.data;
        const fodlerData = dataData.folder;
        const usersFolder = fodlerData.users;
        setFolderUsersNumber(usersFolder.length);
        let panesData = [];
        for (let i = 0; i < usersFolder.length; i++) {
          panesData.push({ key: i });
          console.log(i);
          setPanes(panesData);
        }
        console.log(panes);
        if (usersFolder.length) {
          let data = [];
          usersFolder.map((user, i) => {
            // setLoad(false)
            data.push([
              { name: "firstname", value: user.firstname },
              { name: "lastname", value: user.lastname },
              { name: "email", value: user.email },
              { name: "phone", value: user.phone },
              { name: "born_place", value: user.born_place },
              { name: "born_date", value: user.born_date },
              { name: "address", value: user.address },
              { name: "housing_type", value: user.housing_type },
              { name: "employer_email", value: user.employer_email },
              { name: "employer_firstname", value: user.employer_firstname },
              { name: "employer_lastname", value: user.employer_lastname },
              { name: "employer_phone", value: user.employer_phone },
              { name: "owner_email", value: user.owner_email },
              { name: "owner_firstname", value: user.owner_firstname },
              { name: "owner_lastname", value: user.owner_lastname },
              { name: "owner_phone", value: user.owner_phone },
              { name: "owner_email", value: user.owner_email },
              { name: "owner_firstname", value: user.owner_firstname },
              { name: "owner_lastname", value: user.owner_lastname },
              { name: "owner_phone", value: user.owner_phone },
              { name: "type", value: user.pivot.type },
              { name: "activity_id", value: user.activity_id },
              { name: "civility", value: user.civility },
              { name: "displayDone", value: 0 },
              { name: "snmap_1", value: user.snmap_1 },
              { name: "snmap_2", value: user.snmap_2 },
              { name: "snmap_3", value: user.snmap_3 },
              { name: "caf", value: user.caf },
              { name: "isr", value: user.isr },
              { name: "otherR", value: user.otherR },
              { name: "rnme", value: user.rnme },
              { name: "identity", value: user.identity },
              { name: "justify", value: user.justify },
              { name: "altg", value: user.altg },
              { name: "rib", value: user.rib },
              { name: "tdbs", value: user.tdbs },
              { name: "ddbc", value: user.ddbc },
              { name: "studentCard", value: user.studentCard },
              { name: "tdq", value: user.tdq },
              { name: "garant", value: user.garant },
              { name: "isr_1", value: user.isr_1 },
              { name: "isr_2", value: user.isr_2 },
              { name: "loyer", value: user.loyer },
            ]);
            // setLoad(true);
            // counter = counter+1
          });
          setFormData(data);
        } else {
          setFormData([initFormData]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (router.query.slug) autoFill();
  }, [router]);

  useEffect(() => {
    console.log(folderUsersNumber, formData.length);
    console.log(formData);
    if (folderUsersNumber != null && folderUsersNumber == formData.length) {
      setLoad(true);
    }
    if (folderUsersNumber == 0 && formData.length == 1) {
      setLoad(true);
    }
  }, [formData]);

  useEffect(() => {
    if (load && getCookies("mail")) {
      // setCurrentData(
      //   "email",
      //   String(getCookies("mail")?.mail)
      //     .replace("%40", "@")
      //     .replace("undefined", "")
      // );
    }
  }, [load]);

  function setCurrentData(name, value) {
    setFormData((formData) => {
      formData[folder]
        ? (formData[folder].find((e) => e.name == name).value = value)
        : "";
      return [...formData];
    });
  }

  // function setData(indexP, name, value){
  //   setFormData((formData) => {
  //     formData[indexP] ? formData[indexP].find((e) => e.name == name).value = value : '';
  //     return [...formData];
  //   });
  // }

  function getData(name, index) {
    return formData[index]?.find((e) => e.name == name).value;
  }

  function submit() {
    // console.log("---------------------------");
    // console.log(JSON.stringify(formData));
    // console.log("---------------------------");
    handleUserRegister();
  }

  function getText() {
    if (display == 1) {
      if (formData[folder]?.type == null) {
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
      if (getData("type", folder) == "tenant") {
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
      if (getData("type", folder) == "tenant") {
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
      if (getData("type", folder) == "tenant") {
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
        {(formData[index]?.firstname ? "Prenom" : getData("firstname", index)) +
          " " +
          (formData[index]?.lastname ? "Nom" : getData("lastname", index))}
        <br />
        {formData[index]?.type
          ? String(formData[index].type).replace("tenant", "Locataire")
          : " \n "}
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
  }, [formData]);

  // useEffect(() => {
  //   if (load && formData.length >= 1){
  //     editPanes(activeKey+1, "add")
  //   }
  // }, [load]);

  function add() {
    // const http = new HttpService();
    // let url = "folders";
    // http
    //   .postData(null, url)
    //   .then((data) => {
    //     return data;
    //   })
    //   .catch((error) => {
    //     return error;
    //   });
    setPanes([...panes, { key: panes.length }]);
    setFormData([...formData, initFormData]);
    panes.push({ key: i + 1 });
    seti(i + 1);
    setActiveKey(formData.length - 1);
  }

  function editPanes(targetKey, action) {
    if (action == "addd") {
      seti(targetKey);
      add();
    }
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

  function save() {
    // console.log(form.getFieldsValue());
    const http = new HttpService();
    let nextF = parseInt(folder) + 1;
    let url = "folders/" + router.query.slug;
    const tokenId = localStorage.getItem("user-token");
    let userData = form.getFieldsValue();
    http
      .putData(
        {
          user: { ...userData, email: getData("email", folder) },
          type: getData("type", folder),
        },
        url,
        String(localStorage.getItem("user-token"))
      )
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        return error;
      });
  }

  const handleUserRegister = () => {
    save();

    setDisplayDone(display);
    setDisplay(display + 1);
  };

  function prev() {
    setDisplay(display - 1);
  }
  useEffect(() => {}, [folder]);

  function getForm(foldersss) {
    return (
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 13 }}
        onFinish={handleUserRegister}
        fields={formData[folder]}
        form={form}
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
          (formData[folder].find((e) => e.name == "type").value == "tenant" ? (
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

  return load ? (
    <TenantContainer>
      <Modal
        title="Erreur"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Erreur d'accès à la base de données</p>
        <p>Un message vient d'être envoyé à nos développeurs</p>
      </Modal>
      <div className="formWrapper">
        <div className="tabWrapper">
          {display > 0 && (
            <Tabs
              className="tabs"
              type="editable-card"
              activeKey={activeKey}
              onChange={(e) => {
                setDisplay(1);
                setFolder(e);
                setActiveKey(e);
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
  ) : (
    <p>Loading ...</p>
  );
}
