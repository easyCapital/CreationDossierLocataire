import { useState } from "react";
import { Button, Steps, Checkbox, Progress } from "antd";
import { useMediaQuery } from "react-responsive";
import { Form, Input, Select, DatePicker } from "antd";
import "antd/dist/antd.css";
import { List } from "antd";
import { default as MySelect } from "../../../components/global/Select/select";
import { default as MyInputN } from "../../../components/global/InputN/inputN";

export default function Step2Form(props) {
  const {} = props;
  const [typeLogement, setTypeLogement] = useState(0);
  const [credit, setCredit] = useState(false);
  const [projetAchat, setProjetAchat] = useState(false);

  return (
    <div className="step2">
      <div className="title">Parlez nous de vous</div>
      <p className="txtStep2">
        Afin de vous proposer la simulation la plus complète et optimisé, nous
        avons besoin d’en apprendre sur vous et votre situation personnelle.
      </p>
      <div className="ligne">
        <p>Je suis</p>
        <Button>marié</Button>
        <Button>célibataire</Button>
        <Button>pacsé</Button>
        <Button>veuf</Button>
        <Button>divorcé</Button>
        <Button>en concubinage</Button>
      </div>
      <br />

      <div className="lignePasFlex">
        <p>J'ai</p>
        <Form.Item name="field5" rules={[{ type: "number", min: 0, max: 99 }]}>
          <MyInputN />
        </Form.Item>
        <p>ans&nbsp; </p>
        <p>et j'ai</p>
        <Form.Item name="field5" rules={[{ type: "number", min: 0, max: 99 }]}>
          <MyInputN />
        </Form.Item>
        <p>enfants à charge. J'habite à &nbsp; &nbsp; </p>
        <Form.Item name="field6" style={{ width: 300 }}>
          <Input />
        </Form.Item>
      </div>
      <div className="ligne">
        <p>Je suis</p>
        <Button
          onClick={() => {
            setTypeLogement(1);
          }}
        >
          Locataire de mon logement
        </Button>
        <Button
          onClick={() => {
            setTypeLogement(2);
          }}
        >
          Propriétaire de mon logement
        </Button>
        <Button
          onClick={() => {
            setTypeLogement(3);
          }}
        >
          Hébergé gratuitement
        </Button>
        <Button
          onClick={() => {
            setTypeLogement(4);
          }}
        >
          Dans un logement de fonction
        </Button>
      </div>
      <div className="ligne">
        {typeLogement === 1 && (
          <div className="ligne">
            <p>et mon loyer est de</p>
            <Form.Item name="field5" rules={[{ type: "number", min: 0 }]}>
              <MyInputN /> <span>€ par mois</span>
            </Form.Item>
          </div>
        )}
        {typeLogement === 2 && (
          <div>
            <div className="ligne">
              <Button onClick={() => setCredit(true)}>J'ai un crédit</Button>
              <Button onClick={() => setCredit(false)}>
                Je n'ai pas de crédit
              </Button>
            </div>
            {credit === true && (
              <div className="lignePasFlex">
                <p>La mensualité</p>
                <Form.Item name="field5" rules={[{ type: "number", min: 0 }]}>
                  <MyInputN /> <span>€</span>
                </Form.Item>
                <p>pendant</p>
                <Form.Item name="field5" rules={[{ type: "number", min: 0 }]}>
                  <MyInputN /> <span>années</span>
                </Form.Item>
              </div>
            )}
          </div>
        )}
        {(typeLogement === 3 || typeLogement === 4) && (
          <div>
            <div className="ligne">
              <Button
                onClick={() => {
                  setProjetAchat(true);
                }}
              >
                {" "}
                J'ai un
              </Button>
              <Button
                onClick={() => {
                  setProjetAchat(false);
                }}
              >
                Je n'ai pas
              </Button>
              <p>de projet d'achat de résidence principale</p>
            </div>
            {projetAchat === true && (
              <div className="ligne">
                <p>Dans</p>
                <Button>2 ans ou moins</Button>
                <Button>entre 2 ans et 5 ans</Button>
                <Button>Plus de 5 ans</Button>
              </div>
            )}
          </div>
        )}
      </div>
      {typeLogement === 4 && (
        <div className="ligne">
          <p>et mon loyer est de :</p>
          <Form.Item name="field5" rules={[{ type: "number", min: 0 }]}>
            <MyInputN /> <span>€ par mois</span>
          </Form.Item>
        </div>
      )}
    </div>
  );
}
