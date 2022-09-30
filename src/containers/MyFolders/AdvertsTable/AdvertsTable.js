import {
  faCheck,
  faFeather,
  faHourglass,
  faPlus,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Empty,
  message,
  Popconfirm,
  Popover,
  Table,
  Tooltip,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import { AdvertsTableWrapper } from "./AdvertsTable.style";
import HttpService from "../../../services/HttpService";
import { Form, Input } from "antd";
import ButtonGroupRadio from "../../../components/util/ButtonGroupRadio/ButtonGroupRadio";

const AdvertsTable = ({ initAdverts, folder, folderLinkingMode }) => {
  const [adverts, setAdverts] = useState(initAdverts);
  const linkAdvertInput = useRef();
  const [addAdvertForm] = Form.useForm();

  useEffect(() => {
    // console.log(initAdverts);
    setAdverts(initAdverts);
  }, [initAdverts]);

  useEffect(() => {
    addAdvertForm.getFieldError("url");
  });

  const truncateStr = (str, n) => {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  const columns = [
    {
      title: "Annonce",
      dataIndex: "url",
      render: (url) => (
        <>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="url"
            title={url}
          >
            <img
              src={
                "https://s2.googleusercontent.com/s2/favicons?domain_url=" + url
              }
            />
            {truncateStr(url, 80)}
          </a>
        </>
      ),
    },
    {
      title: "Envoyer",
      render: (advert) => {
        let { is_sent, folder_id, advert_id } = advert.pivot;
        const folderIsCompleted = folder?.current_step >= 5;
        const buttonDisabled =
          is_sent || !advert.company_id || !folderIsCompleted;

        let disabledButtonMessage = "Veuillez d'abord compléter le dossier";
        if (!advert.company_id) {
          disabledButtonMessage =
            "On ne peut pas envoyer le dossier pour vous parce que ce site n'est pas partenaire avec passloc";
        }

        return (
          <div className="actionsCell">
            <Popconfirm
              title="you cannot modify after"
              disabled={buttonDisabled}
              onConfirm={() => {
                new HttpService()
                  .postData(
                    { company_id: advert.company_id },
                    `folders/${folder_id}/adverts/${advert_id}/sendApplication`
                  )
                  .then((res) => {
                    if (res.success) {
                      const newAdverts = adverts.map((advert) => {
                        if (advert.pivot.advert_id == advert_id) {
                          advert.pivot.status = "processing";
                          advert.pivot.is_sent = true;
                        }
                        return advert;
                      });

                      setAdverts(newAdverts);
                    } else {
                      message.error("Nous avons rencontré un erreur");
                    }
                  });
              }}
            >
              <Tooltip
                title={
                  !advert.company_id || !folderIsCompleted
                    ? disabledButtonMessage
                    : ""
                }
              >
                <Button type="primary" disabled={buttonDisabled}>
                  {advert.company_id ? (
                    <p>{is_sent ? "Envoyé" : "Envoyer"}</p>
                  ) : (
                    <p className="unableToSendText">Envoyer</p>
                  )}
                </Button>
              </Tooltip>
            </Popconfirm>

            <Popconfirm
              okText="Oui"
              cancelText="Non"
              title="Supprimer cette candidature ?"
              onConfirm={() => {
                new HttpService()
                  .deleteData(`folders/${folder_id}/adverts/${advert_id}`)
                  .then((res) => {
                    if (res.success) {
                      const newAdverts = adverts.filter(
                        ({ pivot }) => pivot.advert_id != advert_id
                      );

                      setAdverts(newAdverts);
                    } else {
                      message.error("Nous avons rencontré une erreur");
                    }
                  })
                  .catch((e) => console.log(e));
              }}
            >
              <Button type="text" icon={<FontAwesomeIcon icon={faTrash} />} />
            </Popconfirm>
          </div>
        );
      },
    },
    {
      title: "Statut",
      dataIndex: "pivot",
      render: (pivot) => {
        const { status, is_sent } = pivot;

        const states = [
          {
            value: "processing",
            color: "gray",
            element: (
              <span>
                <FontAwesomeIcon icon={faHourglass} /> En cours de traitement
              </span>
            ),
          },
          {
            value: "refused",
            color: "red",
            element: (
              <span>
                <FontAwesomeIcon icon={faXmark} /> Refusé
              </span>
            ),
          },
          {
            value: "accepted",
            color: "green",
            element: (
              <span>
                <FontAwesomeIcon icon={faCheck} /> Accepté
              </span>
            ),
          },
        ];

        if (!is_sent) {
          states.unshift({
            value: null,
            color: "#1b40c4",
            element: (
              <span>
                <FontAwesomeIcon icon={faFeather} /> Pas encore envoyé
              </span>
            ),
          });
        }

        const state = states.find((obj) => obj.value === status);

        return (
          <ButtonGroupRadio
            values={states}
            initialValue={state?.value}
            onChange={(value) => {
              const http = new HttpService();
              http
                .putData(
                  { status: value },
                  `folders/${pivot.folder_id}/adverts/${pivot.advert_id}`
                )
                .then((res) => {
                  if (res.success) {
                    const newAdverts = adverts.map((advert) => {
                      if (advert.pivot.advert_id == pivot.advert_id) {
                        advert.pivot.status = value;
                      }
                      return advert;
                    });

                    setAdverts(newAdverts);
                  } else {
                    message.error("Nous avons rencontré une erreur");
                  }
                })
                .catch((e) => console.log(e));
            }}
          />
        );
      },
    },
  ];
  const linkAdvert = (externalSourceUrl) => {
    return new HttpService().postData(
      {
        externalSourceUrl,
        folder_id: folder.id,
      },
      `folders/${folder.id}/adverts`
    );
  };

  const onFormFinish = ({ url }) => {
    const errorMessage =
      "Désolé, nous avons rencontré un problème, l'annonce n'a pas été ajouté";
    new HttpService()
      .postData({ url }, "adverts")
      .then((res1) => {
        if (res1.success)
          linkAdvert(url)
            .then((res2) => {
              if (res2.success) {
                message.success("L'annonce a été ajouté avec succès");
                addAdvertForm.resetFields();

                setAdverts((tmpAdverts) => {
                  tmpAdverts.push({
                    ...res1.advert,
                    pivot: { ...res2.advertFolder, status: null },
                  });
                  return [...tmpAdverts];
                });
              } else {
                if (res2.message) message.error(res2.message);
              }
            })
            .catch(() => {
              message.error(errorMessage);
            });
      })
      .catch(() => {
        message.error(errorMessage);
      });
  };

  return (
    <AdvertsTableWrapper>
      <>
        {!folderLinkingMode && (
          <Popover
            content={
              <Form
                className="advertsTablePopoverContent"
                name="link"
                autoComplete="off"
                onFinish={onFormFinish}
                form={addAdvertForm}
              >
                <Form.Item name="url" rules={[{ type: "url" }]} required>
                  <Input
                    placeholder="Lien de l'Annonce"
                    ref={linkAdvertInput}
                  />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                  Ajouter
                </Button>
              </Form>
            }
            trigger="click"
          >
            <Button
              className="addRowBtn"
              type="primary"
              icon={<FontAwesomeIcon icon={faPlus} />}
              onClick={() => {
                setTimeout(() => {
                  linkAdvertInput.current.focus();
                }, 150);
              }}
            >
              Ajouter un suivi
            </Button>
          </Popover>
        )}
        {adverts.length > 0 ? (
          <Table
            columns={columns}
            dataSource={adverts}
            pagination={false}
            showHeader={false}
          />
        ) : (
          <Empty className="noData" description="Aucune candidature" />
        )}
      </>
    </AdvertsTableWrapper>
  );
};

export default AdvertsTable;
