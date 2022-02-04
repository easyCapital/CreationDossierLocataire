import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { Input, Select, Space, Cascader, Form } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Label, Width } from "devextreme-react/chart";

export default function InputComponant({name, label, text, addon, formInput, setFormInput, current}) {

    return (
      <Form.Item
        label={label}
        hasFeedback
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
          value={formInput[{name}]}
          placeholder=""
          onChange={(e) => {
            setFormInput((formInput) => {
              if(!formInput[current]) formInput[current] = {};
              formInput[current][name] = e.target.value;
              return {...formInput};
            })
          }}
        />
      </Form.Item>
    )

}