import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { Input, Select, Space, Cascader, Form } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Label, Width } from "devextreme-react/chart";

export default function InputComponant({name, label, text, addon, data, setCurrentData, setFormData, current}) {

    return (
      <Form.Item
        label={label}
        hasFeedback
        name={name+"_" + current}
        className={"item" + name}
        rules={[
          {
            required: true,
            message: "Veuillez renseigner "+ {text} + ".",
          },
        ]}
      >
        <Input
         addonAfter={addon}
          id={name}
          name={name}
          type="text"
          placeholder=""
          className={"input"+name} 
          onChange={(e) => {
            setCurrentData(name, e.target.value)
          }}
        />
      </Form.Item>
    )

}