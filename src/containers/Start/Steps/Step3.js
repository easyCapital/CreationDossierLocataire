import { useState } from "react";
import { Button, Steps, Checkbox, Progress } from "antd";
import { useMediaQuery } from "react-responsive";
import { Form, Input, Select, DatePicker } from "antd";
import "antd/dist/antd.css";
import { List } from "antd";
import { default as MySelect } from "../../../components/global/Select/select";
import { default as MyInputN } from "../../../components/global/InputN/inputN";
import { HiInformationCircle } from "react-icons/hi";

export default function Step3Form(props) {
  const {} = props;
  const [travail, setTravail] = useState("");
  const [contratTravail, setContratTravail] = useState("");
  const [essai, setEssai] = useState(false);

  return (
    <div className="step3">
      <div className="title">Vos informations</div>
      <span className="ligne">
        <p>Je suis</p>
        <Form.Item name="field10" className="quartwidth">
          <MySelect selectValue={travail} handleChange={setTravail}>
            <Select.Option value="privé">salarié dans le privé</Select.Option>
            <Select.Option value="public">salarié dans le public</Select.Option>
            <Select.Option value="autre">autre statut</Select.Option>
          </MySelect>
        </Form.Item>
        {travail === "privé" && (
          <div className="ligne">
            <p>en</p>
            <Form.Item name="field11" >
              <MySelect
                selectValue={contratTravail}
                handleChange={setContratTravail}
              >
                <Select.Option value="cdi">CDI</Select.Option>
                <Select.Option value="cdd">CDD</Select.Option>
              </MySelect>
            </Form.Item>
          </div>
        )}
        {contratTravail === "cdi" && travail === "privé" && (
          <Form.Item name="field12">
            <MySelect>
              <Select.Option value="cadre">cadre</Select.Option>
              <Select.Option value="non_cadre">non cadre</Select.Option>
            </MySelect>
          </Form.Item>
        )}
        {contratTravail === "cdi" && travail === "privé" && (
          <Form.Item name="field13">
            <MySelect selectValue={essai} handleChange={setEssai}>
              <Select.Option value={true}>en période d'essai</Select.Option>
              <Select.Option value={false}>hors période d'essai</Select.Option>
            </MySelect>
          </Form.Item>
        )}

        {contratTravail === "cdd" && (
          <div className="ligne">
            <p>Depuis</p>
            <Form.Item name="field14">
              <DatePicker />
            </Form.Item>
          </div>
        )}
        {travail === "public" && (
          <div className="ligne">
            <p>avec un statut de</p>
            <Form.Item name="field40" className="quartwidth">
              <MySelect
                handleChange={setContratTravail}
                selectValue={contratTravail}
              >
                <Select.Option value="titulaire">titulaire</Select.Option>
                <Select.Option value="contractuel">contractuel</Select.Option>
                <Select.Option value="stagiaire">stagiaire</Select.Option>
              </MySelect>
            </Form.Item>
          </div>
        )}
        {contratTravail === "contractuel" && (
          <div className="ligne">
            <p>depuis</p>
            <Form.Item name="field41">
              <DatePicker />
            </Form.Item>
          </div>
        )}
        {travail === "autre" && (
          <div className="ligne">
            <p>plus précisément :</p>
            <Form.Item name="field42">
              <MySelect>
                <Select.Option value="travailleur indépendant">
                  travailleur indépendant
                </Select.Option>
                <Select.Option value="médecin">médecin</Select.Option>
                <Select.Option value="autre libéral">
                  autre libéral
                </Select.Option>
                <Select.Option value="retraité">retraité</Select.Option>
                <Select.Option value="chef d'entreprise">
                  chef d'entreprise
                </Select.Option>
                <Select.Option value="portage salarial">
                  portage salarial
                </Select.Option>
                <Select.Option value="artisan">artisan</Select.Option>
                <Select.Option value="intermittent du spectacle">
                  intermittent du spectacle
                </Select.Option>
                <Select.Option value="agriculteur">agriculteur</Select.Option>
                <Select.Option value="agriculteur">sans activité</Select.Option>
              </MySelect>
            </Form.Item>
          </div>
        )}
        {travail === "autre" && (
          <div className="ligne">
            <p>Depuis</p>
            <Form.Item name="field43">
              <DatePicker />
            </Form.Item>
          </div>
        )}
      </span>
      {essai === true && travail === "privé" && contratTravail === "cdi" && (
        <div className="bulle">
          Vos revenus ne seront pas pris en compte en période d'essai. Vous
          pouvez attendre ou, si c'est possible, vous accorder avec votre
          employeur pour confirmer votre CDI.
        </div>
      )}
      {contratTravail === "cdd" && (
        <div className="bulle">
          <HiInformationCircle /> Vos revenus en CDD ne seront pas pris en
          compte par les banques dans le calcul de votre capacité d'emprunt
        </div>
      )}
    </div>
  );
}
