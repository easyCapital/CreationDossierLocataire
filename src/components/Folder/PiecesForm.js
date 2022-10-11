import {
  faChevronCircleLeft,
  faCloudArrowDown,
  faCloudUploadAlt,
  faEye,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, message, Tabs, Tooltip, Upload } from "antd";
import { FormWrapper } from "./Form.style";
import { useEffect, useState } from "react";
import moment from "moment";
import HttpService from "../../services/HttpService";
import pieces_justificatives from "../../../public/forms/pieces_justificatives.jpg";
import Image from "next/image";
import Confetti from "react-confetti";
import FolderConfirm from "../util/FolderConfirm/FolderConfirm";
import LoadingSpinner from "../../components/global/LoadingSpinner/LoadingSpinner";
import { HandleGeneratePdf } from "../../services/FolderService";

export default function PiecesForm({ folder, handleCurrentStepChanged }) {
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
        ...(!index && person?.activity?.type == "student"
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
                  url: process.env.API_URL + "files/" + file.slug,
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
      label: "Pièce d’identité valide (CNI ou passeport, recto/verso)",
      maxFiles: 2,
    },
    {
      value: "tax_notice",
      label:
        "Avis d'imposition de l'année " +
        moment().subtract(1, "year").startOf("year").format("YYYY"),
      maxFiles: 1,
    },
    {
      value: "school_certificate",
      label: "Certificat de scolarité ou carte étudiante",
      maxFiles: 1,
    },
    {
      value: "proof_of_residence",
      label: "Justificatif de domicile de moins de 3 mois",
      maxFiles: 1,
    },
    {
      value: "three_last_rent_receipts",
      label: "3 dernières quittances de loyer",
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
      label: "Attestation versement pôle emploi",
      maxFiles: 1,
    },
    {
      value: "pension_fund_certificate",
      label: "Attestation caisse de retraite",
      maxFiles: 1,
    },
    {
      value: "host_sworn_statement",
      label: "Attestation sur l'honneur par l'hébergeur",
      maxFiles: 1,
    },
    {
      value: "accounting_certificate",
      label: "Attestation comptable ou Déclaration URSAFF",
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
      label: "Impôt foncier",
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
            url: process.env.API_URL + "files/" + res.data.file.slug,
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
            "Nous avons rencontré une erreur lors de l'enregistrement du fichier."
          );
        }
      })
      .catch((e) => console.log(e));
  }

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
    itemRender: (normal, file, _, actions) => {
      return file.type == "pdf" ? (
        <div className="pdfThumbnail">
          <div>
            <FontAwesomeIcon
              icon={faEye}
              onClick={() =>
                window.open(
                  process.env.API_URL + "files/" + file.name,
                  "_blank"
                )
              }
            />
            <FontAwesomeIcon icon={faTrash} onClick={() => actions.remove()} />
          </div>
          <embed
            src={process.env.API_URL + "files/" + file.name}
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
        message.error("La taille du fichier doit être inférieure à 8MB !");
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
            {() => {
              return (
                <>
                  <p className="stepTitle">
                    05 <span>Pièces justificatives</span>
                  </p>
                  <p className="liveSave">
                    Toutes vos données sont sauvegardées à chaque modification !
                  </p>
                  <Form.List name="persons">
                    {(fields) => (
                      <Tabs>
                        {fields.map((_, index) => (
                          <TabPane
                            tab={index ? "Garant " + index : "Locataire"}
                            key={index.toString()}
                          >
                            <p className="acceptedFormats">
                              Formats acceptés: jpg, png, pdf.
                            </p>
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
              alt="Vos pièces justificatives"
              placeholder="blur"
              priority
            />
          </span>
        </div>
      </div>
      <div className="arrows right">
        <FolderConfirm
          placement="left"
          onConfirm={() => HandleGeneratePdf(folder)}
          disabled={isFormFilled}
        >
          <Tooltip title="Générer le dossier locataire" placement="left">
            <FontAwesomeIcon
              className="downloadFolderIcon"
              icon={faCloudArrowDown}
            />
          </Tooltip>
        </FolderConfirm>
        {isFormFilled && (
          <Confetti confettiSource={confettiSource} recycle={false} />
        )}
      </div>
    </FormWrapper>
  ) : null;
}
