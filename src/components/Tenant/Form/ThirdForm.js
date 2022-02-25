import { useEffect, useState } from "react";
import { Upload, Form, Button } from 'antd';
import ImgCrop from 'antd-img-crop';

export default function ThirdForm({
  current,
  data,
  setFormData,
  setCurrentData,
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

  const { Dragger } = Upload;

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setCurrentData('identity', newFileList)
  };

  const onChange1 = ({ fileList: newFileList }) => {
    setFileList1(newFileList);
    setCurrentData('justify', newFileList)
  };
  const onChange2 = ({ fileList: newFileList }) => {
    setFileList2(newFileList);
    setCurrentData('rib', newFileList)
  };
  const onChange3 = ({ fileList: newFileList }) => {
    setFileList3(newFileList);
    setCurrentData('tdbs', newFileList)
  };
  const onChange4 = ({ fileList: newFileList }) => {
    setFileList4(newFileList);
    setCurrentData('ddbc', newFileList)
  };
  const onChange5 = ({ fileList: newFileList }) => {
    setFileList5(newFileList);
    setCurrentData('studentCard', newFileList)
  };
  const onChange6 = ({ fileList: newFileList }) => {
    setFileList6(newFileList);
    setCurrentData('tdbs', newFileList)
  };
  const onChange7 = ({ fileList: newFileList }) => {
    setFileList7(newFileList);
    setCurrentData('altg', newFileList)
  };
  const onChange8 = ({ fileList: newFileList }) => {
    setFileList8(newFileList);
    setCurrentData('tdq', newFileList)
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
          <Upload
            multiple
            listType="picture-card"
            fileList={data.find((e) => e.name == "identity").value}
            onChange={onChange}
          > 
            {fileList.length < 2 && '+ Téléverser'}
          </Upload>
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
            fileList={data.find((e) => e.name == "identity").justify}
            onChange={onChange1} >
            {fileList1.length < 1 && '+ Téléverser'}
          </Upload>
      </Form.Item> 


        {data.find((e) => e.name == 'housing_type').value == "Logé à titre gratuit" && 
        String(data.find((e) => e.name == 'activity_id').value).startsWith("e") && 
        <Form.Item
        label="Attestation logée à titre gratuit"
        name="altg"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre attestation logée à titre gratuit.",
          },
        ]}
        >
          <Upload {... props}  
            fileList={data.find((e) => e.name == "altg").value}
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
          <Upload {...props} 
            fileList={data.find((e) => e.name == "rib").value}
            onChange={onChange2} >
            {fileList2.length < 1 && '+ Téléverser'}
          </Upload>
      </Form.Item>

      {String(data.find((e) => e.name == 'activity_id').value).startsWith("s") 
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
          <Upload {...props} 
            fileList={data.find((e) => e.name == "tdbs").value}
            onChange={onChange3} >
            {fileList3.length < 3 && '+ Téléverser'}
          </Upload>

        
        </Form.Item>}

        {String(data.find((e) => e.name == 'activity_id').value).startsWith("tns") && <Form.Item>
        
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
          <Upload {...props} 
            fileList={data.find((e) => e.name == "ddbc").value}
            onChange={onChange4} >
            {fileList4.length < 2 && '+ Téléverser'}
          </Upload>
      </Form.Item>
        
      </Form.Item>} 

      {String(data.find((e) => e.name == 'activity_id').value).startsWith("e") && <Form.Item
        
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
          <Upload {...props}
            fileList={data.find((e) => e.name == "studentCard").value}
            onChange={onChange5} >
            {fileList5.length < 1 && '+ Téléverser'}
          </Upload>
        
        </Form.Item>}

        {String(data.find((e) => e.name == 'activity_id').value) == "e_ae" && <Form.Item
        
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
          <Upload {...props} 
            fileList={data.find((e) => e.name == "tdbs").value}
            onChange={onChange6} >
            {fileList6.length < 3 && '+ Téléverser'}
          </Upload>
        
        </Form.Item>}

        {data.find((e) => e.name == 'housing_type').value == "Locataire" && <Form.Item
        
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
            <Upload {...props} 
            fileList={data.find((e) => e.name == "tdq").value}
              onChange={onChange8} >
              {fileList8.length < 3 && '+ Téléverser'}
            </Upload>
          
          </Form.Item>}

    </div>
  );
}
