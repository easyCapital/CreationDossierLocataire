import {
  faCloudArrowDown,
  faCloudBolt,
  faEdit,
  faPlusCircle,
  faShare,
  faShareAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, message, notification, Popconfirm, Progress, Tooltip } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoadProfileAction } from "../../redux/actions/ProfileActions";
import HttpService from "../../services/HttpService";
import { MyFoldersWrapper } from "./MyFolders.style";
import { useSpring, animated, config } from "react-spring";
import dynamic from "next/dynamic";
import { blue } from "../../styles/variables.style";
import useSWR from "swr";
import { useSwipeable } from "react-swipeable";
import CopyToClipboard from "react-copy-to-clipboard";

function Card({ folder, createFolder, deleteFolder }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  const sendValidationMail = () => {
    new HttpService()
      .postData({ email: folder.user.email }, "send-confirmation-mail")
      .then((res) => {
        if (res.success) {
          message.success("Mail envoyé");
        } else {
          message.error("Nous avons rencontré une erreur");
        }
      })
      .catch((e) => console.log(e));
  };

  const handleGeneratePdf = () => {
    if (folder.user.email_verified_at) {
      window.open(
        process.env.API_URL + "generatePdf/" + folder.slug,
        "_blank"
      );
    } else {
      notification.info({
        message: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>
              Vous devez valider votre adresse email avant de pouvoir générer le
              PDF.
            </p>
            <Button onClick={sendValidationMail} type="primary">
              Renvoyer le mail de validation
            </Button>
          </div>
        ),
      });
    }
  };

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      message.info("Lien de téléchargement copié dans le presse-papier.");
      setCopied(false);
    }
  }, [copied]);

  return (
    <animated.div
      className={"card"}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div className="cardContent">
        {folder == "add" ? (
          <div className="createFolder">
            <Tooltip title="Créer un nouveau dossier">
              <FontAwesomeIcon icon={faPlusCircle} onClick={createFolder} />
            </Tooltip>
          </div>
        ) : (
          <div>
            <div className="avancement">
              <Progress
                type="circle"
                percent={(folder.current_step * 100) / 5}
                format={(percent) =>
                  percent == 100 ? (
                    <Tooltip title="Générer le pdf">
                      <FontAwesomeIcon
                        icon={faCloudArrowDown}
                        onClick={handleGeneratePdf}
                      />
                    </Tooltip>
                  ) : (
                    `${percent} %`
                  )
                }
                strokeColor={blue}
              />
            </div>
            <h2>{(folder.firstname ?? "") + " " + (folder.lastname ?? "")}</h2>
            <div className="description">
              <p>{folder.activity?.label ?? ""}</p>
              <p>{folder.email ?? folder.user.email ?? ""}</p>
              <p>{folder.mobile ?? ""}</p>
            </div>
            <div className="btns">
              {(folder.current_step * 100) / 5 == 100 && (
                <CopyToClipboard
                  text={process.env.API_URL + "generatePdf/" + folder.slug}
                  onCopy={() => setCopied(true)}
                >
                  <FontAwesomeIcon
                    icon={faShareAlt}
                    onClick={() =>
                      process.env.API_URL + "generatePdf/" + folder.slug
                    }
                  />
                </CopyToClipboard>
              )}
              <Link href={"/folder/" + folder.slug}>
                <FontAwesomeIcon icon={faEdit} />
              </Link>
              <Popconfirm
                placement="top"
                title={<p>Êtes-vous sûr de vouloir supprimer ce dossier ?</p>}
                onConfirm={() => deleteFolder(folder)}
                okText="Oui"
                cancelText="Non"
                icon={<FontAwesomeIcon icon={faCloudBolt} />}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Popconfirm>
            </div>
          </div>
        )}
      </div>
    </animated.div>
  );
}

const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

export default function MyFolders({ profileResponse, isDesktop }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (window) setLoaded(true);
  }, [window]);

  const router = useRouter();

  const fetcher = async (url) => {
    const token = await localStorage.getItem("user-token");
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
        "Cache-Control": "private",
        Accept: "application/json",
      },
    }).then((r) => r.json());
  };
  const { data, mutate } = useSWR(
    profileResponse?.data?.user
      ? process.env.API_URL + "users/" + profileResponse.data.user.id
      : null,
    fetcher
  );
  const user = data?.data?.user;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadProfileAction());
  }, []);

  const [goToSlide, setGoToSlide] = useState(null);

  const createFolder = () => {
    const http = new HttpService();
    http.postData(null, "folders").then((response) => {
      router.push("/folder/" + response.data.folder.slug);
    });
  };

  const deleteFolder = (folder) => {
    const http = new HttpService();
    http.deleteData("folders/" + folder.slug).then((response) => {
      mutate();
    });
  };

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    let tmpSlides = [];
    if (user) {
      user.folders.forEach((folder, index) => {
        tmpSlides.push({
          key: index + 1,
          content: <Card folder={folder} deleteFolder={deleteFolder} />,
          onClick: () => setGoToSlide(index),
        });
      });
      tmpSlides.push({
        key: 0,
        content: <Card folder={"add"} createFolder={createFolder} />,
        onClick: () => setGoToSlide(tmpSlides.length - 1),
      });
    }
    setSlides(tmpSlides);
  }, [user]);

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir == "Left") {
        setGoToSlide(goToSlide == 0 ? slides.length - 1 : goToSlide + 1);
      }
      if (eventData.dir == "Right") {
        setGoToSlide(goToSlide == slides.length - 1 ? 0 : goToSlide - 1);
      }
    },
    ...config,
  });

  return loaded ? (
    <MyFoldersWrapper>
      <h1>
        <span>Retrouvez votre dossier locataire</span>
        <br />
        Conforme et prêt à l’envoi
      </h1>
      {slides.length > 2 ? (
        <div
          className="carouselWrapper"
          style={{
            width: isDesktop ? 700 : "100%",
            height: 500,
            margin: 10,
          }}
          {...handlers}
        >
          <Carousel
            slides={slides}
            goToSlide={goToSlide}
            offsetRadius={2}
            animationConfig={config.gentle}
            showNavigation={false}
          />
        </div>
      ) : (
        <div className="cardsWrapper">
          {slides.map((slide) => slide.content)}
        </div>
      )}
    </MyFoldersWrapper>
  ) : null;
}
