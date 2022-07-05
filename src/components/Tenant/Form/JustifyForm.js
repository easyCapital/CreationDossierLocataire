import { useEffect, useState } from "react";
import { Upload, Form, Button, message } from "antd";
import HttpService from "../../../services/HttpService";

export default function JustifyForm({
  current,
  data,
  setFormData,
  setCurrentData,
  imgs,
}) {
  const [fileList, setFileList] = useState([]);
  const [fileList1, setFileList1] = useState([]);
  const [fileList2, setFileList2] = useState([]);
  const [fileList3, setFileList3] = useState([]);
  const [fileList4, setFileList4] = useState([]);
  const [fileList5, setFileList5] = useState([]);
  const [fileList6, setFileList6] = useState([]);
  const [fileList7, setFileList7] = useState([]);
  const [fileList8, setFileList8] = useState([]);

  function getSetList(index) {
    switch (index) {
      case 1:
        return setFileList;
      case 2:
        return setFileList1;
      case 3:
        return setFileList2;
      case 4:
        return setFileList3;
      case 5:
        return setFileList4;
      case 6:
        return setFileList5;
      case 7:
        return setFileList6;
      case 8:
        return setFileList7;
      case 9:
        return setFileList8;
      default:
        break;
    }
  }

  const props = {
    listType: "picture-card",
  };


  function onRemove(file)  {
    const http = new HttpService();
    let url = "files/" + file.slug;
    console.log(file.slug);
    http
      .deleteData(url)
      .then((data) => { 
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onChange(file, fileList, data, fileListIndex) {
    setCurrentData(data, fileList);
    getSetList(fileListIndex)(fileList);
    if (file.status !== "uploading") {
      // console.log(info.file, info.fileList);
    }
    if (file.status === "done") {
      message.success(`${file.name} fichier sauvegardé`);
    } else if (file.status === "error") {
      message.error(`${file.name} erreur lors de l'envoie.`);
    }
  }

  function customRequest(options, type) {
    const { onSuccess, onError, file } = options;
    let data = new FormData();
    data.append("file", options.file);
    data.append("fileable_id", 1);
    data.append("fileable_type", "App\\Models\\User");
    data.append("type", type);

    new HttpService()
      .postFileData(data, "files", "user-token")
      .then((res) => {
        console.log(res);
        if (res.success == true) {
          onSuccess(file);
        } else {
          const error = new Error(res.message);
          onError({ event: error });
        }
      })
      .catch((err) => {
        console.log(err);
        const error = new Error(err);
        onError({ event: error });
      });
  }

  const uploadprops = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    accept: "image/jpeg,image/png,application/pdf",
  };

  if (imgs.lenght > 0) {
    return imgs.map((img) => <>{img}</>);
  } else
    return (
      <div className="upload">
        <Form.Item
          label="Carte d’identité ou passeport"
          name={"identity"}
          hasFeedback
          rules={[
            {
              required: true,
              message:
                "Veuillez renseigner votre carte d'identité et/ou votre passeport.",
            },
          ]}
        >
          <Upload
            {...uploadprops}
            customRequest={(option) => {
              customRequest(option, "identity_card");
            }}
            onChange={({ file: file, fileList: newFileList }) => {
              onChange(file, newFileList, "identity_card", 1);
            }}
            onRemove={onRemove}
            listType="picture-card"
            fileList={data.find((e) => e.name == "identity_card").value}
          >
            {fileList.length < 2 && "+ Téléverser"}
          </Upload>
        </Form.Item>
        <Form.Item
          label="Justificatif de domicile -3 mois"
          name="justify"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez renseigner Justificatif de domicile -3 mois.",
            },
          ]}
        >
          <Upload
            {...uploadprops}
            customRequest={(option) => {
              customRequest(option, "proof_of_address");
            }}
            {...props}
            fileList={data.find((e) => e.name == "proof_of_address").value}
            onChange={({ file: file, fileList: newFileList }) => {
              onChange(file, newFileList, "proof_of_address", 1);
            }}
          >
            {fileList1.length < 1 && "+ Téléverser"}
          </Upload>
        </Form.Item>

        {data.find((e) => e.name == "housing_type").value ==
          "free_accommodation" &&
          String(data.find((e) => e.name == "activity_id").value).startsWith(
            "e"
          ) && (
            <Form.Item
              label="Attestation logée à titre gratuit"
              name="altg"
              hasFeedback
              rules={[
                {
                  required: true,
                  message:
                    "Veuillez renseigner votre attestation logée à titre gratuit.",
                },
              ]}
            >
              <Upload
                {...uploadprops}
                customRequest={(option) => {
                  customRequest(option, "free_accommodation_certificate");
                }}
                {...props}
                fileList={data.find((e) => e.name == "proof_of_address").value}
                onChange={({ file: file, fileList: newFileList }) => {
                  onChange(file, newFileList, "proof_of_address", 1);
                }}
              >
                {fileList7.length < 1 && "+ Téléverser"}
              </Upload>
            </Form.Item>
          )}
        <Form.Item
          label="RIB"
          name="rib"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez renseigner votre RIB.",
            },
          ]}
        >
          <Upload
            {...uploadprops}
            customRequest={(option) => {
              customRequest(option, "RIB");
            }}
            {...props}
            fileList={data.find((e) => e.name == "RIB").value}
            onChange={({ file: file, fileList: newFileList }) => {
              onChange(file, newFileList, "RIB", 1);
            }}
          >
            {fileList2.length < 1 && "+ Téléverser"}
          </Upload>
        </Form.Item>

        {
        data.find((e) => e.name == "activity_id").value < 7 && (
          <Form.Item
            label="3 derniers bulletins de salaires"
            name="tdbs"
            hasFeedback
            rules={[
              {
                required: true,
                message:
                  "Veuillez renseigner vos 3 derniers bulletins de salaires.",
              },
            ]}
          >
            <Upload
              {...uploadprops}
              customRequest={(option) => {
                customRequest(option, "net_monthly_salary");
              }}
              {...props}
              fileList={data.find((e) => e.name == "net_monthly_salary").value}
              onChange={({ file: file, fileList: newFileList }) => {
                onChange(file, newFileList, "net_monthly_salary", 1);
              }}
            >
              {fileList3.length < 3 && "+ Téléverser"}
            </Upload>
          </Form.Item>
        )}

        {data?.find((e) => e.name == "activity_id").value <= 13 && (data?.find((e) => e.name == "activity_id").value>7) && (
          <Form.Item>
            <Form.Item
              label="2 derniers bilans comptables"
              name="ddbc"
              hasFeedback
              rules={[
                {
                  required: true,
                  message:
                    "Veuillez renseigner vos 2 derniers bilans comptables.",
                },
              ]}
            >
              <Upload
                {...uploadprops}
                customRequest={(option) => {
                  customRequest(option, "balance_sheet");
                }}
                {...props}
                fileList={data.find((e) => e.name == "balance_sheet").value}
                onChange={({ file: file, fileList: newFileList }) => {
                  onChange(file, newFileList, "balance_sheet", 1);
                }}
              >
                {fileList4.length < 2 && "+ Téléverser"}
              </Upload>
            </Form.Item>
          </Form.Item>
        )}

        {data?.find((e) => e.name == "activity_id").value <= 15 && (data?.find((e) => e.name == "activity_id").value>13)&& (
          <Form.Item
            label="Carte d’étudiants"
            name="studenCard"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Veuillez renseigner votre carte d’étudiant.",
              },
            ]}
          >
            <Upload
              {...uploadprops}
              customRequest={(option) => {
                customRequest(option, "student_card");
              }}
              {...props}
              fileList={data.find((e) => e.name == "student_card").value}
              onChange={({ file: file, fileList: newFileList }) => {
                onChange(file, newFileList, "student_card", 1);
              }}
            >
              {fileList5.length < 1 && "+ Téléverser"}
            </Upload>
          </Form.Item>
        )}

        {data.find((e) => e.name == "activity_id").value == 15 && (
          <Form.Item
            label="3 derniers bulletins de salaires"
            name="tdbs"
            hasFeedback
            rules={[
              {
                required: true,
                message:
                  "Veuillez renseigner vos 3 derniers bulletins de salaires.",
              },
            ]}
          >
            <Upload
              {...uploadprops}
              customRequest={(option) => {
                customRequest(option, "net_monthly_salary");
              }}
              {...props}
              fileList={data.find((e) => e.name == "net_monthly_salary").value}
              onChange={({ file: file, fileList: newFileList }) => {
                onChange(file, newFileList, "net_monthly_salary", 1);
              }}
            >
              {fileList6.length < 3 && "+ Téléverser"}
            </Upload>
          </Form.Item>
        )}

        {data.find((e) => e.name == "housing_type").value == "tenant" && (
          <Form.Item
            label="3 dernières quittances "
            name="tdq"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Veuillez renseigner vos 3 dernières quittances.",
              },
            ]}
          >
            <Upload
              {...uploadprops}
              customRequest={(option) => {
                customRequest(option, "rent_receipt");
              }}
              {...props}
              fileList={data.find((e) => e.name == "rent_receipt").value}
              onChange={({ file: file, fileList: newFileList }) => {
                onChange(file, newFileList, "rent_receipt", 1);
              }}
            >
              {fileList8.length < 3 && "+ Téléverser"}
            </Upload>
          </Form.Item>
        )}
      </div>
    );
}
