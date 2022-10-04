import {
  faCloudArrowDown,
  faCloudBolt,
  faEdit,
  faLink,
  faPlusCircle,
  faShareAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, message, Popconfirm, Progress, Tooltip } from "antd";
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
import Modal from "antd/lib/modal/Modal";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import AdvertsTable from "./AdvertsTable/AdvertsTable";
import { CreateFolder, HandleGeneratePdf } from "../../services/FolderService";
import FolderConfirm from "../../components/util/FolderConfirm/FolderConfirm";

function Card({
  folder,
  deleteFolder,
  folderLinkingMode,
  setFolderLinkingMode,
  setGoToSlide,
  slideIndex,
  setNewAdvertLinked,
}) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      message.info("Lien de téléchargement copié dans le presse-papier.");
      setCopied(false);
    }
  }, [copied]);

  let isAlreadyLinkedToUrl = false;
  if (folderLinkingMode) {
    isAlreadyLinkedToUrl = folder.adverts.filter(
      (advert) => advert.url === getCookie("externalSourceUrl")
    ).length;
  }

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
              <FontAwesomeIcon
                icon={faPlusCircle}
                onClick={() => CreateFolder()}
              />
            </Tooltip>
          </div>
        ) : (
          <div>
            {console.log(folder.files)}
            <div className="avancement">
              <Progress
                type="circle"
                percent={(folder.current_step * 100) / 5}
                format={(percent) =>
                  percent == 100 ? (
                    <FolderConfirm
                      onConfirm={() => HandleGeneratePdf(folder)}
                      placement="bottom"
                      disabled={folder.files.length > 0}
                    >
                      <Tooltip title="Générer le pdf">
                        <FontAwesomeIcon icon={faCloudArrowDown} />
                      </Tooltip>
                    </FolderConfirm>
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
            {folderLinkingMode && !isAlreadyLinkedToUrl && (
              <Button type="text" className="linkingBtn">
                <Popconfirm
                  placement="top"
                  title={<p>Êtes-vous sûr de vouloir lier ce dossier ?</p>}
                  onConfirm={() => {
                    const http = new HttpService();
                    const errorMessage =
                      "Désolé, nous avons rencontré un problème, le dossier n'a pas été lié";
                    http
                      .postData(
                        {
                          externalSourceUrl: getCookie("externalSourceUrl"),
                          folder_id: folder.id,
                        },
                        `folders/${folder.id}/adverts`
                      )
                      .then((res) => {
                        if (res.success) {
                          message.success("Le dossier a été lié avec succès");
                          setFolderLinkingMode(false);
                          setNewAdvertLinked(true);
                          folder.adverts.push({
                            ...res.advert,
                            pivot: res.advertFolder,
                          });

                          setGoToSlide(slideIndex);
                          deleteCookie("externalSourceUrl");
                        } else {
                          message.error(errorMessage);
                        }
                      })
                      .catch(() => {
                        message.error(errorMessage);
                      });
                  }}
                  okText="Oui"
                  cancelText="Non"
                  icon={<FontAwesomeIcon icon={faCloudBolt} />}
                >
                  <FontAwesomeIcon icon={faLink} />
                </Popconfirm>
              </Button>
            )}
            <div className={`${folderLinkingMode && "disabled"} btns`}>
              {(folder.current_step * 100) / 5 == 100 && (
                <Button type="text" disabled={folderLinkingMode}>
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
                </Button>
              )}

              <Button type="text" disabled={folderLinkingMode}>
                <Link href={"/folder/" + folder.slug}>
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </Button>
              <Button type="text" disabled={folderLinkingMode}>
                <Popconfirm
                  placement="top"
                  title={<p>Êtes-vous sûr de vouloir supprimer ce dossier ?</p>}
                  onConfirm={() => deleteFolder(folder)}
                  okText="Oui"
                  cancelText="Non"
                  icon={<FontAwesomeIcon icon={faCloudBolt} />}
                  disabled={folderLinkingMode}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </Popconfirm>
              </Button>
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

export default function MyFolders({ profileResponse }) {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [folderLinkingMode, setFolderLinkingMode] = useState(false);

  useEffect(() => {
    if (router.query.externalSourceUrl) {
      setCookie("externalSourceUrl", router.query.externalSourceUrl);
    }

    if (getCookie("externalSourceUrl")) {
      router.replace("/mes-dossiers", undefined, { shallow: true });

      setModalOpen(true);
    }
  }, [router.query.externalSourceUrl]);

  useEffect(() => {
    if (window) setLoaded(true);
  }, [window]);

  const fetcher = async (url) => {
    const token = localStorage.getItem("user-token");
    const r = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
        "Cache-Control": "private",
        Accept: "application/json",
      },
    });
    return await r.json();
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

  const [goToSlide, setGoToSlide] = useState(0);
  const [selectedFolderAdverts, setSelectedFolderAdverts] = useState(null);

  useEffect(() => {
    if (
      goToSlide == -1 ||
      !user ||
      typeof user.folders[goToSlide] === "undefined"
    ) {
      return setSelectedFolderAdverts(null);
    }

    setSelectedFolderAdverts(user.folders[goToSlide].adverts);
  }, [goToSlide, user]);

  const deleteFolder = (folder) => {
    const http = new HttpService();
    http.deleteData("folders/" + folder.slug).then(() => {
      mutate();
    });
  };

  const [slides, setSlides] = useState([]);
  const [newAdvertLinked, setNewAdvertLinked] = useState(false);

  useEffect(() => {
    let tmpSlides = [];
    if (user) {
      user.folders.forEach((folder, index) => {
        tmpSlides.push({
          key: index + 1,
          content: (
            <Card
              folder={folder}
              deleteFolder={deleteFolder}
              folderLinkingMode={folderLinkingMode}
              setFolderLinkingMode={setFolderLinkingMode}
              setGoToSlide={setGoToSlide}
              setNewAdvertLinked={setNewAdvertLinked}
              slideIndex={index}
            />
          ),
          onClick: () => setGoToSlide(index),
        });
      });
      if (!folderLinkingMode) {
        tmpSlides.push({
          key: 0,
          content: <Card folder={"add"} />,
          onClick: () => setGoToSlide(-1),
        });
      }
    }
    setSlides(tmpSlides);
  }, [user, folderLinkingMode, goToSlide]);

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
      <div className="carouselInfos">
        <div className="foldersWrapper infosWrapper">
          <h1 className="myFolders">Mes dossiers</h1>
          {slides.length > 2 ? (
            <div
              className="carouselWrapper"
              style={{
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
          {folderLinkingMode && (
            <Button
              className="cancelFolderLinkingBtn"
              type="default"
              onClick={() => {
                deleteCookie("externalSourceUrl");
                setFolderLinkingMode(false);
              }}
            >
              Annuler
            </Button>
          )}
        </div>
        {slides.length > 1 && (
          <div className="advertsTableWrapper infosWrapper">
            <h1>Mes candidatures</h1>

            {user?.folders[0] &&
              user?.folders[goToSlide] &&
              selectedFolderAdverts && (
                <AdvertsTable
                  className="advertsTable"
                  showPopoverAlert={newAdvertLinked}
                  onPopoverAlertClose={() => setNewAdvertLinked(false)}
                  initAdverts={
                    slides.length == 2
                      ? user.folders[0].adverts
                      : selectedFolderAdverts
                  }
                  folder={
                    slides.length == 2
                      ? user.folders[0]
                      : user.folders[goToSlide]
                  }
                  folderLinkingMode={folderLinkingMode}
                  mutateFolders={mutate}
                />
              )}
          </div>
        )}
      </div>
      {user && (
        <Modal
          className="linkAdvertModal"
          title={
            <>
              <h3>Lier un dossier à l'annonce</h3>
              <a
                href={getCookie("externalSourceUrl")}
                target="_blank"
                rel="noreferrer"
              >
                {getCookie("externalSourceUrl")}
              </a>
            </>
          }
          visible={modalOpen}
          closable={false}
          centered
          width={650}
          footer={
            <Button
              type="link"
              onClick={() => {
                setModalOpen(false);
                deleteCookie("externalSourceUrl");
              }}
            >
              Annuler
            </Button>
          }
        >
          <Button
            disabled={user.folders.length == 0}
            icon={<FontAwesomeIcon icon={faLink} />}
            type="primary"
            onClick={() => {
              setModalOpen(false);
              setFolderLinkingMode(true);
            }}
          >
            Associer un dossier existant
          </Button>
          <b>ou</b>
          <Button
            icon={<FontAwesomeIcon icon={faPlusCircle} />}
            type="dashed"
            onClick={() => {
              CreateFolder({
                externalSourceUrl: getCookie("externalSourceUrl"),
              });
              setModalOpen(false);
              deleteCookie("externalSourceUrl");
            }}
          >
            Créer un nouveau dossier
          </Button>
        </Modal>
      )}
    </MyFoldersWrapper>
  ) : null;
}
