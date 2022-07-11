import { Divider } from "antd";
import Link from "next/link";
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
          <Link href="/traitement-des-donnees">Traitement des données</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <p>70 Avenue de Branne, 33370 TRESSES</p>
        </div>
      </div>
    </FooterWrapper>
  );
}
