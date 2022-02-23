import { zzect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Badge, Input, Button, Radio, Select } from "antd";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import InputComponant from "../Inputs/InputComponant";
const { Option } = Select;

export default function FirstForm({
  current,
  data,
  setFormData,
  setCurrentData,
}) {
  return (
    <div className="currentForm">
      <Form.Item
        label="Statut"
        name={"statut_gl"}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre civilité.",
          },
        ]}
      >
        <Radio.Group
          buttonStyle="solid"
          onChange={(e) => {
            setCurrentData("statut_gl", e.target.value);
          }}
        >
          <Radio.Button value="Garant">Garant</Radio.Button>
          <Radio.Button value="Locataire">Locataire</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Civilité"
        name={"civil"}
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
          onChange={(e) => {
            setCurrentData("civil", e.target.value);
          }}
        >
          <Radio.Button value="M">M</Radio.Button>
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
          name={"last_name"}
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
          ]}
        >
          <Input
            id={"email"}
            name={"email"}
            type="text"
            placeholder="exemple@exemple.com"
            className="mailInput"
            onChange={(e) => {
              setCurrentData("email", e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Mobile"
          name={"mobile"}
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
      {/* </div>
      <div className="to-the-left"> */}
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
          type="text"
          placeholder="12/03/2003"
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
          <Radio.Button value="Propriétaire">Propriétaire</Radio.Button>
          <Radio.Button value="Locataire">Locataire</Radio.Button>
          <Radio.Button value="Logé à titre gratuit">
            Logé à titre gratuit
          </Radio.Button>
        </Radio.Group>
      </Form.Item>

      {data.find((e) => e.name == "housing_type").value == "Locataire" && (
        <Form.Item
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
      {data.find((e) => e.name == "housing_type").value == "Locataire" && (
        <Form.Item
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
      {data.find((e) => e.name == "housing_type").value == "Locataire" && (
        <Form.Item
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
      {data.find((e) => e.name == "housing_type").value == "Locataire" && (
        <Form.Item
          label="Mail du propriétaire actuel"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez renseigner le mail du propriétaire actuel",
            },
          ]}
        >
          <Input
            id={"owner_email"}
            name={"owner_email"}
            type="text"
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
          <Option value="s_cdi_o">CDI hors période d'essaie</Option>
          <Option value="s_cdi_i">CDI en période d'essaie</Option>
          <Option value="s_cdd">CDD</Option>
          <Option value="s_f">Fonctionnaire</Option>
          <Option value="s_m">Militaire</Option>
          <Option value="s_ids">Intermittent du spectacle</Option>
          <Option value="s_int">Intérimaire</Option>
          <Option value="tns_art">Artisan</Option>
          <Option value="tns_com">Commerçant</Option>
          <Option value="tns_chef">Chef d'entreprise</Option>
          <Option value="tns_fl">Free-lance</Option>
          <Option value="tns_ae">Auto-entrepreneur</Option>
          <Option value="tns_pole">Creation via pôle emploi</Option>
          <Option value="e_se">Étudiant sans emploi</Option>
          <Option value="e_ae">Étudiant avec emploi</Option>
        </Select>
      </Form.Item>

      {data.find((e) => e.name == "activity_id").value &&
        !String(data.find((e) => e.name == "activity_id").value).startsWith(
          "e_"
        ) && (
          <Form.Item
            label="Nom de l'employeur actuel"
            hasFeedback
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
      {data.find((e) => e.name == "activity_id").value &&
        !String(data.find((e) => e.name == "activity_id").value).startsWith(
          "e_"
        ) && (
          <Form.Item
            label="Prenom de l'employeur actuel"
            hasFeedback
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
      {data.find((e) => e.name == "activity_id").value &&
        !String(data.find((e) => e.name == "activity_id").value).startsWith(
          "e_"
        ) && (
          <Form.Item
            label="Mobile de l'employeur actuel"
            hasFeedback
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

      {data.find((e) => e.name == "activity_id").value &&
        !String(data.find((e) => e.name == "activity_id").value).startsWith(
          "e_"
        ) && (
          <Form.Item
            label="Mail de l'employeur actuel"
            hasFeedback
            rules={[
              {
                required: true,
                message:
                  "Veuillez renseigner le numéro de téléphone de l'employeur actuel",
              },
            ]}
          >
            <Input
              id={"employer_email"}
              name={"employer_email"}
              type="text"
              placeholder=""
              onChange={(e) => {
                setCurrentData("employer_email", e.target.value);
              }}
            />
          </Form.Item>
        )}
    </div>

    // </div>
  );
}
