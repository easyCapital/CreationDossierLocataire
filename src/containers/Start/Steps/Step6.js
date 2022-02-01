
import { Form } from "antd";
import "antd/dist/antd.css";
import { default as MyInputN } from "../../../components/global/InputN/inputN";
export default function Step6Form(props) {
  const {} = props;

  return (
    <div className="step6">
      <div className="title">Mon immobilier</div>
      <div className="ligne">
        <p>A la fin de chaque mois, il me reste &nbsp; &nbsp;</p>
        <Form.Item rules={[{ type: "number", min: 0 }]}>
          <MyInputN /> <span>€&nbsp; </span>
        </Form.Item>
      </div>
    </div>
  );
}
