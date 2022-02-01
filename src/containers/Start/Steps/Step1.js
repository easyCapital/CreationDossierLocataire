import { useState } from "react";
import { Button, Steps, Checkbox, Progress } from "antd";
import { useMediaQuery } from "react-responsive";
import { Form, Input, Select, DatePicker } from "antd";
import "antd/dist/antd.css";
import { List } from "antd";
import { default as MySelect } from "../../../components/global/Select/select";
import { default as MyInputN } from "../../../components/global/InputN/inputN";

export default function Step1Form (props)  {
    const {coemprunteur, setCoemprunteur} = props;
  return (
    <div className="step1">
      <div className="txtTags123">
        <span className="boldTxt">Réduire mes impôts :</span> Afin de réduire
        vos impôts et d’optimiser votre fiscalité, nous vous conseillons
        plusieurs investissements dont l’investissement locatif immobilier.
        Celui va vous permettre de vous construire votre patrimoine en acquérant
        des biens que vous soumettraient à la locatif pour vous assurer un
        revenu complémentaire qui réduire vos impôts. Nous vous proposons une
        simulation pour vous donner un aperçu de votre investissement.
      </div>

      <div className="title">Votre projet</div>
      <div className="ligne" style={{ width: 500 }}>
        <div className="txt">Je souhaite réaliser cet achat :</div>
        <Button
          style={{
            color: coemprunteur === "seul" ? "#4ca6e2" : "black",
            borderColor: coemprunteur === "seul" ? "#4ca6e2" : "gray",
          }}
          onClick={() => setCoemprunteur("seul")}
        >
          Seul
        </Button>
        <Button
          style={{
            color: coemprunteur === "adeux" ? "#4ca6e2" : "noir",
            borderColor: coemprunteur === "seul" ? "#4ca6e2" : "gray",
          }}
          onClick={() => setCoemprunteur("adeux")}
        >
          A deux
        </Button>
      </div>
      <div className="ligne" style={{ width: "100%" }}>
        <Form.Item name="field2" label="Je souhaite acheter">
          <MySelect>
            <Select.Option value="principal">
              Votre résidence principale
            </Select.Option>
            <Select.Option value="secondaire">
              Une résidence secondaire
            </Select.Option>
            <Select.Option value="locatif">
              Un investissement locatif
            </Select.Option>
          </MySelect>
        </Form.Item>
        <Form.Item name="field3" label="Dans la commune de">
          <MySelect>
            <Select.Option value="Bordeaux">Bordeaux</Select.Option>
            <Select.Option value="Talence">Talence</Select.Option>
            <Select.Option value="Pessac">Pessac</Select.Option>
            <Select.Option value="NeSaitPas">Je ne sais pas</Select.Option>
          </MySelect>
        </Form.Item>
      </div>
      {/* <Form.Item name="field4" style={{ width: 300 }} label="Il sera">
            <MySelect>
              <Select.Option value="ancien">un logement ancien</Select.Option>
              <Select.Option value="neuf">un logement neuf achevé</Select.Option>
              <Select.Option value="vefa">
                une VEFA (vente sur plan)
              </Select.Option>
            </MySelect>
          </Form.Item> */}
      <div className="ligne">
        <p> Il sera :</p>
        <Button>un logement ancien </Button>
        <Button>un logement neuf achevé</Button>
        <Button>une VEFA (vente sur plan) </Button>
      </div>
    </div>
  );
}
