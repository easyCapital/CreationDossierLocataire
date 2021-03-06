import {
  faChevronCircleLeft,
  faCloudArrowDown,
  faCloudBolt,
  faCloudUploadAlt,
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Form,
  message,
  Modal,
  notification,
  Popconfirm,
  Tabs,
  Tooltip,
  Upload,
} from "antd";
import { FormWrapper } from "./Form.style";
import { useEffect, useState } from "react";
import moment from "moment";
import HttpService from "../../services/HttpService";
import pieces_justificatives from "../../../public/forms/pieces_justificatives.jpg";
import Image from "next/image";
import Confetti from "react-confetti";
import { blue } from "../../styles/variables.style";
import LoadingSpinner from "../../components/global/LoadingSpinner/LoadingSpinner";

export default function PiecesForm({
  folder,
  handleCurrentStepChanged,
  isDesktop,
}) {
  const [form] = Form.useForm();
  const { TabPane } = Tabs;

  const [fieldsToFill, setFieldsToFill] = useState([]);
  const [formValues, setFormValues] = useState(null);

  useEffect(() => {
    let tmpFields = [];
    [folder, ...folder.guarants].map((person, index) => {
      tmpFields.push([
        "valid_identity_piece",
        ...(index || person.is_fiscally_attached == 0 ? ["tax_notice"] : []),
        ...(!index && person?.activity.type == "student"
          ? ["school_certificate"]
          : []),
        ...(person.housing_situation == "tenant"
          ? ["proof_of_residence", "three_last_rent_receipts"]
          : []),
        ...(person.activity?.type == "employee"
          ? ["three_last_salary_sheets"]
          : []),
        ...(person.activity?.type == "unemployment"
          ? ["employment_center_payment_certificate"]
          : []),
        ...(person.activity?.type == "retirement"
          ? ["pension_fund_certificate"]
          : []),
        ...(person.housing_situation == "free_accommodation"
          ? ["host_sworn_statement"]
          : []),
        ...(person.activity?.type == "autoentrepreneur"
          ? ["accounting_certificate", "kbis"]
          : []),
        ...(person.activity?.type == "liberal_profession"
          ? ["professional_card", "resource_certificate"]
          : []),
        ...(person.housing_situation == "owner" ? ["forfeit_tax"] : []),
        ...(!index &&
        person.guarantees.filter((guaranty) => guaranty.value == "visale")
          .length
          ? ["visale_attestation"]
          : []),
      ]);
    });
    setFieldsToFill(tmpFields);
  }, [folder]);

  useEffect(() => {
    setFormValues(null);
    if (fieldsToFill.length) {
      const initFormValues = {
        persons: [],
      };
      fieldsToFill.forEach((person, index) => {
        initFormValues.persons[index] = {};
        person.forEach((e) => {
          initFormValues.persons[index][e] = {
            fileList: (index ? folder.guarants[index - 1] : folder).files
              .filter((file) => file.type == e)
              .map((file) => {
                return {
                  uid: file.id,
                  name: file.slug,
                  type: file.filetype,
                  status: "done",
                  url: "https://app.passloc.fr/api/files/" + file.slug,
                };
              }),
          };
        });
      });
      setFormValues(initFormValues);
      form.setFieldsValue(initFormValues);
    }
  }, [fieldsToFill]);

  const fieldsDetails = [
    {
      value: "valid_identity_piece",
      label: "Pi??ce d???identit?? valide (CNI ou passeport, recto/verso)",
      maxFiles: 2,
    },
    {
      value: "tax_notice",
      label:
        "Avis d'imposition de l'ann??e " +
        moment().subtract(1, "year").startOf("year").format("YYYY"),
      maxFiles: 1,
    },
    {
      value: "school_certificate",
      label: "Certificat de scolarit?? ou carte ??tudiante",
      maxFiles: 1,
    },
    {
      value: "proof_of_residence",
      label: "Justificatif de domicile de moins de 3 mois",
      maxFiles: 1,
    },
    {
      value: "three_last_rent_receipts",
      label: "3 derni??res quittances de loyer",
      maxFiles: 3,
    },
    {
      value: "employment_contract",
      label: "Contrat de travail ou attestation d'emploi",
      maxFiles: 1,
    },
    {
      value: "three_last_salary_sheets",
      label: "3 derniers bulletins de salaires",
      maxFiles: 3,
    },
    {
      value: "employment_center_payment_certificate",
      label: "Attestation versement p??le emploi",
      maxFiles: 1,
    },
    {
      value: "pension_fund_certificate",
      label: "Attestation caisse de retraite",
      maxFiles: 1,
    },
    {
      value: "host_sworn_statement",
      label: "Attestation sur l'honneur par l'h??bergeur",
      maxFiles: 1,
    },
    {
      value: "accounting_certificate",
      label: "Attestation comptable ou D??claration URSAFF",
      maxFiles: 1,
    },
    { value: "kbis", label: "kbis", maxFiles: 1 },
    {
      value: "professional_card",
      label: "Carte professionnelle",
      maxFiles: 2,
    },
    {
      value: "resource_certificate",
      label: "Attestation de ressource",
      maxFiles: 1,
    },
    {
      value: "forfeit_tax",
      label: "Imp??t foncier",
      maxFiles: 1,
    },
    {
      value: "visale_attestation",
      label: "Attestation visale",
      maxFiles: 1,
    },
  ];

  function onRemove(file, type, index) {
    const http = new HttpService();
    let url = "files/" + file.name;
    http.deleteData(url);

    let fileList = [...form.getFieldValue(["persons", index, type]).fileList];
    fileList = fileList.filter((e) => e.name != file.name);

    const newFields = {
      persons: [...form.getFieldValue("persons")],
    };
    newFields.persons[index] = {
      ...form.getFieldValue(["persons", index]),
      [type]: {
        fileList: fileList,
      },
    };

    form.setFieldsValue(newFields);
  }

  function customRequest(options, type, index) {
    setIsUploading(type);
    const { onSuccess, onError, file } = options;
    const person = index ? folder.guarants[index - 1] : folder;
    let data = new FormData();
    data.append("file", options.file);
    data.append("fileable_id", person.id);
    data.append(
      "fileable_type",
      "App\\Models\\" + (index ? "Guarant" : "Folder")
    );
    data.append("type", type);

    new HttpService()
      .postFileData(data, "files")
      .then((res) => {
        if (res.status == 200) {
          onSuccess(file);
        } else {
          const error = new Error(res.statusText);
          onError({ event: error });
        }
        return res.json();
      })
      .then((res) => {
        if (res.data.file) {
          let fileList = [
            ...form.getFieldValue(["persons", index, type]).fileList,
          ];
          fileList = fileList.filter((e) => Number.isInteger(e.uid));
          fileList.push({
            uid: res.data.file.id,
            name: res.data.file.slug,
            type: res.data.file.filetype,
            status: "done",
            url: "https://app.passloc.fr/api/files/" + res.data.file.slug,
          });
          const newFields = {
            persons: [...form.getFieldValue("persons")],
          };
          newFields.persons[index] = {
            ...form.getFieldValue(["persons", index]),
            [type]: {
              fileList: fileList,
            },
          };
          form.setFieldsValue(newFields);
          setIsUploading(false);
        } else {
          message.error(
            "Nous avons rencontr?? une erreur lors de l'enregistrement du fichier."
          );
        }
      })
      .catch((e) => console.log(e));
  }
  const handleGeneratePdf = () => {
    if (folder.user.email_verified_at) {
      window.open(
        "https://app.passloc.fr/api/generatePdf/" + folder.slug,
        "_blank"
      );
    } else {
      notification.info({
        message: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>
              Vous devez valider votre adresse email avant de pouvoir g??n??rer le
              PDF.
            </p>
            <Button onClick={sendValidationMail} type="primary">
              Renvoyer le mail de validation
            </Button>
          </div>
        ),
      });
    }
  };

  const sendValidationMail = () => {
    new HttpService()
      .postData({ email: folder.user.email }, "send-confirmation-mail")
      .then((res) => {
        if (res.success) {
          message.success("Mail envoy??");
        } else {
          message.error("Nous avons rencontr?? une erreur");
        }
      })
      .catch((e) => console.log(e));
  };

  const [isUploading, setIsUploading] = useState(true);

  const uploadprops = {
    headers: {
      authorization: "authorization-text",
    },
    accept: "image/jpeg,image/png,application/pdf",
    listType: "picture-card",
    multiple: true,
    isImageUrl: (file) => {
      return file.type != "pdf";
    },
    itemRender: (normal, file, fileList, actions) => {
      return file.type == "pdf" ? (
        <div className="pdfThumbnail">
          <div>
            <FontAwesomeIcon
              icon={faEye}
              onClick={() =>
                window.open(
                  "https://app.passloc.fr/api/files/" + file.name,
                  "_blank"
                )
              }
            />
            <FontAwesomeIcon icon={faTrash} onClick={() => actions.remove()} />
          </div>
          <embed
            src={"https://app.passloc.fr/api/files/" + file.name}
            width="100"
            height="100"
          ></embed>
        </div>
      ) : (
        normal
      );
    },
    beforeUpload: (file) => {
      const isLt8M = file.size / 1024 / 1024 < 8;

      if (!isLt8M) {
        message.error("La taille du fichier doit ??tre inf??rieure ?? 8MB !");
      }

      return isLt8M;
    },
  };

  const [confettiSource, setConfettiSource] = useState({});
  useEffect(() => {
    setConfettiSource({
      x: window.innerWidth - 80,
      y: window.innerHeight / 2 - 30,
    });
    window.scrollTo(0, 0);
  }, []);

  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    if (form.getFieldValue("persons")) {
      let ok = true;
      form.getFieldValue("persons").forEach((person) => {
        if (
          Object.entries(person).filter((e) => !e[1].fileList.length).length
        ) {
          ok = false;
        }
      });
      setIsFormFilled(ok);
    }
  }, [form.getFieldValue("persons")]);

  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: (
        <p style={{ color: "#005fc3", fontSize: "14px" }}>
          <b>Il manque les pi??ces justificatives... c'est dommage !</b>
        </p>
      ),
      content: (
        <p>
          Un dossier complet augmente vos chances d'??tre retenue par un
          propri??taire ou une agence. <br />
          {/* Pas d'inqui??tudes, vos documents seront prot??g??s par un filigrane et
          vous pourrez choisir ?? qui vous allez transmettre votre dossier.
          <br /> */}
          <b>Voulez-vous tout de m??me g??n??rer le pdf ?</b>
        </p>
      ),
      onOk() {
        handleGeneratePdf();
      },
      icon: <FontAwesomeIcon icon={faCloudBolt} style={{ color: blue }} />,
    });
  }

  return formValues ? (
    <FormWrapper className="reverse">
      <div className="arrows left">
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          onClick={() => handleCurrentStepChanged(false)}
        />
      </div>
      <div className="content">
        <div>
          <Form form={form} initialValues={formValues} layout={"vertical"}>
            {(values, formInstance) => {
              return (
                <>
                  <p className="stepTitle">
                    05 <span>Pi??ces justificatives</span>
                  </p>
                  <p className="liveSave">
                    Toutes vos donn??es sont sauvegard??es ?? chaque modification !
                  </p>
                  <Form.List name="persons">
                    {(fields) => (
                      <Tabs>
                        {fields.map((field, index) => (
                          <TabPane
                            tab={index ? "Garant " + index : "Locataire"}
                            key={index.toString()}
                          >
                            {fieldsToFill[index]?.map((e, i) => (
                              <Form.Item
                                label={
                                  fieldsDetails.find(
                                    (detail) => detail.value == e
                                  ).label
                                }
                                name={e}
                                key={"form_item_" + index + "_" + i}
                              >
                                <Upload
                                  {...uploadprops}
                                  customRequest={(option) => {
                                    customRequest(option, e, index);
                                  }}
                                  fileList={
                                    form.getFieldValue(["persons", index, e])
                                      ?.fileList ?? []
                                  }
                                  onRemove={(file) => onRemove(file, e, index)}
                                >
                                  {(form.getFieldValue(["persons", index, e])
                                    ?.fileList?.length ?? 0) <
                                    fieldsDetails.find(
                                      (detail) => detail.value == e
                                    ).maxFiles &&
                                    (isUploading == e ? (
                                      <LoadingSpinner />
                                    ) : (
                                      <span className="uploadIcon">
                                        <FontAwesomeIcon
                                          icon={faCloudUploadAlt}
                                        />
                                        (4 mb max)
                                      </span>
                                    ))}
                                </Upload>
                              </Form.Item>
                            ))}
                          </TabPane>
                        ))}
                      </Tabs>
                    )}
                  </Form.List>
                </>
              );
            }}
          </Form>
        </div>
        <div className="picture">
          <span>
            <Image
              id="pieces_justificatives"
              src={pieces_justificatives}
              alt="Vos pi??ces justificatives"
              placeholder="blur"
              priority
            />
          </span>
        </div>
      </div>
      <div className="arrows right">
        {isDesktop ? (
          <Popconfirm
            placement="left"
            title={
              <p>
                <b style={{ color: "#005fc3", fontSize: "16px" }}>
                  Il manque les pi??ces justificatives... c'est dommage !
                </b>
                <br />
                Un dossier complet augmente vos chances d'??tre retenue par un
                propri??taire ou une agence. <br />
                {/* Pas d'inqui??tudes, vos documents seront prot??g??s par un
                filigrane et vous pourrez choisir ?? qui vous allez transmettre
                votre dossier. <br /> */}
                <b>Voulez-vous tout de m??me g??n??rer le pdf ?</b>
              </p>
            }
            onConfirm={handleGeneratePdf}
            okText="Oui"
            cancelText="Non"
            disabled={isFormFilled}
            icon={<FontAwesomeIcon icon={faCloudBolt} />}
          >
            <Tooltip title="G??n??rer le dossier locataire" placement="left">
              <FontAwesomeIcon
                icon={faCloudArrowDown}
                onClick={isFormFilled ? handleGeneratePdf : null}
              />
            </Tooltip>
          </Popconfirm>
        ) : (
          <FontAwesomeIcon
            icon={faCloudArrowDown}
            onClick={isFormFilled ? handleGeneratePdf : showConfirm}
          />
        )}
        {isFormFilled && (
          <Confetti confettiSource={confettiSource} recycle={false} />
        )}
      </div>
    </FormWrapper>
  ) : null;
}
