import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Popconfirm } from "antd";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { blue } from "../../../styles/variables.style";

const message = {
  title: (
    <p style={{ color: "#005fc3", fontSize: "14px" }}>
      <b>Il manque les pièces justificatives... c'est dommage !</b>
    </p>
  ),
  content: (
    <p>
      Un dossier complet augmente vos chances d'être retenue par un propriétaire
      ou une agence. <br />
      {/* Pas d'inquiétudes, vos documents seront protégés par un filigrane et
          vous pourrez choisir à qui vous allez transmettre votre dossier.
          <br /> */}
      <b>Voulez-vous tout de même générer le pdf ?</b>
    </p>
  ),
};

export default function FolderConfirm({
  onConfirm,
  disabled,
  children,
  placement,
}) {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const showConfirm = () => {
    Modal.confirm({
      ...message,
      onOk() {
        onConfirm();
      },
      icon: <FontAwesomeIcon icon={faCloudBolt} style={{ color: blue }} />,
    });
  };

  return (
    <>
      {isDesktop ? (
        <Popconfirm
          placement={placement}
          title={
            <>
              {message.title}
              {message.content}
            </>
          }
          onConfirm={onConfirm}
          okText="Oui"
          cancelText="Non"
          disabled={disabled}
          icon={<FontAwesomeIcon icon={faCloudBolt} />}
        >
          <span onClick={disabled ? onConfirm : null}>{children}</span>
        </Popconfirm>
      ) : (
        <span onClick={disabled ? onConfirm : showConfirm}>{children}</span>
      )}
    </>
  );
}
// <FontAwesomeIcon
//   icon={faCloudArrowDown}
// />
