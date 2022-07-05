import { HomeWrapper } from "./Home.style";
import { useState, useEffect } from "react";
import { Input, Button, Spin, Space, Divider, Modal, Card } from "antd";
import { useRouter } from "next/router";
import { RightOutlined } from "@ant-design/icons";
import { setCookies, getCookies } from "cookies-next";
import HttpService from "../../services/HttpService";
import { useDispatch, useSelector } from "react-redux";
import { LoadProfileAction } from "../../redux/actions/ProfileActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home({ profileResponse }) {
  const router = useRouter();
  const [hasAccount, setHasAccount] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadProfileAction());
  }, []);

  async function checkIfUserHasAccount() {
    // const http = new HttpService();
    // const url = "users/userHasAccount";
    // const data = {
    //   email: String(getCookies("mail")?.mail)
    //     .replace("%40", "@")
    //     .replace("undefined", ""),
    // };
    // http
    //   .postData(data, url)
    //   .then((data) => {
    //     setHasAccount(data["data"]["hasAccount"]);
    //     if (data["data"]["hasAccount"]) {
    //       router.push("/signin");
    //       return;
    //     }
    //     router.push("/signup");
    //   })
    //   .catch((error) => {});
    // return hasAccount;

    const http = new HttpService();
    setCookies("email", email);
    http.postData(null, "folders").then((response) => {
      router.push("/folder/" + response.data.folder.slug);
    });
  }

  return (
    <HomeWrapper>
      <div className="main">
        <h1>
          Constituez votre dossier locataire
          <br />
          <span className="blue">Partagez le en toute sécurité</span>
        </h1>
        <strong>
          Passloc vous permet de transmettre rapidement à n'importe quel
          propriétaire ou <br /> agence immobilière votre dossier de candidature
          propre et conforme.
        </strong>
        {profileResponse?.data?.user.folders.length == 3 ? (
          <div>
            <Button type="primary" shape={"round"}>
              <Link href="/mes-dossiers">Accéder à mes dossiers</Link>
            </Button>
          </div>
        ) : (
          <div>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Votre adresse e-mail"
              value={email}
            />
            <Button
              shape="round"
              type="primary"
              onClick={checkIfUserHasAccount}
            >
              Commencer
            </Button>
          </div>
        )}
        <FontAwesomeIcon icon={faAngleDown} className="arrow" />
      </div>

      <Divider />
      <div className="explanation">
        <h2>
          Passloc, création de dossier
          <br />
          locataire en ligne
        </h2>
        <h3 className="blue">
          Déposez votre dossier, partagez le, trouvez votre logement
        </h3>
        <div className="steps">
          <div>
            <h3>
              1.
              <br />
              Constituez
            </h3>
            <p>
              Remplissez le formulaire dédié pour constistuer votre dossier
              locataire complet.
            </p>
          </div>
          <div>
            <h3>
              2.
              <br />
              Partagez
            </h3>
            <p>
              Partagez en quelques clics votre dossier aux agences immobilières.
            </p>
          </div>
          <div>
            <h3>
              3.
              <br />
              Trouvez
            </h3>
            <p>
              Trouvez votre logement rapidement grâce à votre dossier Passloc.
            </p>
          </div>
        </div>
      </div>

      <Divider />
      <div className="partenaires">
        <h2>Nos partenaires</h2>
        <div>
          <img src={"/logo_wilok.png"} alt="logo wilok" width="400" />
          <img
            src={"/easycapital_logo.svg"}
            alt="logo easycapital"
            width="600"
          />
        </div>
      </div>
    </HomeWrapper>
  );
}
