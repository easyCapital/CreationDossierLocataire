import { HomeWrapper } from "./Home.style";
import { useState, useEffect } from "react";
import { Input, Button, Spin, Space, Divider, Modal, Card } from "antd";
import { useRouter } from "next/router";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { RightOutlined } from "@ant-design/icons";
import { setCookies, getCookies } from "cookies-next";
import HttpService from "../../services/HttpService";
import { useDispatch, useSelector } from "react-redux";
import { LoadProfileAction } from "../../redux/actions/ProfileActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Home({ loggedIn }) {
  const [loaded, setLoaded] = useState(true);
  const router = useRouter();
  const [hasAccount, setHasAccount] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.userDetails.userProfile);

  useEffect(() => {
    setLoaded(loggedIn ? true : false);
    console.log(loggedIn);
    console.log(loaded);
  }, [loggedIn]);

  useEffect(() => {
    dispatch(LoadProfileAction());
  }, []);

  function setMail(e) {
    setCookies("mail", e);
  }

  async function checkIfUserHasAccount() {
    const http = new HttpService();
    const url = "users/userHasAccount";
    const data = {
      email: String(getCookies("mail")?.mail)
        .replace("%40", "@")
        .replace("undefined", ""),
    };
    http
      .postData(data, url)
      .then((data) => {
        setHasAccount(data["data"]["hasAccount"]);
        if (data["data"]["hasAccount"]) {
          router.push("/signin");
          return;
        }
        router.push("/signup");
      })
      .catch((error) => {});
    return hasAccount;
  }

  function getUserFolder(user, slug) {
    setCookies("slug", slug);
    return (
      <Card
        title={user?.firstname + " " + user?.lastname}
        extra={
          <Button
            onClick={() => router.push("/folder/" + slug)}
            style={{ color: "black", fontSize: 13 }}
          >
            Editer
          </Button>
        }
        style={{ width: 300, margin: 10 }}
      >
        <p>Prenom - {user?.firstname}</p>
        <p>Nom - {user?.lastname}</p>
        <p>Mail - {user?.email}</p>
      </Card>
    );
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
          Passloc vous permet de transmettre à n'importe quel propriétaire ou
          <br />
          agence immobilière votre dossier de candidature propre et conforme.
        </strong>
        {!loggedIn && (
          <div>
            <Input
              onChange={(e) => {
                setMail(e.target.value);
              }}
              placeholder="Votre mail"
            />
            <Button
              shape="round"
              type="primary"
              icon={<RightOutlined />}
              size={"large"}
              onClick={() => {
                checkIfUserHasAccount();
              }}
            >
              Commencer
            </Button>
          </div>
        )}
        {loaded &&
          loggedIn &&
          profile?.data?.user?.folders?.map((folder) => {
            return (
              <div className="inlineblock">
                {getUserFolder(folder.users[1], folder.slug)}
              </div>
            );
          })}
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
        <img src={"/logo_wilok.png"} alt="logo wilok" width="500" />
      </div>

      <Divider />

      <div className="footer">
        <div className="column">
          <img src="https://picsum.photos/100/100" />
        </div>
        <div className="column">
          <img src="https://picsum.photos/100/100" />
        </div>
        <div className="column">
          <img src="https://picsum.photos/100/100" />
        </div>
      </div>
    </HomeWrapper>
  );
}
