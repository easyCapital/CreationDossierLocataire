import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Input, Button, Radio, Select} from "antd";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
const { Option } = Select;

export default function FirstForm({formInput, setFormInput, current}) {
  useEffect(() => {
    console.log(formInput);
  }, [formInput[current]]);

  return (
    <div className="current-form">
      <Form.Item

      label="Statut"
      name={'statut_gl_' + current}
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
          setFormInput((formInput) => {
            if(!formInput[current]) formInput[current] = {};
            formInput[current].statut_gl = e.target.value;
            return {...formInput};
          })
        }}
      >
          <Radio.Button value="Garant">Garant</Radio.Button>
          <Radio.Button value="Locataire">Locataire</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
      label="Civilité"
      name={'civil_' + current}
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
          setFormInput((formInput) => {
            if(!formInput[current]) formInput[current] = {};
            formInput[current].civil = e.target.value;
            return {...formInput};
          })
        }}
      >
          <Radio.Button value="M">M</Radio.Button>
          <Radio.Button value="Mme">Mme</Radio.Button>
          <Radio.Button value="Mlle">Mlle</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <div className="to-flex" id="to-flex-fc">
       <Form.Item
        label="Prenom"
        name={'first_name_' + current}
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
          type="text"
          value={
            formInput[current] && formInput[current].first_name != null ? formInput[current].first_name.replace("undefined", '') : " "
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
        name={'last_name_' + current}
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
          type="text"
          value={formInput[current] && formInput[current].last_name && formInput[current].last_name}
          placeholder=""
          onChange={(e) => {
              setFormInput((formInput) => {
                if(!formInput[current]) formInput[current] = {};
                formInput[current].last_name = e.target.value;
                return {...formInput};
              })
            }}
          />
      </Form.Item>
      </div>
      <div className="to-flex">
      <Form.Item
        label="E-mail"
        name={'email_' + current}
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
          type="text"
          value={formInput.email}
          placeholder="exemple@exemple.com"
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].email = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>
      <Form.Item
        label="Mobile"
        name={'mobile_' + current}
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
          type="text"
          value={formInput.mobile}
          placeholder="0123456789"
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].mobile = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>
      </div>
      <Form.Item
        label="Lieu de naissance"
        name={'born_place_' + current}
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
          value={formInput.born_place}
          placeholder=""
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].born_place = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>
      <Form.Item
        label="Date de naissance"
        name={'born_date_' + current}
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
          value={formInput.born_date}
          placeholder="12/03/2003"
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].born_date = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>
      <Form.Item
      label="Logement actuel"
      name={'statut_' + current}
      hasFeedback
      onChange={(e) => {
        
        setFormInput((formInput) => {
          if(!formInput[current]) formInput[current] = {};
          formInput[current].statut = e.target.value;
          return {...formInput};
        })
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
          name={'address_' + current}
          type="text"
          value={formInput.address}
          placeholder=""
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].address = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>
      <Form.Item
        label="Activité principale"
        name={'statut_s_' + current}
        hasFeedback
        onChange={
          (e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].statut_s = e.target.value;
              return {...formInput};
            })
          }}
      
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre statut.",
          },
        ]}
      >
        <Select value={formInput.statut_s} onChange={(value) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].statut_s = value;
              return {...formInput};
            })
          }}>
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
