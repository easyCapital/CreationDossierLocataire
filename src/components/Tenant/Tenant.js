import { useEffect, useState } from "react";
import { Form, Button, Steps } from "antd";
import FirstForm from "./Form/FirstForm";
import TenantForm from "./Form/TenantForm";
import JustifyForm from "./Form/JustifyForm";
import RevenuesForm from "./Form/RevenuesForm";
import { Tabs, Affix, Modal } from "antd";
import GarantForm from "./Form/GarantForm";
import HttpService from "../../services/HttpService";
import TenantContainer from "../../containers/Tenant/TenantContainer";
import { useDispatch, useSelector } from "react-redux";
import { LoadProfileAction } from "../../redux/actions/ProfileActions";
import { useRouter } from "next/router";

export default function Tenant(slug) {
  function getPrevDate(val) {
    var x = new Date();
    x.setDate(1);
    x.setMonth(x.getMonth() - val);
    return x;
  }


  function slugToFile(slug, type, index){
    
    const http = new HttpService();
    let url = "files/" + slug;
    http.getData(url, true).then((data) =>{
      setData(type, data, index)
    }).catch((error) => {
        console.log(error);
      });
  }

  const initFormData = [
    {
      name: "id",
      value: 0,
    },
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
      name: "files",
      value: [],
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
      name: "CAF_aid",
      value: "",
    },
    {
      name: "isr",
      value: "",
    },
    {
      name: "other_income",
      value: "",
    },
    {
      name: "estimated_income",
      value: "",
    },
    {
      name: "identity_card",
      value: [],
    },
    {
      name: "tenants",
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
      name: "guarant_possibilities",
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
  const [load, setLoad] = useState(false);
  const [i, seti] = useState(1);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = Form.useForm();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.userDetails.userProfile);
  const router = useRouter();
  const [folderUsersNumber, setFolderUsersNumber] = useState(null);
  const [imgs, setImgs] = useState([])

  useEffect(() => {
    dispatch(LoadProfileAction());
  }, []);

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  function baseToImg(base, type, index){
    var image = new Image();
    image.src = 'data:image/png;base64,' + base;
    document.body.appendChild(image);
    setImgs([... imgs, image])
    console.log(imgs)
    return image
  }
  
  const base64toBlob = (data) => {
    // Cut the prefix `data:application/pdf;base64` from the raw base 64
    const base64WithoutPrefix = data.substr('data:application/pdf;base64,'.length);

    const bytes = atob(base64WithoutPrefix);
    let length = bytes.length;
    let out = new Uint8Array(length);

    while (length--) {
        out[length] = bytes.charCodeAt(length);
    }

    return new Blob([out], { type: 'application/pdf' });
};
  function slugTo64(slug, type, extention, index){
    
    const http = new HttpService();
    let url = "files/" + slug;
    http.getData(url).then((data) =>{

      console.log(data.data.file)
      // console.log(base64toBlob(data.data.file))
      if (extention!= "pdf"){
        console.log(baseToImg(data.data.file, type, index))
      }
      return baseToImg(data.data.file, type, index);

    }).catch((error) => {
        console.log(error);
      });
  }

  // Remplir les champs au chargement de la page
  function autoFill() {
    const http = new HttpService();
    let url = "folders/" + router.query.slug;
    http
      .getData(url)
      .then((data) => {
        console.log(data);
        const dataData = data.data;
        const fodlerData = dataData.folder;
        const usersFolder = fodlerData.users;
        const relationships = fodlerData.relationships;

        setFolderUsersNumber(usersFolder.length);
        let panesData = [];
        for (let i = 0; i < usersFolder.length; i++) {
          panesData.push({ key: i });
          setPanes(panesData);
        }
        if (usersFolder.length) {
          let data = [];
          usersFolder.map((user, i) => {
            // setLoad(false)
            const possibilities = user.guarant_possibilities
              ? user.guarant_possibilities
              : [];
            let finalPossibilities = [];
            possibilities.map((possibility) => {
              if (user.pivot.type == "tenant") {
                finalPossibilities.push(possibility.id);
              }
            });
            let finalTenants = [];
            relationships.map((relation) => {
              if (relation.guarant_id == user.id) {
                finalTenants.push(parseInt(relation.tenant_id));
              }
            });

            console.log(user);
            let files = {}
            data.push([
              { name: "id", value: user.id },
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
              { name: "activity_id", value: parseInt(user.activity_id) },
              { name: "civility", value: user.civility },
              {
                name: "displayDone",
                value: user.activity_id
                  ? user.salaries
                    ? user.tenants
                      ? 3
                      : user.guarant_possibilities
                      ? 3
                      : 2
                    : 1
                  : 0,
              },
              {
                name: "snmap_1",
                value: user.salaries[0]?.amount
                  ? parseFloat(user.salaries[0]?.amount)
                  : 0.0,
              },
              {
                name: "snmap_2",
                value: user.salaries[1]?.amount
                  ? parseFloat(user.salaries[1]?.amount)
                  : 0.0,
              },
              {
                name: "snmap_3",
                value: user.salaries[2]?.amount
                  ? parseFloat(user.salaries[2]?.amount)
                  : 0.0,
              },
              { name: "CAF_aid", value: user.CAF_aid },
              { name: "isr", value: user.isr },
              { name: "other_income", value: user.other_income },
              { name: "estimated_income", value: user.estimated_income },
              { name: "identity_card", value: []},
              { name: "justify", value: user.justify },
              { name: "altg", value: user.altg },
              { name: "tdbs", value: user.tdbs },
              { name: "ddbc", value: user.ddbc },
              { name: "studentCard", value: user.studentCard },
              { name: "tdq", value: user.tdq },
              { name: "guarant_possibilities", value: finalPossibilities },
              { name: "tenants", value: finalTenants },
              {
                name: "isr_1",
                value: user.taxes[0]?.amount
                  ? parseFloat(user.taxes[0]?.amount)
                  : 0.0,
              },
              {
                name: "isr_2",
                value: user.taxes[1]?.amount
                  ? parseFloat(user.taxes[1]?.amount)
                  : 0.0,
              },
              { name: "current_rent", value: user.current_rent },
              { name: "files", value: user.files },
              { name: "proof_of_address", value: [] },
              { name: "free_accomodation_certificate", value: [] },
              { name: "RIB", value: [] },
              { name: "net_monthly_salary", value: [] },
              { name: "balance_sheet", value: [] },
              { name: "student_card", value: [] },
              { name: "rent_receipt", value: [] },
              
              user.files.map((file) => {
                console.log(file.type);
                console.log(file.slug);
                console.log(i)
                // data.push(slugToFile(file.slug, file.type, i));
              })

            ]);
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
    if (folderUsersNumber != null && folderUsersNumber == formData.length) {
      setLoad(true);
    }
    if (folderUsersNumber == 0 && formData.length == 1) {
      setLoad(true);
    }
  }, [formData]);

  // Définir une data en fonction de l'index actuelle
  function setCurrentData(name, value) {
    setFormData((formData) => {
      formData[folder]
        ? (formData[folder].find((e) => e.name == name).value = value)
        : "";
      return [...formData];
    });
  }

  // Définir une data en fonction d'une index
  function setData(name, value, index) {
    setFormData((formData) => {
      formData[index]
        ? (formData[index].find((e) => e.name == name).value = value)
        : "";
      return [...formData];
    });
  }

  // Récupérer une data en fonction de l'index et de son nom
  function getData(name, index) {
    return formData[index]?.find((e) => e.name == name).value;
  }

  // Quand on envoie le formulaire
  function submit() {
    handleUserRegister();
  }

  // ça c'est les messages sur la droite
  function getText() {
    if (display == 1) {
      if (getData("type", folder) == null) {
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
      if (getData("type", folder) != "guarant") {
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
      if (getData("type", folder) != "guarant") {
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
      if (getData("type", folder) != "guarant") {
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

  // Titre reactif
  function getTitle(index) {
    return (
      <>
        {getData("firstname", index) ? getData("firstname", index) : "Prenom"}{" "}
        {getData("lastname", index) ? getData("lastname", index) : "Nom"}
        <br />
        {getData("type", index)
          ? String(getData("type", index))
              .replace("tenant", "Locataire")
              .replace("guarant", "Garant")
          : " \n "}
      </>
    );
  }

  // Liste des Steps en fonction de l'index
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

  // Quand on ajoute un dossier utilisateur
  function add() {
    setPanes([...panes, { key: panes.length }]);
    setFormData([...formData, initFormData]);
    panes.push({ key: i + 1 });
    seti(i + 1);
  }

  // Quand on clique sur le bouton '+' sur le menu cliquable 
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

  // Naviguer avec le menu cliquable 
  function showDisplay(value) {
    if (getData("displayDone", folder) >= value - 1) setDisplay(value);
  }

  // Pour définir un display déjà fait pour naviguer avec le menu cliquable
  function setDisplayDone(value) {
    setCurrentData("displayDone", value);
  }

  // Quand on clique sur suivant ou enregistrer
  function save() {
    const http = new HttpService();
    let url = "folders/" + router.query.slug;
    let userData = form.getFieldsValue();
    if (display == 1) {
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
          return data;
        })
        .catch((error) => {
          return error;
        });
    }
    if (display == 2) {
      http
        .putData(
          {
            user: { ...userData, email: getData("email", folder) },
            type: getData("type", folder),
            salaries: [
              {
                date:
                  getPrevDate(1).getFullYear() +
                  "-" +
                  getPrevDate(1).getMonth(),
                amount: getData("snmap_1", folder),
              },
              {
                date:
                  getPrevDate(2).getFullYear() +
                  "-" +
                  getPrevDate(2).getMonth(),
                amount: getData("snmap_2", folder),
              },
              {
                date:
                  getPrevDate(3).getFullYear() +
                  "-" +
                  getPrevDate(3).getMonth(),
                amount: getData("snmap_3", folder)
                  ? getData("snmap_3", folder)
                  : 0,
              },
            ],
            taxes: [
              {
                year: getPrevDate(12).getFullYear(),
                amount: getData("isr_1", folder),
              },
              {
                year: getPrevDate(24).getFullYear(),
                amount: getData("isr_2", folder),
              },
            ],
          },
          url,
          String(localStorage.getItem("user-token"))
        )
        .then((data) => {
          return data;
        })
        .catch((error) => {
          return error;
        });
    }
    if (display == 3) {
      http
        .putData(
          {
            user: { email: getData("email", folder) },
            guarant_possibilities: getData("guarant_possibilities", folder),
            tenants: getData("tenants", folder),
            type: getData("type", folder),
          },
          url,
          String(localStorage.getItem("user-token"))
        )
        .then((data) => {
          return data;
        })
        .catch((error) => {
          return error;
        });
    }
  }

  // On Form Send
  const handleUserRegister = () => {
    save();

    setDisplayDone(display);
    setDisplay(display + 1);
  };

  // Retourner en arrière d'un display
  function prev() {
    setDisplay(display - 1);
  }
  useEffect(() => {}, [folder]);

  // Retourne le formulaire ( Object Form )
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
            <TenantForm
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
          <JustifyForm
            current={foldersss}
            data={formData[folder]}
            setCurrentData={setCurrentData}
            imgs={imgs}
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
              onChange={(e) => {
                setDisplay(1);
                setFolder(e);
                const nextKey = 1 + parseInt(e);
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
