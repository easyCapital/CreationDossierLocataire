import { CarouselTarifsWrapper } from "./CarouselTarifs.style";
import Link from "next/link";

import {
  Tabs,
  Table,
} from "antd";
//test
export default function CarouselTarifs() {
  const { TabPane } = Tabs;
  const columns = [
    {
      title: "Montant",
      dataIndex: "montant",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "% ttc du montant du bien",
      className: "column-money",
      dataIndex: "ttc",
      align: "right",
    },
    {
      title: "Avec un maximum",
      dataIndex: "max",
    },
  ];

  const data = [
    {
      key: "1",
      montant: "Jusqu'à 130 000€",
      ttc: "10%",
      max: "11 700€ TTC",
    },
    {
      key: "2",
      montant: "De 130 000€ à 180 000€",
      ttc: "9%",
      max: "14 400€ TTC",
    },
    {
      key: "3",
      montant: "De 180 000€ à 220 000€",
      ttc: "8 %",
      max: "16 500€ TTC",
    },
    {
      key: "4",
      montant: "De 220 000€ à 300 000€",
      ttc: "7.5 %",
      max: "19 500€ TTC",
    },
    {
      key: "5",
      montant: "A partir de 300 000 €",
      ttc: "6,5 %",
      max: "-",
    },
  ];

  const columns2 = [
    {
      title: "Surface du bien",
      dataIndex: "surface",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Zone tendue",
      className: "column-money",
      dataIndex: "zone",
      align: "right",
    },
    {
      title: "Reste du territoire",
      dataIndex: "reste",
    },
    {
      title: "Avec un maximum",
      dataIndex: "max",
    },
  ];

  const data2 = [
    {
      key: "1",
      surface: "de moins de 45 m² habitables",
      zone: "10€/m²",
      reste: "8€/m²",
      max: "414€ TTC",
    },
    {
      key: "2",
      surface: "de 46 m² de 75 m² habitables",
      zone: "9€/m²",
      reste: "8€/m²",
      max: "608€ TTC",
    },
    {
      key: "3",
      surface: "de plus de 75 m² habitables",
      zone: "8€/m²",
      reste: "8€/m²",
      max: "-",
    },
  ];
  return (
    <CarouselTarifsWrapper>
      <h2 className="title">
        Tarifs pour mettre en place les recommandations :
      </h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Courtage en Placement" key="1">
          <h3 className="titre">Courtage en placement</h3>
          <div className="page_carousel">
            <div className="gauche">
              Nous sommes directement rémunérés par les compagnies par
              rétrocession d'une partie des frais de gestion tout comme votre
              établissement bancaire, votre banque en ligne ou votre assureur.
              Notre force réside en deux points essentiels : des frais de
              gestion globaux plus faible et un accompagnement global qu'aucun
              autre partenaire n'est en mesure de vous fournir. Si l'un des
              contrats proposés n'est plus adapté au besoin pour lequel nous
              l'avions choisi alors nous vous orienterons vers une solution plus
              adaptée car nous n'avons aucun lien avec nos fournisseurs !
            </div>
            <div className="droite">
              Frais d'étude : 0 €
              <br />
              Frais entrée : à partir de 0%
              <br />
              Frais sortie : 0 %
              <br />
              Frais de gestion € / UC : Selon les contrats proposés
              <br />
              Frais d'arbitrage : à partir de 0%
            </div>
          </div>
        </TabPane>
        <TabPane tab="Agence immobilière" key="2">
          <h3 className="titre">Agence immobilière</h3>
          <div className="page_carousel">
            <div className="gauche">
              <div className="transaction">
                <h1>Transaction dans l'ancien</h1>
                <p>
                  Pour les biens allant jusqu’à 50 000 €, un forfait de 5 000 €
                  sera appliqué.
                </p>
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  bordered
                />
                <br />
                <p>Montant facturé à l’acheteur.</p>
              </div>
              <div className="etat">
                <h1>Etat des lieux</h1>
                <ul>
                  <li>
                    Entrée : 3€/m² facturé au locataire et 3€/m² facturé au
                    bailleur
                  </li>
                  <li>
                    Sortie sans remise en location : 6€/m² pour le propriétaire
                    bailleur
                  </li>
                </ul>
              </div>
              <div className="estimation">
                <h1>Estimation d'un bien</h1>
                <ul>
                  <li>
                    Inclus la visite et la rédaction d’un rapport d’estimation
                  </li>
                  <li>Forfait de 150€ TTC pour un T1 + 50€ TTC par pièce</li>
                </ul>
              </div>
            </div>
            <div className="droite">
              <div className="mise">
                <h1>Mise en location</h1>
                <h2>Mise en location (hors colocations):</h2>
                <Table
                  columns={columns2}
                  dataSource={data2}
                  pagination={false}
                  bordered
                />
                <br />
                <p>
                  Montant facturé au locataire et au propriétaire. Inclus la
                  visite, la constitution du dossier du locataire et la
                  rédaction du bail.
                </p>
                <p>Honoraires locataire :</p>
                <ul>
                  <li>
                    Constitution du dossier et rédaction du bail : forfait de 40
                    € TTC
                  </li>
                  <li>Etat des lieux : 3 €/m²</li>
                </ul>
                <h2>Tarifs dédiés à la colocation :</h2>
                <p>Honoraires propriétaire :</p>
                <ul>
                  <li>
                    Constitution du dossier et rédaction du bail : forfait de
                    200 € TTC
                  </li>
                  <li>
                    Constitution du dossier, rédaction du bail et visites :
                    forfait de 300 € TTC
                  </li>
                  <li>Etat des lieux : 3 €/m²</li>
                </ul>
                <p>Honoraires colocataire :</p>
                <ul>
                  <li>
                    Constitution du dossier, rédaction du bail et état des lieux
                    : forfait de 80 € TTC
                  </li>
                </ul>
                <p>
                  La loi impose que le montant payé par le locataire ne peut
                  dépasser à la fois :
                </p>
                <ul>
                  <li>le montant facturé au bailleur</li>
                  <li>
                    un plafond réglementaire de prix TTC par mètre carré de
                    surface habitable
                  </li>
                </ul>
                <h2>Etat des lieux</h2>
                <ul>
                  <li>
                    Entrée : 3€/m² facturé au locataire et 3€/m² facturé au
                    bailleur
                  </li>
                  <li>
                    Sortie sans remise en location : 6€/m² pour le propriétaire
                    bailleur
                  </li>
                </ul>
                <h2>Estimation d’un bien</h2>
                <ul>
                  <li>
                    Inclus la visite et la rédaction d’un rapport d’estimation
                  </li>
                  <li>Forfait de 150€ TTC pour un T1 + 50€ TTC par pièce</li>
                </ul>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Courtage en prêt" key="3">
          <h3 className="titre">Courtage en prêt</h3>
          <div className="page_carousel">
            <div className="gauche">
              En qualité de courtier, nous vous permettront de trouver la
              solution la plus adaptée : durée de prêt, taux, assurances
              emprunteurs. Nous nous rémunérons de façon transparente pour
              comparer toutes les banques et ne pas avoir d'obligation de ventes
              de produits additionnels qui ne seraient pas adaptés à votre
              situation.
            </div>
            <div className="droite">
              Étude du dossier : 500 €
              <br /> Accompagnement à l'édition des offres : 1% du montant
              emprunté déduction faite de l'étude et plafonné à 3 000€
            </div>
          </div>
        </TabPane>
        <TabPane tab="Courtage en assurance" key="4">
          <h3 className="titre">Courtage en assurance</h3>
          <div className="page_carousel" id="text_center_droite">
            <div className="gauche"></div>
            <div className="droite"></div>
          </div>
        </TabPane>
        <TabPane tab="Gestion locative" key="5">
          <h3 className="titre">Gestion locative</h3>
          <div className="page_carousel">
            <div className="gestion">
              <p>Location simple : 8,52% TTC des loyers encaissés.</p>
              <p>Colocation : 10,00% TTC des loyers encaissés.</p>
              <p>Montant facturé au bailleur.</p>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </CarouselTarifsWrapper>
  );
}
