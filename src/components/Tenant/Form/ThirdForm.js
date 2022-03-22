import { useEffect, useState } from "react";
import { Upload, Form, Button, message } from "antd";
import HttpService from "../../../services/HttpService";

export default function ThirdForm({
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

  const onChange_ = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setCurrentData("identity_card", newFileList);
  };

  const onChange1 = ({ fileList: newFileList }) => {
    setFileList1(newFileList);
    setCurrentData("justify", newFileList);
  };
  const onChange2 = ({ fileList: newFileList }) => {
    setFileList2(newFileList);
    setCurrentData("rib", newFileList);
  };
  const onChange3 = ({ fileList: newFileList }) => {
    setFileList3(newFileList);
    setCurrentData("tdbs", newFileList);
  };
  const onChange4 = ({ fileList: newFileList }) => {
    setFileList4(newFileList);
    setCurrentData("ddbc", newFileList);
  };
  const onChange5 = ({ fileList: newFileList }) => {
    setFileList5(newFileList);
    setCurrentData("studentCard", newFileList);
  };
  const onChange6 = ({ fileList: newFileList }) => {
    setFileList6(newFileList);
    setCurrentData("tdbs", newFileList);
  };
  const onChange7 = ({ fileList: newFileList }) => {
    setFileList7(newFileList);
    setCurrentData("altg", newFileList);
  };
  const onChange8 = ({ fileList: newFileList }) => {
    setFileList8(newFileList);
    setCurrentData("tdq", newFileList);
  };

  const props = {
    listType: "picture-card",
  };

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

    onChange(info) {
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  if (imgs.lenght > 0) {
    return imgs.map((img) => <>{img}</>);
  } else
    return (
      <div className="upload">
        <Upload
          {...uploadprops}
          customRequest={(option) => {
            customRequest(option, "identity_card");
          }}
          listType="picture-card"
        >
          {fileList1.length < 1 && "+ Téléverser"}
        </Upload>
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
            listType="picture-card"
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
            fileList={data.find((e) => e.name == "identity_card").justify}
          >
            {fileList1.length < 1 && "+ Téléverser"}
          </Upload>
        </Form.Item>

        {data.find((e) => e.name == "housing_type").value ==
          "free accommodation" &&
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
                  customRequest(option, "free_accomodation_certificate");
                }}
                {...props}
                fileList={data.find((e) => e.name == "altg").value}
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
            fileList={data.find((e) => e.name == "rib").value}
          >
            {fileList2.length < 1 && "+ Téléverser"}
          </Upload>
        </Form.Item>

        {String(data.find((e) => e.name == "activity_id").value).startsWith(
          "s"
        ) && (
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
              fileList={data.find((e) => e.name == "tdbs").value}
            >
              {fileList3.length < 3 && "+ Téléverser"}
            </Upload>
          </Form.Item>
        )}

        {String(data.find((e) => e.name == "activity_id").value).startsWith(
          "tns"
        ) && (
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
                fileList={data.find((e) => e.name == "ddbc").value}
                
              >
                {fileList4.length < 2 && "+ Téléverser"}
              </Upload>
            </Form.Item>
          </Form.Item>
        )}

        {String(data.find((e) => e.name == "activity_id").value).startsWith(
          "e"
        ) && (
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
              fileList={data.find((e) => e.name == "studentCard").value}

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
              fileList={data.find((e) => e.name == "tdbs").value}
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
              fileList={data.find((e) => e.name == "tdq").value}
            >
              {fileList8.length < 3 && "+ Téléverser"}
            </Upload>
          </Form.Item>
        )}
      </div>
    );
}
