import { useEffect, useState } from "react";
import { Form, Badge, Input, Button, Radio, Select } from "antd";
import { setCookies } from "cookies-next";
import HttpService from "../../../services/HttpService";
const { Option } = Select;

export default function FirstForm({ data, setCurrentData }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const http = new HttpService();
    let url = "activities";
    try {
      const data = http.getData(url);
      data.then((value) => {
        setActivities(value.data);
      });
    } catch (error) {}
  }, []);

  return (
    <div className="currentForm">
      <Form.Item
        label="Statut"
        name="type"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre statut de logement.",
          },
        ]}
      >
        <Radio.Group
          buttonStyle="solid"
          onChange={(e) => {
            setCurrentData("type", e.target.value);
          }}
        >
          <Radio.Button value="guarant">Garant</Radio.Button>
          <Radio.Button value="tenant">Locataire</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Civilité"
        name={"civility"}
        id={"civility"}
        hasFeedback
        // className="clvt"
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre civilité.",
          },
        ]}
      >
        <Radio.Group
          buttonStyle="solid"
          name={"civility"}
          id={"civility"}
          onChange={(e) => {
            setCurrentData("civility", e.target.value);
          }}
        >
          <Radio.Button value="Mr">Mr</Radio.Button>
          <Radio.Button value="Mme">Mme</Radio.Button>
          <Radio.Button value="Mlle">Mlle</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {/* <div className="to-flex" id="to-flex-fc"> */}
      <Form.Item className="wrapperInput">
        <Form.Item
          label="Prenom"
          name={"firstname"}
          className="nameItem"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez renseigner votre prénom.",
            },
          ]}
        >
          <Input
            id={"firstname"}
            type="text"
            placeholder=""
            onChange={(e) => {
              setCurrentData("firstname", e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Nom"
          name={"lastname"}
          className="lastnameItem"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez renseigner votre nom.",
            },
          ]}
        >
          <Input
            id={"lastname"}
            type="text"
            placeholder=""
            onChange={(e) => {
              setCurrentData("lastname", e.target.value);
            }}
          />
        </Form.Item>
      </Form.Item>
      {/* </div>
      <div className="to-flex"> */}
      <Form.Item className="wrapperInputs">
        <Form.Item
          label="Mail"
          name={"email"}
          hasFeedback
          className="mailItem"
          rules={[
            {
              required: true,
              message: "Veuillez renseigner votre mail.",
            },
            { type: "email", message: "Veuillez rentrer un mail valide" },
          ]}
        >
          <Input
            id={"email"}
            name={"email"}
            type="mail"
            placeholder="exemple@exemple.com"
            className="mailInput"
            onChange={(e) => {
              setCurrentData("email", e.target.value);
              setCookies("email", e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Mobile"
          name={"phone"}
          className="mobileItem"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez renseigner votre numéro de téléphone.",
            },
          ]}
        >
          <Input
            id={"phone"}
            type="text"
            placeholder="0123456789"
            className="mobileInput"
            onChange={(e) => {
              setCurrentData("phone", e.target.value);
            }}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item
        label="Date de naissance"
        name={"born_date"}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre date de naissance.",
          },
        ]}
      >
        <Input
          id={"born_date"}
          type="date"
          placeholder="2003-12-31 (année-jour-mois)"
          onChange={(e) => {
            setCurrentData("born_date", e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Lieu de naissance"
        name={"born_place"}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre lieu de naissance.",
          },
        ]}
      >
        <Input
          id={"born_place"}
          type="text"
          placeholder=""
          onChange={(e) => {
            setCurrentData("born_place", e.target.value);
          }}
        />
      </Form.Item>

      <Form.Item
        label="Logement actuel"
        name={"housing_type"}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre statut.",
          },
        ]}
      >
        <Radio.Group
          buttonStyle="solid"
          onChange={(e) => {
            setCurrentData("housing_type", e.target.value);
          }}
        >
          <Radio.Button value="owner">Propriétaire</Radio.Button>
          <Radio.Button value="tenant">Locataire</Radio.Button>
          <Radio.Button value="free_accommodation">
            Logé à titre gratuit
          </Radio.Button>
        </Radio.Group>
      </Form.Item>

      {data?.find((e) => e.name == "housing_type").value == "tenant" && (
        <Form.Item
          id={"owner_lastname"}
          name={"owner_lastname"}
          label="Nom du propriétaire actuel"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez renseigner le nom du propriétaire actuel",
            },
          ]}
        >
          <Input
            id={"owner_lastname"}
            name={"owner_lastname"}
            type="text"
            placeholder=""
            onChange={(e) => {
              setCurrentData("owner_lastname", e.target.value);
            }}
          />
        </Form.Item>
      )}
      {data?.find((e) => e.name == "housing_type").value == "tenant" && (
        <Form.Item
          id={"owner_firstname"}
          name={"owner_firstname"}
          label="Prenom du propriétaire actuel"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez renseigner le nom du propriétaire actuel",
            },
          ]}
        >
          <Input
            id={"owner_firstname"}
            name={"owner_firstname"}
            type="text"
            placeholder=""
            onChange={(e) => {
              setCurrentData("owner_firstname", e.target.value);
            }}
          />
        </Form.Item>
      )}
      {data?.find((e) => e.name == "housing_type").value == "tenant" && (
        <Form.Item
          id={"owner_phone"}
          name={"owner_phone"}
          label="Mobile du propriétaire actuel"
          hasFeedback
          rules={[
            {
              required: true,
              message:
                "Veuillez renseigner le numéro de téléphone du propriétaire actuel",
            },
          ]}
        >
          <Input
            id={"owner_phone"}
            name={"owner_phone"}
            type="text"
            placeholder=""
            onChange={(e) => {
              setCurrentData("owner_phone", e.target.value);
            }}
          />
        </Form.Item>
      )}
      {data?.find((e) => e.name == "housing_type").value == "tenant" && (
        <Form.Item
          id={"owner_email"}
          name={"owner_email"}
          label="Mail du propriétaire actuel"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez renseigner le mail du propriétaire actuel",
            },
            { type: "email", message: "Veuillez rentrer un mail valide" },
          ]}
        >
          <Input
            id={"owner_email"}
            name={"owner_email"}
            type="mail"
            placeholder=""
            onChange={(e) => {
              setCurrentData("owner_email", e.target.value);
            }}
          />
        </Form.Item>
      )}
      <Form.Item
        label="Adresse actuelle"
        hasFeedback
        name={"address"}
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre adresse.",
          },
        ]}
      >
        <Input
          id={"address"}
          type="text"
          placeholder=""
          onChange={(e) => {
            setCurrentData("address", e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Activité principale"
        name={"activity_id"}
        hasFeedback
        onChange={(e) => {
          setCurrentData("activity_id", e.target.value);
        }}
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre statut.",
          },
        ]}
      >
        <Select
          onChange={(value) => {
            setCurrentData("activity_id", value);
          }}
        >
          {activities.map((activity) => (
            <Option value={activity.id}>{activity.name}</Option>
          ))}
        </Select>
      </Form.Item>

      {data?.find((e) => e.name == "activity_id").value &&
        data?.find((e) => e.name == "activity_id").value < 14 && (
          <Form.Item
            label="Nom de l'entreprise"
            hasFeedback
            id={"employer_lastname"}
            name={"employer_lastname"}
            rules={[
              {
                required: true,
                message: "Veuillez renseigner le nom de l'employeur actuel",
              },
            ]}
          >
            <Input
              id={"employer_lastname"}
              name={"employer_lastname"}
              type="text"
              placeholder=""
              onChange={(e) => {
                setCurrentData("employer_lastname", e.target.value);
              }}
            />
          </Form.Item>
        )}
      {data?.find((e) => e.name == "activity_id").value &&
        data?.find((e) => e.name == "activity_id").value < 14 && (
          <Form.Item
            label="Prenom/Nom de votre responsable"
            hasFeedback
            id={"employer_firstname"}
            name={"employer_firstname"}
            rules={[
              {
                required: true,
                message: "Veuillez renseigner le nom de l'employeur actuel",
              },
            ]}
          >
            <Input
              id={"employer_firstname"}
              name={"employer_firstname"}
              type="text"
              placeholder=""
              onChange={(e) => {
                setCurrentData("employer_firstname", e.target.value);
              }}
            />
          </Form.Item>
        )}
      {data?.find((e) => e.name == "activity_id").value &&
        data?.find((e) => e.name == "activity_id").value < 14 && (
          <Form.Item
            label="Mobile de l'employeur actuel"
            hasFeedback
            id={"employer_phone"}
            name={"employer_phone"}
            rules={[
              {
                required: true,
                message:
                  "Veuillez renseigner le numéro de téléphone de l'employeur actuel",
              },
            ]}
          >
            <Input
              id={"employer_phone"}
              name={"employer_phone"}
              type="text"
              placeholder=""
              onChange={(e) => {
                setCurrentData("employer_phone", e.target.value);
              }}
            />
          </Form.Item>
        )}

      {data?.find((e) => e.name == "activity_id").value &&
        data?.find((e) => e.name == "activity_id").value < 14 && (
          <Form.Item
            label="Mail de l'employeur actuel"
            hasFeedback
            id={"employer_email"}
            name={"employer_email"}
            rules={[
              {
                required: true,
                message:
                  "Veuillez renseigner le numéro de téléphone de l'employeur actuel",
              },
              { type: "email", message: "Veuillez rentrer un mail valide" },
            ]}
          >
            <Input
              id={"employer_email"}
              name={"employer_email"}
              type="mail"
              placeholder=""
              onChange={(e) => {
                setCurrentData("employer_email", e.target.value);
              }}
            />
          </Form.Item>
        )}
    </div>
  );
}
