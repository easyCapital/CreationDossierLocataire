import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Input, Button, Radio, Select} from "antd";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
const { Option } = Select;

export default function FirstForm({formInput, setFormInput, current}) {

  function changeSelect(value){
    setFormInput({...formInput, statut_s:value})
  }

  useEffect(() => {
    console.log(formInput);
  }, [formInput[current]]);

  return (
    <div>
      <Form.Item
      label="Civilité"
      name="civil"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Veuillez renseigner votre civilité.",
        },
      ]}
      >
        <Radio.Group buttonStyle="solid"
        onChange={(e) => {
          setFormInput({...formInput, civil:e.target.value})
        }}>
          <Radio.Button value="M">M</Radio.Button>
          <Radio.Button value="Mme">Mme</Radio.Button>
          <Radio.Button value="Mlle">Mlle</Radio.Button>
        </Radio.Group>
      </Form.Item>
       <Form.Item
        label="Prenom"
        name="first_name"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre prénom.",
          },
        ]}
      >
        <Input
          id={"first_name"}
          name="first_name"
          type="text"
          value={
            formInput[current] != null ? console.log(formInput[current].first_name) + formInput[current].first_name : " "
        }
          placeholder=""
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].first_name = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>
      <Form.Item
        label="Nom"
        name="last_name"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre nom.",
          },
        ]}
      >
        <Input
          id={"last_name"}
          name="last_name"
          type="text"
          value={formInput.last_name}
          placeholder=""
          onChange={(e) => {
            setFormInput({...formInput, last_name:e.target.value})
          }}
        />
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        hasFeedback
        rules={[
          {
            type: "email",
            message: "Veuillez renseigner une adresse e-mail correcte.",
          },
          {
            required: true,
            message: "Veuillez renseigner votre email.",
          },
        ]}
      >
        <Input
          id={"email"}
          name="email"
          type="text"
          value={formInput.email}
          placeholder="exemple@exemple.com"
          onChange={(e) => {
            setFormInput({...formInput, email:e.target.value})
          }}
        />
      </Form.Item>
      <Form.Item
        label="Mobile"
        name="mobile"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre numéro de téléphone.",
          },
        ]}
      >
        <Input
          id={"mobile"}
          name="mobile"
          type="text"
          value={formInput.mobile}
          placeholder="0123456789"
          onChange={(e) => {
            setFormInput({...formInput, mobile:e.target.value})
          }}
        />
      </Form.Item>
      <Form.Item
        label="Lieu de naissance"
        name="born_place"
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
          name="born_place"
          type="text"
          value={formInput.born_place}
          placeholder=""
          onChange={(e) => {
            setFormInput({...formInput, born_place:e.target.value})
          }}
        />
      </Form.Item>
      <Form.Item
        label="Date de naissance"
        name="born_date"
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
          name="born_date"
          type="text"
          value={formInput.born_date}
          placeholder="12/03/2003"
          onChange={(e) => {
            setFormInput({...formInput, born_date:e.target.value})
          }}
        />
      </Form.Item>
      <Form.Item
      label="Statut"
      name="statut"
      hasFeedback
      onChange={(e) => {
        setFormInput({...formInput, statut:e.target.value})
      }}
      rules={[
        {
          required: true,
          message: "Veuillez renseigner votre statut.",
        },
      ]}
      >
        <Radio.Group buttonStyle="solid">
          <Radio.Button value="Propriétaire">Propriétaire</Radio.Button>
          <Radio.Button value="Locataire">Locataire</Radio.Button>
          <Radio.Button value="Logé à titre gratuit">Logé à titre gratuit</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Adresse actuelle"
        name="address"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre adresse.",
          },
        ]}
      >
        <Input
          id={"address"}
          name="address"
          type="text"
          value={formInput.address}
          placeholder=""
          onChange={(e) => {
            setFormInput({...formInput, address:e.target.value})
          }}
        />
      </Form.Item>
      <Form.Item
        label="Statut"
        name="statut_s"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre statut.",
          },
        ]}
      >
        <Select value={formInput.statut_s} onChange={changeSelect}>
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

    </div>
  );
}
