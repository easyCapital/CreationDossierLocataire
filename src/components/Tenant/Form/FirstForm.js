import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Badge,Input, Button, Radio, Select} from "antd";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import InputComponant from "../Inputs/InputComponant";
const { Option } = Select;

export default function FirstForm({formInput, setFormInput, current, fields, setFields}) {
  useEffect(() => {
    console.log(current);
  }, [formInput[current]]);

  return (
    <div className="currentForm">
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
      // className="clvt"
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
      {/* <div className="to-flex" id="to-flex-fc"> */}
      <Form.Item className="wrapperInput">
       <Form.Item
        label="Prenom"
        name={'first_name_' + current}
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
          id={"last_name"}
          type="text"
          value={formInput[current] && formInput[current].last_name && formInput[current].last_name}
          placeholder=""
          onChange={(e) => {
            setFields(...fields, {
              name: ['last_name_' + current],
              value: e.target.value,
            },
            )}}
          />
      </Form.Item>
      </Form.Item>
      {/* </div>
      <div className="to-flex"> */}
      <Form.Item className="wrapperInputs">
      <Form.Item
        label="E-mail"
        name={'email_' + current}
        hasFeedback
        className="mailItem"
        initialValue={formInput[current]?.email}
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
          defaultValue={formInput[current]?.email}
          value={formInput[current]?.email}
          placeholder="exemple@exemple.com"
          className="mailInput"
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
          id={"mobile"}
          type="text"
          value={formInput.mobile}
          placeholder="0123456789"
          className="mobileInput"
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].mobile = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>
      </Form.Item>
      {/* </div>
      <div className="to-the-left"> */}
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
      {formInput[current]?.statut == "Locataire" &&  <Form.Item
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
          id={"npa"}
          name={'npa_' + current}
          type="text"
          value={formInput[current].npa}
          placeholder=""
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].npa = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>}
      {formInput[current]?.statut == "Locataire" &&  <Form.Item
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
          id={"ppa"}
          name={'ppa_' + current}
          type="text"
          value={formInput[current].ppa}
          placeholder=""
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].ppa = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>}
      {formInput[current]?.statut == "Locataire" &&  <Form.Item
        label="Mobile du propriétaire actuel"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner le numéro de téléphone du propriétaire actuel",
          },
        ]}
      >
        <Input
          id={"tpa"}
          name={'tpa_' + current}
          type="text"
          value={formInput[current].tpa}
          placeholder=""
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].tpa = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>}
      
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
          value={formInput[current]?.address}
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

      {formInput[current]?.statut_s && !String(formInput[current]?.statut_s).startsWith("e_") && <Form.Item
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
          id={"nea"}
          name={'nea_' + current}
          type="text"
          value={formInput[current].nea}
          placeholder=""
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].nea = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>}
      {formInput[current]?.statut_s && !String(formInput[current]?.statut_s).startsWith("e_") &&  <Form.Item
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
          id={"pea"}
          name={'pea_' + current}
          type="text"
          value={formInput[current].pea}
          placeholder=""
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].pea = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>}
      {formInput[current]?.statut_s && !String(formInput[current]?.statut_s).startsWith("e_") &&  <Form.Item
        label="Mobilede l'employeur actuel"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner le numéro de téléphone de l'employeur actuel",
          },
        ]}
      >
        <Input
          id={"tea"}
          name={'tea_' + current}
          type="text"
          value={formInput[current].tea}
          placeholder=""
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current].tea = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>}
      
      </div>

    // </div>
  );
}
