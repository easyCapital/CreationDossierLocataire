import { Divider } from "antd";
import { FooterWrapper } from "./Footer.style";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="top">
        <img src="../../../passloc-logo.png" alt="logo Passloc" />
      </div>
      <Divider />
      <div className="bottom">
        <div>
          <p>Traitement des données</p>
          <p>Contact</p>
        </div>
        <div>
          <p>70 Avenue de Branne, 33370 TRESSES</p>
        </div>
      </div>
    </FooterWrapper>
  );
}
