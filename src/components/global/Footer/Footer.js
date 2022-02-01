import { FooterWrapper } from "./Footer.style";
import { ImBooks, ImFacebook } from "react-icons/im";
import { GrLinkedinOption } from "react-icons/gr";
import { GiThink } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="footer_ligne1">
        <div className="col_footer_left">
          <a href="#top">
            <img src="../../../easycapital_logo.svg" alt="logo d'Easy Capital" id="logoImage" />
          </a>
        </div>
        <div className="col_footer_middle">
          <div className="titre_footer">
            <a href="/outil">
              <GoGraph /> &nbsp;Fonctions outil
            </a>
          </div>
        </div>
        <div className="col_footer_right">
          <div className="titre_footer">
            <a href="/guides">
              <ImBooks /> Guide
            </a>
          </div>
        </div>
      </div>
      <div className="footer_ligne2">
        <div className="footer_ligne2_gauche">
          <div className="titre_footer">
            <a href="/nous">
              <GiThink /> &nbsp; Notre philosophie
            </a>
          </div>
          <p>
            Depuis 2008, nous accompagnons clients particuliers et chefs
            d'entreprises dans la prise de décision avec un regard global et
            transversal tant au niveau du conseil que des recommandations.
            Désormais, nous souhaitons offrir cette approche globale au plus
            grand nombre grâce à notre outil de gestion de patrimoine. <br />
            <br /> Nous défendons une vision stricte du métier de la gestion de
            patrimoine où la transparence devrait être accrue et l'approche
            investissement responsable encouragée.
            <br />
            <br /> Notre capital est 100% familial sans banque, promoteur ou
            assureur pour une approche saine.
          </p>
        </div>
        <div className="footer_ligne2_droite">
          <div className="footer_contact">
            <div className="titre_footer">
              <a href="/contact">
                <IoMdContact />
                &nbsp; Contact
              </a>
            </div>
            70 Avenue de Branne <br /> 33370 TRESSES <br /> <br />
            bonjour@easycapital.fr <br />
            <div className="reseaux">
              <ImFacebook className="iconFb" />
              <AiFillLinkedin className="iconLnkdIn" />
            </div>
          </div>
        </div>
      </div>
      <div className="barre_footer">
        <hr />
      </div>

      <div className="footer_bas_bottom">
        <div> Condition d'utilisation </div>
        <div>Taitement des données </div>
        <div>Plan du site</div>
        <div>Réclamation</div>
      </div>
    </FooterWrapper>
  );
}
