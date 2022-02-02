import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { Upload, Form, Button } from 'antd';
import ImgCrop from 'antd-img-crop';
import { UploadOutlined } from '@ant-design/icons';

export default function ThirdForm({formInput, setFormInput}) {

  const [fileList, setFileList] = useState([
  ]);

  const {  Dragger } = Upload;

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setFormInput({...formInput, fileList:newFileList})
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const props = { 
    listType: 'picture',
    previewFile(file) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then(res => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };


  return (
    <div className="upload">
      <Form.Item
      label="Carte d’identité ou passeport"
      name="identity"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Veuillez renseigner vos possibilité de garant.",
        },
      ]}  
      >
        <ImgCrop rotate>
          <Upload
            listType="picture-card"
            fileList={formInput.fileList}
            onChange={onChange}
            onPreview={onPreview}
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
            <Button icon={<UploadOutlined />}>Téléverser</Button>
          </Upload>
      </Form.Item> 


        {formInput.statut == "Logé à titre gratuit" && String(formInput.statut_s).startsWith("e") && 
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
            <Button icon={<UploadOutlined/>}>Téléverser </Button>
          </Upload>
        </Form.Item>
        }

    </div>
  );
}
