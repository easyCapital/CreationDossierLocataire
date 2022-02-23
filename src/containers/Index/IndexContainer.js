import { IndexWrapper } from "./Index.style";
import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import { Input, Button, Spin, Space, Divider, Modal } from "antd";
import { getProviders } from "next-auth/client";
import { useRouter } from "next/router";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { RightOutlined } from "@ant-design/icons";
import { setCookies, getCookies } from "cookies-next";
import HttpService from "../../services/HttpService";
import {
  getUserFromMail,
  userHasAccount,
  registerFromEmail,
} from "../../services/AuthServices";
import { useDispatch } from "react-redux";
import { LoadProfileAction } from "../../redux/actions/ProfileActions";

export default function IndexContainer({ children }) {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const [hasAccount, setHasAccount] = useState(false);
  const dispatch = useDispatch();

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
        setHasAccount(data["data"]["hasAccount"])
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
