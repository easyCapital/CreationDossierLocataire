import { NousWrapper } from "./Nous.style";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Spin, Space, Button } from "antd";
// import HeaderNous from "../../components/Nous/HeaderNous";
import { AiOutlineCheck, AiOutlineStop } from "react-icons/ai";
import Footer from "../../components/global/Footer/Footer";
import BlocOutilDroite from "../../components/outil/BlocOutil/BlocOutilDroite.js";
import BlocOutilGauche from "../../components/outil/BlocOutil/BlocOutilGauche.js";
import { useMediaQuery } from "react-responsive";

export default function Outil() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

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
          <NousWrapper>
            <div className="img_team">
              <div className="hello">Hello</div>
              <img
                src="https://res.cloudinary.com/easycapital/image/upload/v1625733998/espace_client/wphgqxwon8wpwojidze6.png"
                className="maskhero"
              />
            </div>
            <div className="section2">
              <div className="txt">
                Nous sommes convaincus que la gestion de votre patrimoine doit
                être simple, accessible et agréable. <br /> <br /> Depuis 2008,
                nous nous chargeons de la partie chronophage et complexe pour
                vous permettre de vous concentrer sur l'essentiel : faire les
                choix adaptés à votre situation en étant bien informés. <br />
                <br /> Nos algorithmes intelligents ont été pensé pour vous
                aider à faire les bons choix mais nous avons à coeur de vous
                proposer une équipe dynamique, formée et disponible pour vous
                accompagner dans vos décisions d'investissements. <br />
                <br /> Mise à part notre solution, qui peut se targuer d'avoir
                un capital totalement indépendant des banques, assureurs ou
                promoteurs ? C'est pourtant un point essentiel pour avoir une
                vision éclairée de toutes les solutions adaptées qui s'offrent à
                vous et ce, en toute transparence.
              </div>
              <Button className="btn">Débuter ma simulation</Button>
            </div>

            <div className="section3">
              <div className="gauche">
                <img src="https://res.cloudinary.com/easycapital/image/upload/v1626166215/espace_client/zy0hje76uzzqevlbiugl.png" />
              </div>
              <div className="droite">
                <h2 className="title">
                  Transparence et conseil ne suffisent plus. Visons une approche
                  + responsable.
                </h2>
                <div className="txt">
                  Diriger nos choix d'entreprises vers des valeurs qui nous
                  tiennent à coeur, c'est notre philosophie. Equité, esprit
                  d'équipe, zéro déchet et zéro CO2 sont nos objectifs internes.{" "}
                  <br /> <br /> Pour vous, nous réservons une approche globale
                  dédiée aux investissements responsables mais toujours avec une
                  vision globale et transparente.
                </div>
              </div>
            </div>
            <div className="blocs">
              <BlocOutilDroite
                title={<h3 className="title">Une énergie propre</h3>}
                img="https://res.cloudinary.com/easycapital/image/upload/v1626096013/espace_client/c2v42f5ri9ob0ochpqik.jpg"
                className="bloc"
              >
                Certains diront que ça n'est pas le meilleur des choix pour les
                problématiques de recyclage. De notre côté, nous préférons
                passer à l'action en générant l'énergie verte nécessaire à nos
                locaux pour avoir un bilan carbonne y compris fabrication des
                panneaux, à ZERO ! Enfin, parce que malheureusement ces panneaux
                ne couvrent pas toute notre consommation nous avons choisi un
                fournisseur d'électricité 100% verte.
              </BlocOutilDroite>
              <BlocOutilGauche
                title={<h3 className="title">Des véhicules électriques</h3>}
                img="https://res.cloudinary.com/easycapital/image/upload/v1626094991/espace_client/agpspsopi1bwbfsrjz3v.png"
                className="bloc"
              >
                Une bonne partie de nos rendez-vous se déroule désormais à
                distance, en visio, réduisant ainsi le CO2 émis par les
                kilomètres non parcourus. Pour certains de nos métiers, ça n'est
                pas possible ! Nous avons fait le choix d'acheter des véhicules
                Renault Zoé parce que les batteries utilisent peu de matières
                rares et permettent ainsi un bilan carbonne à ZERO pour nos
                trajets professionnels.
              </BlocOutilGauche>
              <BlocOutilDroite
                title={<h3 className="title">Des serveurs économes</h3>}
                img="https://res.cloudinary.com/easycapital/image/upload/v1626095072/espace_client/tpbbp36ol5i2ijyd1ocb.png"
                className="bloc"
              >
                Nos serveurs sécurisés ne sont pas installés à l'autre bout du
                monde mais en France, à Clermont Ferrand. Nos partenaires
                utilisent des technologies de refroidissement les plus économes
                possibles notamment le free cooling utilisant l'air frais
                extérieur. Et depuis 3 ans, nous n'utilisons plus de papier !
              </BlocOutilDroite>
            </div>
            <div className="jobs">
              <h3 className="title">Jobs</h3>
              <div className="txt">
                Vous cherchez un job dans une équipe incroyable ?
              </div>
              <Button className="btn">C'est parti</Button>
            </div>
            <Footer />
          </NousWrapper>
    );
}
