import { InputNumber as InputNumberAntd } from "antd";
import { useState } from "react";

export default function InputNumber() {
  const [n, setN] = useState("");

  return (
    <InputNumberAntd
      onChange={(value) => setN(value)}
      style={{ borderColor: "red !important" ,borderBottom: n === "" ? "dashed " : "solid"}}
    />
  );
}
