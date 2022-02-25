import { IndexWrapper } from "./Index.style";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { Input, Button, Spin, Space, Divider, Modal, Card } from "antd";
import { getProviders } from "next-auth/client";
import { useRouter } from "next/router";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { RightOutlined } from "@ant-design/icons";
import { setCookies, getCookies } from "cookies-next";
import HttpService from "../../services/HttpService";
import { useDispatch } from "react-redux";
import { LoadProfileAction } from "../../redux/actions/ProfileActions";
import _map from "lodash/map";

export default function IndexContainer({ loggedIn }) {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const [hasAccount, setHasAccount] = useState(false);
  const dispatch = useDispatch();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
    console.log(
      String(getCookies("mail")?.mail)
        .replace("%40", "@")
        .replace("undefined", "")
    );
    http
      .postData(data, url)
      .then((data) => {
        console.log("---");
        console.log(data);
        console.log(data["data"]);
        console.log(data["data"]["hasAccount"]);
        console.log("---");
        setHasAccount(data["data"]["hasAccount"]);
        if (data["data"]["hasAccount"]) {
          router.push("/signin");
          return;
        }
        router.push("/signup");
      })
      .catch((error) => {
        // if (error == "SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data"){
        //  setVisible(true);
        // }
        // exist = false;
      });
    return hasAccount;
  }

  function createCard(title, lastname, email) {
    for (let card of cards) if (card[0] == title && card[1] == lastname && card[2] == email) return;
    setCards([...cards, [title, lastname, email]]);
    console.log(cards);
  }

  function getForms() {
    const http = new HttpService();
    let url = "profile";
    let folders = [];
    http
      .getData(url)
      .then((data) => {
        // console.log(data.data.user.folders);
        const lst = Array(data.data.user.folders);
        console.log(lst);
        folders[0] = lst[0];
        for (let element of lst) {
          for (let elm of element) {
            for (let elm2 of elm.users) {
              console.log(elm2.firstname);
              console.log(elm2.lastname);
              console.log(elm2.email);
              createCard(elm2.firstname, elm2.lastname, elm2.email);
            }
          }
        }
        return data;
      })
      .catch((error) => {
        return error;
      });

    console.log(folders);
    return true;
  }

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
      <IndexWrapper>
        <div className="upper">
          <div className="top">
            <h2>
              <strong>Constituez votre dossier locataire</strong>
            </h2>
            <h2 className="seconds">
              <strong> Partagez le en toute sécurité</strong>
            </h2>
            <h3>
              Passloc vous permet de transmettre à n'importe quel propriétaire
              ou agence immobilière votre dossier de candidature propre et
              conforme.
            </h3>
            {!loggedIn && (
              <div
                className="btns"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Input
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  placeholder="Votre mail"
                  style={{ width: 400, height: 60, marginBottom: 90 }}
                />
                <Button
                  className="home_btn"
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
            <div className="inlineblock">
              {loggedIn &&
                getForms() &&
                _map(cards, (d) => (
                  <Card
                    title={d[0]}
                    extra={<Button onClick={() => router.push("/tenant")} style={{color: 'black', fontSize: 13}}>Editer</Button> }
                    style={{ width: 300 }}
                  >
                    <p>Prenom {d[0]}</p>
                    <p>Nom {d[1]}</p>
                    <p>Mail {d[2]}</p>
                  </Card>
                ))}
            </div>
          </div>

          <Divider />
          <div className="main">
            <div className="mainText">
              <h2>
                <strong>Passloc, Online Manager</strong>
              </h2>
              <h3 className="seconds">
                <strong>
                  Déposez votre dossier, partagez le, trouvez votre logement
                </strong>
              </h3>
            </div>
            <div className="steps">
              <div className="column">
                <h3>
                  <strong>1. Déposez</strong>
                </h3>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  quis ante orci. Sed faucibus risus et mattis bibendum. In a
                  ante blandit, faucibus elit sed, varius ipsum.{" "}
                </h4>
              </div>
              <div className="column">
                <h3>
                  <strong>2. Partagez</strong>
                </h3>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  quis ante orci. Sed faucibus risus et mattis bibendum. In a
                  ante blandit, faucibus elit sed, varius ipsum.{" "}
                </h4>
              </div>
              <div className="column">
                <h3>
                  <strong>3. Trouvez</strong>
                </h3>
                <h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  quis ante orci. Sed faucibus risus et mattis bibendum. In a
                  ante blandit, faucibus elit sed, varius ipsum.{" "}
                </h4>
              </div>
            </div>
          </div>

          <Divider />

          <h2>
            <strong>Tarifs</strong>
          </h2>
          <div className="tarif">
            <br />
            <div className="column">
              <h2 className="seconds">Gratuit</h2>
              <h3>XX.xx €</h3>
              <p>Description...</p>
              <p>Description</p>
              <p>Description</p>
              <p>Description</p>
              <p>Description</p>
              <h3
                style={{ marginTop: 50, marginLeft: 10, cursor: "pointer" }}
                className="seconds"
              >
                En savoir +
              </h3>
            </div>
            <div className="column">
              <h2 className="seconds">Entreprise</h2>
              <h3>XX.xx €</h3>
              <p>Description...</p>
              <p>Description</p>
              <p>Description</p>
              <p>Description</p>
              <p>Description</p>
              <h3
                style={{ marginTop: 50, marginLeft: 10, cursor: "pointer" }}
                className="seconds"
              >
                En savoir +
              </h3>
            </div>
          </div>

          <Divider />
          {/* <div className="cert">
            <img src="../../../rgpd.png" width={250} height={150} alt="RGPD" />
          </div> */}
        </div>

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
      </IndexWrapper>
    );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
