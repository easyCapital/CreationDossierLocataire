import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { Upload, Form } from 'antd';
import ImgCrop from 'antd-img-crop';

export default function ThirdForm({formInput, setFormInput}) {

  const [fileList, setFileList] = useState([
  ]);

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
      
    </div>
  );
}
