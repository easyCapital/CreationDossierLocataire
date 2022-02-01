import React from "react";
import { HomeWrapper } from "./SecondHome.style";
import { Button } from "antd";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import ArticleGuides from "../../components/guides/ArticleGuides";
import Footer from "../../components/global/Footer/Footer";

import { Steps, Card, Collapse, Spin, Space, Tabs } from "antd";

export default function SecondHome() {
  const [loaded, setLoaded] = useState(false);
  const { TabPane } = Tabs;

  useEffect(() => {
    Aos.init({ duration: 1500 });
    setLoaded(true);
  }, []);

  //steps antd
  const { Step } = Steps;

  //collase antd
  const { Panel } = Collapse;
  function callback(key) {
    console.log(key);
  }
  //blog
  const { Meta } = Card;

  if (!loaded)
    return (
      <div className="loading_spinner">
        <Space size="middle">
          <Spin size="large" className="loading_spinner" />
        </Space>
      </div>
    );
  else
    return (
      <HomeWrapper>
        <div className="main">
          <div className="textG">
            <div className="middle_text">
              <h1 className="p_text">
                Gérez tout votre patrimoine où vous le souhaitez
              </h1>

              <div className="txtGray">
                Un <strong>outil de gestion de patrimoine</strong> simple et
                puissant qui vous offre un suivi et des analyses précises pour
                vous accompagner au quotidien. <br />
                <br /> Le seul outil accessible qui compare toutes les
                <strong>
                  &nbsp;solutions d'investissements immobilières
                </strong>{" "}
                ou <strong>financières</strong> pour prendre les bonnes
                décisions.
              </div>
              <div className="begin">
                <div>
                  <Button type="Primary" className="btn_header">
                    <Link href="/">Commencer à gérer avec un conseiller</Link>
                  </Button>
                </div>
                <div>
                  <Button type="Primary" className="bl">
                    <Link href="/">Commencer à gérer seul</Link>
                  </Button>
                </div>
              </div>

              <div className="elemCoche">
                <FontAwesomeIcon icon={faCheck} id="checkbox" />
                &nbsp;Aucune carte de crédit requise &nbsp;
                <FontAwesomeIcon icon={faCheck} id="checkbox" />
                &nbsp;Pas de logiciel à installer
              </div>
            </div>
            <div className="tableImage">
              <img
                src="https://res.cloudinary.com/easycapital/image/upload/v1625143187/espace_client/mn2oepbq7nds9zpj2tfx.png"
                className="img_header_fixe"
                alt="femme présentant l'outil de gestion de patrimoine"
              />
              <img
                src="https://res.cloudinary.com/easycapital/image/upload/v1632313742/Visu%20page%20d%27accueil/femme%20outil/kia4gczp809ccxje6c8k.png"
                className="img_header_dyn_gauche"
                alt="apperçu outil de mon patrimoine immobilier"
              />

              <img
                src="https://res.cloudinary.com/easycapital/image/upload/v1632313739/Visu%20page%20d%27accueil/femme%20outil/itolh8wxxcp6kzw8japy.png"
                className="img_header_dyn_droite"
                alt="aperçu outil de mes placements financiers"
              />
            </div>
          </div>
          <div className="fin">
            <p>
              <div className="text_fin">
                Tous vos<strong> biens immobiliers </strong> et financiers
                analysés chaque jour pour
                <strong> diversifier, optimiser et économiser.</strong>
              </div>
            </p>

            <div className="footer">
              <img
                src="https://res.cloudinary.com/easycapital/image/upload/v1624606983/espace_client/uchezcqqyaiyb4ro8p19.png"
                alt="logo Orias"
                id="footer_img"
              />
              <img
                src="https://res.cloudinary.com/easycapital/image/upload/v1624606983/espace_client/ukr4vdhsp3xipfgrvnwg.png"
                alt="logo de la CNCGP"
                id="footer_img"
              />
              <img
                src="https://res.cloudinary.com/easycapital/image/upload/v1624606983/espace_client/ntalloq6fndqewinv4wa.png"
                alt="logo de la RGPD"
                id="footer_img"
              />
            </div>
          </div>

          <p className="petit_titre" data-aos="fade-up">
            Simplifier votre gestion faîtes le bon choix
          </p>
          <h2 className="titre_carousel" data-aos="fade-up">
            Les principales fonctions de l'outils
          </h2>

          <Tabs defaultActiveKey="1" onChange={callback} className="ant-tabs">
            <TabPane tab="Agréger votre patrimoine" key="1">
              <div className="page_carousel">
                <div className="page_carousel_droite">
                  <h3 className="titrePageCarousel" data-aos="fade-down">
                    Agréger <br /> votre patrimoine
                  </h3>

                  <p className="text_carousel" data-aos="fade-up">
                    Ajouter tous vos biens et tous vos contrats et votre épargne
                    sur une seule interface avec un niveau de sécurité bancaire.
                    <br /> Simple et rapide.
                  </p>
                </div>
                <div className="page_carousel_gauche" data-aos="fade-up">
                  <img
                    src="https://res.cloudinary.com/easycapital/image/upload/v1632475679/Visu%20page%20d%27accueil/principales%20fonctions%20de%20l%27outil/ej6vv9okllabqas9sfoa.webp"
                    alt="aperçu de l'outil de gestion de patrimoine"
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Suivre votre patrimoine" key="2">
              <div className="page_carousel">
                <div className="page_carousel_droite">
                  <h3 className="titrePageCarousel" data-aos="fade-down">
                    Suivre <br /> votre patrimoine
                  </h3>

                  <p className="text_carousel" data-aos="fade-up">
                    Suivez l'évolution de tous vos biens enregistrés pour
                    prendre les bonnes décisions ou optimiser vos
                    investissements.
                  </p>
                </div>
                <div className="page_carousel_gauche" data-aos="fade-up">
                  <img
                    src="https://res.cloudinary.com/easycapital/image/upload/v1632475477/Visu%20page%20d%27accueil/principales%20fonctions%20de%20l%27outil/hyfsdhkxlemd9kqbpkva.webp"
                    alt="homme conseillant un couple sur la gestion de son patrimoine"
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Analyser la diversification" key="3">
              <div className="page_carousel">
                <div className="page_carousel_droite" data-aos="fade-up">
                  <h3 className="titrePageCarousel" data-aos="fade-down">
                    Analyser <br /> la diversification
                  </h3>

                  <p className="text_carousel" data-aos="fade-up">
                    Eviter la redondance pour diminuer le risque lié à une
                    classe d'actif, une zone géographique ou un établissement
                    bancaire.
                  </p>
                </div>
                <div className="page_carousel_gauche" data-aos="fade-up">
                  <img
                    src="https://res.cloudinary.com/easycapital/image/upload/v1632475477/Visu%20page%20d%27accueil/principales%20fonctions%20de%20l%27outil/sokgw6mjgxhokaenm0an.webp"
                    alt="Personne analysant ses différentes possibilités d'investissements"
                  />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Calcul rendement locatif" key="4">
              <div className="style_carousel">
                <div className="page_carousel">
                  <div className="page_carousel_droite">
                    <h3 className="titrePageCarousel" data-aos="fade-down">
                      Calculer <br /> rendement locatif
                    </h3>
                    <p className="text_carousel" data-aos="fade-up">
                      Calculer le rendement net (TRI) de toutes les charges vous
                      permet de comparer l'investissement à toute autre
                      solution.
                    </p>
                  </div>
                  <div className="page_carousel_gauche" data-aos="fade-up">
                    <img
                      src="https://res.cloudinary.com/easycapital/image/upload/v1632475476/Visu%20page%20d%27accueil/principales%20fonctions%20de%20l%27outil/x5rlbjbshsvn3ayyia8t.webp"
                      alt="Personne calculant son rendement locatif"
                    />
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Calcul frais de transmission" key="5">
              <div className="page_carousel">
                <div className="page_carousel_droite">
                  <h3 className="titrePageCarousel" data-aos="fade-down">
                    Calculer <br /> les frais de transmission
                  </h3>

                  <p className="text_carousel" data-aos="fade-up">
                    Estimer les frais et la répartition de votre patrimoine en
                    cas de décès. Diminuez ces frais et organisez au mieux vos
                    actifs.
                  </p>
                </div>
                <div className="page_carousel_gauche" data-aos="fade-up">
                  <img
                    src="https://res.cloudinary.com/easycapital/image/upload/v1632475477/Visu%20page%20d%27accueil/principales%20fonctions%20de%20l%27outil/ezpehmvibdmcmz4h6pex.webp"
                    alt="Famille préparant la transmission de son patrimoine"
                  />
                </div>
              </div>
            </TabPane>
          </Tabs>

          <div>
            <h2 className="titre_steps" data-aos="fade-down">
              Comment ça marche ?
            </h2>
            <div className="section_steps">
              <div className="steps_gauche" data-aos="fade-up">
                <div className="images_superpose">
                  <img
                    src="https://res.cloudinary.com/easycapital/image/upload/v1624890947/espace_client/vb3jyoyba1xgmtbrause.jpg"
                    className="img_fixe"
                    alt="homme souriant devant son ordinateur regardant les différentes opportunités d'investissements"
                  />
                </div>
              </div>

              <div className="steps">
                <Steps direction="vertical" current={-1}>
                  <Step
                    title="Je détaille mon patrimoine"
                    description="Agrégez vos comptes ou ajouter
  manuellement l’ensemble de votre
  patrimoine qu’il soit financier ou
  immobilier. "
                    data-aos="fade-down"
                  />
                  <Step
                    title={
                      <>
                        Je définis mon <strong>profil investisseur</strong>
                      </>
                    }
                    description="Définissez votre profil investisseur pour
                    analyser si ce que vous avez déjà mis en
                    place est en adéquation avec vos attentes."
                    data-aos="fade-down"
                  />
                  <Step
                    title="J'obtiens des recommandations"
                    description="Notre outil génère des
  recommandations pour mieux
  diversifier, diminuer vos frais ou
  encore mieux protéger vos proches."
                    data-aos="fade-down"
                  />
                  <Step
                    title="Je simule mes futurs investissements"
                    description={
                      <>
                        Projetez vos futurs investissements financiers ou
                        immobiliers. Prenez conseil avec un
                        <strong> expert en patrimoine</strong>
                      </>
                    }
                    data-aos="fade-down"
                  />
                </Steps>
              </div>
            </div>
          </div>
          <div className="section_metier_wrapper">
            <div id="cercle_vert" data-aos="fade-up" />
            <div id="cercle_noir" data-aos="fade-up" />
            <div id="cercle_jaune" data-aos="fade-up" />
            <div id="cercle_bleu" data-aos="fade-up" />
            <div className="section_Metiers">
              <h3 className="petit_titre">
                Vous souhaitez passer à l'action ?
              </h3>
              <h2 className="titre_metiers_orange">
                Toutes les solutions du marché sont ici
              </h2>

              <div className="section_metiers">
                <div className="metiers_col1">
                  <div className="bloc_metier_left" data-aos="fade-up">
                    <h3 className="metier_titre_left">Immobilier</h3>
                    Optez pour le meilleur régime fiscal dans l'immobilier neuf
                    ou ancien.
                  </div>
                  <div className="bloc_metier_left" data-aos="fade-up">
                    <h3 className="metier_titre_left">SCPI</h3>
                    65 SCPI sans surcoût pour vous diversifier sans redondance.
                  </div>
                  <div className="bloc_metier_left" data-aos="fade-up">
                    <h3 className="metier_titre_left">Crédit</h3>
                    Aide au montage de votre dossier pour obtenir les meilleurs
                    taux.
                  </div>
                </div>
                <div className="metiers_col2">
                  <img
                    src="https://res.cloudinary.com/easycapital/image/upload/v1632477357/Visu%20page%20d%27accueil/zbsxlyo5ccn2kurnuter.webp"
                    className="img_metiers"
                    alt="femme consultant toutes les solutions du marché"
                  />
                  <div className="bloc_metier_middle" data-aos="fade-up">
                    <h3 className="metier_titre_middle">Epargne entreprise</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  </div>
                </div>
                <div className="metiers_col3">
                  <div className="bloc_metier" data-aos="fade-up">
                    <h3 className="metier_titre_right">Assurance vie</h3>
                    Les meilleurs contrats retenus pour leurs atouts, en
                    adéquation avec votre profil.
                  </div>
                  <div className="bloc_metier" data-aos="fade-up">
                    <h3 className="metier_titre_right">Défiscalisation</h3>
                    Forêts, vignes, Girardin, FIP/FCPI nous choisissons le plus
                    adéquat.
                  </div>
                  <div className="bloc_metier" data-aos="fade-up">
                    <h3 className="metier_titre_right">Prévoyance</h3>
                    Nous comparons chaque année tous vos contrats pour le
                    meilleur.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq">
            <div className="titre_faq">
              <p id="weAre" data-aos="fade-up">
                Nous sommes là pour vous aider
              </p>
              <h2 id="Freq" data-aos="fade-up">
                Foire aux questions
              </h2>
            </div>

            <div className="collapse" data-aos="fade-up">
              <Collapse
                accordion
                defaultActiveKey={["1"]}
                ghost
                onChange={callback}
                expandIconPosition={"up"}
              >
                <Panel
                  header="Quelle différence par rapport à une banque ou un gestionnaire de patrimoine ?"
                  key="1"
                >
                  <p>
                    Les banques ne sont désormais plus des interlocuteurs
                    fiables par manque de formation et de moyens humains. Le
                    conseiller en gestion de patrimoine subit souvent la
                    complexité administrative ce qui lui impose de réduire son
                    offre au stricte minimum. Il est donc difficile aujourd'hui
                    de proposer tous les services simplement.
                  </p>
                </Panel>
                <Panel
                  header="Suis-je obligé de souscrire des placements avec vous ?"
                  key="2"
                >
                  <p>
                    Nous avons choisi un modèle où un abonnement est nécessaire
                    pour accéder à toutes nos fonctions. A ce titre, vous n'avez
                    aucune obligation de souscrire à une solution de placement.
                    C'est simple et transparent.
                  </p>
                </Panel>
                <Panel
                  header="Suis-je engagé avec Easy Capital dans le temps ?"
                  key="3"
                >
                  <p>
                    Non, il n'y a pas d'engagement tant sur la partie conseil
                    via notre application que lorsque vous réalisez des
                    investissements financiers ou immobiliers. A nous de vous
                    apporter satisfaction pour travailler longtemps ensemble.
                  </p>
                </Panel>
              </Collapse>
            </div>
          </div>

          <div className="section_blog">
            <div className="titre_faq" data-aos="fade-up">
              <h2 className="titre_blog">Les derniers guides patrimoniaux</h2>
              <h2 className="petit_titre_blog" data-aos="fade-up">
                Choisir les bonnes solutions, en connaissance de cause
              </h2>
            </div>
            <div className="blog">
              <ArticleGuides
                className="article"
                content={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad officiis architecto perferendis, aliquid mollitia quam quia praesentium recusandae, cupiditate inventore autem earum maiores doloribus! Quia, fugiat. Illo ipsam beatae eligendi?"
                }
                title={"titre"}
                theme={"theme"}
                date={"02/12/2021"}
                img={
                  "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png"
                }
                type={"small"}
                tags={["tag1", "tag2"]}
              />
              <ArticleGuides
                className="article"
                content={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad officiis architecto perferendis, aliquid mollitia quam quia praesentium recusandae, cupiditate inventore autem earum maiores doloribus! Quia, fugiat. Illo ipsam beatae eligendi?"
                }
                title={"titre"}
                theme={"theme"}
                date={"02/12/2021"}
                img={
                  "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png"
                }
                type={"small"}
                tags={["tag1", "tag2"]}
              />
              <ArticleGuides
                className="article"
                content={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad officiis architecto perferendis, aliquid mollitia quam quia praesentium recusandae, cupiditate inventore autem earum maiores doloribus! Quia, fugiat. Illo ipsam beatae eligendi?"
                }
                title={"titre"}
                theme={"theme"}
                date={"02/12/2021"}
                img={
                  "https://res.cloudinary.com/easycapital/image/upload/v1625216870/espace_client/fbl1getnlsjy7buymnrh.png"
                }
                type={"small"}
                tags={["tag1", "tag2"]}
              />
            </div>
          </div>
          <Footer />
        </div>
      </HomeWrapper>
    );
}
