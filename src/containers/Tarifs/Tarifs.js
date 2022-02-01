import { TarifsWrapper } from "./Tarifs.style";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Spin, Space, Button } from "antd";
import HeaderTarifs from "../../components/tarifs/HeaderTarifs";
import { AiOutlineCheck, AiOutlineStop } from "react-icons/ai";
import { BiCheckCircle } from "react-icons/bi";
import SectionTarifs from "../../components/tarifs/SectionTarifs";
import CarouselTarifs from "../../components/tarifs/CarouselTarifs";
import Footer from "../../components/global/Footer/Footer";

export default function Outil() {
  const [showImage, setShowImage] = useState(false);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1500 });
    setLoaded(true);
    console.log("loaded");
  }, []);

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
      <TarifsWrapper>
        <HeaderTarifs />
        <h2 className="title">
          Tarifs pour utiliser notre outil de conseil en ligne
        </h2>
        <SectionTarifs />
        <div className="comparatif">
          <div className="gauche">
            <h3 className="titre">Les offres de nos concurrents</h3>
            <div className="txt">
              <p>
                <span>
                  <AiOutlineStop /> &nbsp;
                </span>
                <span> Aucun autre outil n'est aussi complet</span>
              </p>
              <p>
                <span>
                  <AiOutlineStop /> &nbsp;
                </span>{" "}
                Toujours orienté soit financier, soit immobilier
              </p>
              <p>
                <span>
                  <AiOutlineStop /> &nbsp;
                </span>{" "}
                Toujours lié à un promoteur, un assureur, une banque
              </p>
            </div>
          </div>
          <div className="droite">
            <h3 className="titre">Notre pricing</h3>
            <div className="txt">
              <p>
                <span>
                  <BiCheckCircle /> &nbsp;
                </span>
                <span>Sans engagement</span>
              </p>
              <p>
                <span>
                  <BiCheckCircle /> &nbsp;
                </span>
                <span>Sécurité de niveau bancaire</span>
              </p>
              <p>
                <span>
                  <BiCheckCircle /> &nbsp;
                </span>
                <span>Données stockées en France et non revendues</span>
              </p>
            </div>
          </div>
        </div>
        <CarouselTarifs />
        <h3 className="title_rep">Réponses aux questions courantes</h3>
        <div className="reponses">
          <div className="gauche">
            <h2 className="question">
              L'outil permet-il de souscrire à des placements ?
            </h2>
            <p className="txt">
              Oui et non. Certaines solutions restent à valider avec un
              conseiller et nécessitent par ailleurs de vous communiquer des
              informations pré contractuelles permettant une meilleure
              transparence.
            </p>
            <br />
            <h2 className="question">Pourquoi une version payante ?</h2>
            <p className="txt">
              Nous souhaitons vous offrir une approche globale sans obligation
              de réaliser des placements financiers ou immobiliers par notre
              intermédiaire. L'accès à cet outil vous permet donc de trouver des
              réponses parmi toutes les solutions pouvant s'offrir à vous, sans
              obligation de les réaliser avec nous.
            </p>
          </div>
          <div className="droite">
            <h2 className="question">Votre société est-elle indépendante ?</h2>
            <p className="txt">
              Notre capital social est indépendant de toute banque, assurance ou
              promoteur afin d'avoir la possibilité de vous proposer
              concrètement toutes les solutions qu'il nous semble intéressant de
              vous proposer.
            </p>
            <br />
            <h2 className="question">
              Proposez vous vraiment tous les produits ?
            </h2>
            <p className="txt">
              C'est impossible mais nous oeuvrons à retenir la majorité des
              produits marché afin de vous permettre une vision globale de ce
              qui pourrait correspondre à votre situation. Il vous reste ensuite
              à mettre en oeuvre ces solutions seul ou via notre intermédiaire.
            </p>
          </div>
        </div>
        <div className="jobs">
          <div className="title">Gestion de patrimoine en ligne</div>
          <div className="txt">
            Suivez vos investissement et prenez les bonnes décisions
          </div>
          <Button className="btn">C'est parti</Button>
        </div>
        <Footer className="footer" />
      </TarifsWrapper>
    );
}
