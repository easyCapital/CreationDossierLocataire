import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { Input, Select, Space, Cascader, Form } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Width } from "devextreme-react/chart";

export default function InputComponant({name, label, text, addon, formInput, setFormInput}) {

    return( <Form.Item
        label={<>{label}</>}
        name={name}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Veuillez renseigner "+ {text} + ".",
          },
        ]}
        className="allWithAddon"
        >
        <Input 
        className="withAddon" addonAfter={addon}  onChange={(e) => {
          setFormInput({...formInput, [name]:e.target.value})
        }} placeholder="0"/>
        </Form.Item>
    )

}