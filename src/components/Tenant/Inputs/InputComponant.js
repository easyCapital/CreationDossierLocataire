import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { Input, Select, Space, Cascader, Form } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Width } from "devextreme-react/chart";

export default function InputComponant({name, label, text, addon, formInput, setFormInput}) {

  function onChange(value){
    setFormInput({...formInput, name:value})
  }

    return( <Form.Item
        label={label}
        name={name}
        hasFeedback
        
        rules={[
          {
            required: true,
            message: "Veuillez renseigner votre"+ {text} + ".",
          },
        ]}
        >
        <Input addonAfter={addon} onChange={onChange} width={300} placeholder="0"/>
        </Form.Item>
    )

}