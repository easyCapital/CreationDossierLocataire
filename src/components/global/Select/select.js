import { Select as AntdSelect } from "antd";
import { useEffect } from "react";
import { useState } from "react";

export default function Select({
  children,
  handleChange = null,
  selectValue = null,
  placeHolder ="",
}) {
  const [isFiled, setFiled] = useState(false);

  const valueProp = handleChange
    ? {
        value: selectValue,
      }
    : {};

  return (
    <AntdSelect
      onChange={(value) => {
        handleChange ? handleChange(value) : setFiled(true);
      }}
      style={{
        borderBottom: (handleChange ? selectValue : isFiled)
          ? "solid"
          : "dashed",
      }}
      placeholder={placeHolder}
      {...valueProp}
    >
      {children}
    </AntdSelect>
  );
}
