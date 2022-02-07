import { useEffect, useState } from "react";
import { Upload, Form, Button } from 'antd';
import ImgCrop from 'antd-img-crop';

export default function ThirdForm({formInput, setFormInput, current}) {

  const [fileList, setFileList] = useState([
  ]);

  const {  Dragger } = Upload;

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setFormInput((formInput) => {
      if(!formInput[current]) formInput[current] = {};
      formInput[current].fileList = newFileList;
      return {...formInput};
    })
  };


  const props = { 
    listType: 'picture',
  };


  return (
    <div className="upload">
      <Form.Item
      label="Carte d’identité ou passeport"
      name={'identity_' + current}
      hasFeedback
      rules={[
        {
          required: true,
          message: "Veuillez renseigner votre carte d'identité et/ou votre passeport.",
        },
      ]}  
      >
        <ImgCrop rotate>
          <Upload
            listType="picture-card"
            fileList={formInput[current] && formInput[current].fileList}
            onChange={onChange}
          > 
            {fileList.length < 2 && '+ Téléverser'}
          </Upload>
        </ImgCrop>
      </Form.Item> 
      <Form.Item
      label="Justificatif de domicile -3 mois"
      name="justify"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Veuillez renseigner vos possibilité de garant.",
        },
      ]}
      >
          <Upload {...props} >
            <Button >Téléverser</Button>
          </Upload>
      </Form.Item> 


        {formInput[current] && formInput[current].statut == "Logé à titre gratuit" && String(formInput[current].statut_s).startsWith("e") && 
        <Form.Item
        label="attestation logée à titre gratuit"
        name="altg"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner vos possibilité de garant.",
          },
        ]}
        >
          <Upload>
            <Button>Téléverser</Button>
          </Upload>
        </Form.Item>
        }
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
          <Upload {...props} >
            <Button >Téléverser</Button>
          </Upload>
      </Form.Item>

      {formInput[current] &&  String(formInput[current].statut_s).startsWith("s") 
      &&
      <Form.Item
        
      label="3 derniers bulletins de salaires"
      name="tdbs"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Veuillez renseigner vos 3 derniers bulletins de salaires.",
        },
      ]}
      >
          <Upload {...props} >
            <Button >Téléverser</Button>
          </Upload>

        
        </Form.Item>}

        {formInput[current] &&  String(formInput[current].statut_s).startsWith("tns") && <Form.Item>
        
      <Form.Item
      label="2 derniers bilans comptables"
      name="ddbc"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Veuillez renseigner vos 2 derniers bilans comptables.",
        },
      ]}
      >
          <Upload {...props} >
            <Button >Téléverser</Button>
          </Upload>
      </Form.Item>
        
        </Form.Item>} 

        {formInput[current] &&  String(formInput[current].statut_s).startsWith("e") && <Form.Item
        
      label="Carte d’étudiants"
      name="tdbs"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Veuillez renseigner votre carte d’étudiant.",
        },
      ]}
      >
          <Upload {...props} >
            <Button >Téléverser</Button>
          </Upload>
        
        </Form.Item>}

        {formInput[current] && String(formInput[current].statut_s) == "e_ae" && <Form.Item
        
      label="3 derniers bulletins de salaires"
      name="tdbs"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Veuillez renseigner vos 3 derniers bulletins de salaires.",
        },
      ]}
      >
          <Upload {...props} >
            <Button >Téléverser</Button>
          </Upload>
        
        </Form.Item>}

    </div>
  );
}
