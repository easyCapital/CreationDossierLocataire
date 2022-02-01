import { HeaderOutilWrapper } from "./HeaderOutil.style";
import { HiOutlineNewspaper } from "react-icons/hi";
import "aos/dist/aos.css";

import { Button } from "antd";

export default function HeaderOutil() {
  return (
    <HeaderOutilWrapper>
      <div className="ligne1">
        <div className="gauche" data-aos="fade-right">
          <h1 className="titre" data-aos="fade-down">
            Le seul agrégateur du marché qui vous apporte
            <span> un conseil personnalisé !</span>
          </h1>
          <br />
          <div className="txt">
            Une vision globale de votre patrimoine <br /> Des conseils adaptés à
            votre situation <br /> Des propositions personnalisées rien que pour
            vous !
          </div>
          <div className="btn_header">
            <Button className="btn_gauche">Prendre rendez-vous</Button>
            <Button className="btn_droite">Démarrer maintenant</Button>
          </div>
        </div>
        <div className="droite">
          <img
            src="https://res.cloudinary.com/easycapital/image/upload/v1625213259/espace_client/wp1cf3pfzjbfingoivag.png"
            data-aos="fade-up"
          />
        </div>
      </div>
      <div className="ligne2">
        <div className="col1" data-aos="fade-up">
          <h3 className="titre">Données sécurisées</h3>
          <p className="txt">
            Sécurité de niveau bancaire, vos données sont stockées en France
            uniquement. Vous choisissez de transmettre celles-ci à des tiers ou
            non.
          </p>
        </div>
        <div className="col2" data-aos="fade-up">
          <h3 className="titre">Gestionnaire de patrimoine dédié</h3>
          <p className="txt">
            Votre banquier ne répond pas ? <br /> Nous proposons un suivi
            personnalisé à nos clients par tous les moyens de communications
          </p>
        </div>
        <div className="col3" data-aos="fade-up">
          <h3 className="titre">Toutes les solutions du marché</h3>
          <p className="txt">
            Mettez en place toutes les solutions recommandées directement votre
            espace client. Suivez l'évolution chaque année.
          </p>
        </div>
      </div>
      <div className="nouveaute" data-aos="fade-up">
        <h3 className="titre">
          <HiOutlineNewspaper className="icone" /> Nouveauté
        </h3>
        <div className="content">
          Dans notre dernière version, vous pouvez réaliser des <strong>simulations
          d'investissements</strong> sur vos futurs achats immobiliers. On compare pour
          vous tous les régimes fiscaux, crédits et apports pour faire le bon
          choix !
        </div>
      </div>
    </HeaderOutilWrapper>
  );
}
