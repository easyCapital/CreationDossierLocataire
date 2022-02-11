import { useEffect, useState } from "react";
import { Upload, Form, Button } from 'antd';
import ImgCrop from 'antd-img-crop';

export default function ThirdForm({formInput, setFormInput, current}) {

  const [fileList, setFileList] = useState([]);
  const [fileList1, setFileList1] = useState([]);
  const [fileList2, setFileList2] = useState([]);
  const [fileList3, setFileList3] = useState([]);
  const [fileList4, setFileList4] = useState([]);
  const [fileList5, setFileList5] = useState([]);
  const [fileList6, setFileList6] = useState([]);
  const [fileList7, setFileList7] = useState([]);
  const [fileList8, setFileList8] = useState([]);

  const {  Dragger } = Upload;

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setFormInput((formInput) => {
      if(!formInput[current]) formInput[current] = {};
      formInput[current].fileList = newFileList;
      return {...formInput};
    })
  };

  const onChange1 = ({ fileList: newFileList }) => {
    setFileList1(newFileList);
    setFormInput((formInput) => {
      if(!formInput[current]) formInput[current] = {};
      formInput[current].fileList1 = newFileList;
      return {...formInput};
    })
  };
  const onChange2 = ({ fileList: newFileList }) => {
    setFileList2(newFileList);
    setFormInput((formInput) => {
      if(!formInput[current]) formInput[current] = {};
      formInput[current].fileList2 = newFileList;
      return {...formInput};
    })
  };
  const onChange3 = ({ fileList: newFileList }) => {
    setFileList3(newFileList);
    setFormInput((formInput) => {
      if(!formInput[current]) formInput[current] = {};
      formInput[current].fileList3 = newFileList;
      return {...formInput};
    })
  };
  const onChange4 = ({ fileList: newFileList }) => {
    setFileList4(newFileList);
    setFormInput((formInput) => {
      if(!formInput[current]) formInput[current] = {};
      formInput[current].fileList4 = newFileList;
      return {...formInput};
    })
  };
  const onChange5 = ({ fileList: newFileList }) => {
    setFileList5(newFileList);
    setFormInput((formInput) => {
      if(!formInput[current]) formInput[current] = {};
      formInput[current].fileList5 = newFileList;
      return {...formInput};
    })
  };
  const onChange6 = ({ fileList: newFileList }) => {
    setFileList6(newFileList);
    setFormInput((formInput) => {
      if(!formInput[current]) formInput[current] = {};
      formInput[current].fileList6 = newFileList;
      return {...formInput};
    })
  };
  const onChange7 = ({ fileList: newFileList }) => {
    setFileList7(newFileList);
    setFormInput((formInput) => {
      if(!formInput[current]) formInput[current] = {};
      formInput[current].fileList7 = newFileList;
      return {...formInput};
    })
  };
  const onChange8 = ({ fileList: newFileList }) => {
    setFileList8(newFileList);
    setFormInput((formInput) => {
      if(!formInput[current]) formInput[current] = {};
      formInput[current].fileList8 = newFileList;
      return {...formInput};
    })
  };


  const props = { 
    listType: 'picture-card',
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
            multiple
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
          <Upload {...props} 
            fileList={formInput[current] && formInput[current].fileList1}
            onChange={onChange1} >
            {fileList1.length < 1 && '+ Téléverser'}
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
            message: "Veuillez renseigner votre attestation logée à titre gratuit.",
          },
        ]}
        >
          <Upload {... props}  fileList={formInput[current] && formInput[current].fileList7}
            onChange={onChange7} >
            {fileList7.length < 1 && '+ Téléverser'}
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
          <Upload {...props} fileList={formInput[current] && formInput[current].fileList2}
            onChange={onChange2} >
            {fileList2.length < 1 && '+ Téléverser'}
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
          <Upload {...props} fileList={formInput[current] && formInput[current].fileList3}
            onChange={onChange3} >
            {fileList1.length < 3 && '+ Téléverser'}
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
          <Upload {...props} fileList={formInput[current] && formInput[current].fileList4}
            onChange={onChange4} >
            {fileList4.length < 2 && '+ Téléverser'}
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
          <Upload {...props} fileList={formInput[current] && formInput[current].fileList5}
            onChange={onChange5} >
            {fileList5.length < 1 && '+ Téléverser'}
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
          <Upload {...props} fileList={formInput[current] && formInput[current].fileList6}
            onChange={onChange6} >
            {fileList6.length < 3 && '+ Téléverser'}
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
          <Upload {...props} fileList={formInput[current] && formInput[current].fileList6}
            onChange={onChange6} >
            {fileList6.length < 3 && '+ Téléverser'}
          </Upload>
        
        </Form.Item>}




        {formInput[current] && formInput[current].statut == "Locataire" && <Form.Item
        
        label="3dernières quittances "
        name="tdbs"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner vos 3 dernières quittances.",
          },
        ]}
        >
            <Upload {...props} fileList={formInput[current] && formInput[current].fileList6}
              onChange={onChange8} >
              {fileList8.length < 3 && '+ Téléverser'}
            </Upload>
          
          </Form.Item>}

    </div>
  );
}
