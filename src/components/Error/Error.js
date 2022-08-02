import { Button, Form, Input, message } from "antd";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useState } from "react";
import HttpService from "../../services/HttpService";
import { ErrorWrapper } from "./Error.style";

export default function Error({ statusCode }) {
  const [sendMailLoading, setSendMailLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSendMail = (values) => {
    setSendMailLoading(true);

    const http = new HttpService();
    http
      .postData(
        {
          ...values,
          event_id: getCookie("sentry_event_id"),
        },
        "send-feedback-email"
      )
      .then((response) => {
        message.success(
          "Merci ! Nous corrigerons ce problème dans les plus brefs délais."
        );
        setSendMailLoading(false);
        setDisabled(true);
      })
      .catch((response) => {
        message.error(response);
        setSendMailLoading(false);
      });
  };

  return statusCode == undefined || statusCode != 404 ? (
    <ErrorWrapper className="notlost">
      <div className="error">
        <div>{statusCode && <h1>{statusCode}</h1>}</div>
        <div>
          <img src="/error.png" />
        </div>
      </div>
      <div className="description">
        <div>
          <p>
            <strong>Oops notre site web a rencontré une erreur... 🙃</strong>
          </p>
          {statusCode != 500 && (
            <p>
              Racontez-nous ce qu’il s’est passé afin d’améliorer votre
              expérience sur notre site web !
            </p>
          )}
        </div>
        {statusCode != 500 && (
          <div>
            <Form onFinish={handleSendMail}>
              <Form.Item
                type="email"
                name="email"
                rules={[
                  {
                    required: true,
                    message:
                      "Veuillez entrer votre email afin que nous puissions vous recontacter.",
                  },
                  {
                    type: "email",
                    message: "Veuillez entrer un email valide.",
                  },
                ]}
              >
                <Input placeholder="Adresse e-mail" />
              </Form.Item>
              <Form.Item
                name="comments"
                rules={[
                  {
                    required: true,
                    message: "Veuillez expliquer votre problème.",
                  },
                ]}
              >
                <Input.TextArea placeholder="Message" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={sendMailLoading}
                  disabled={disabled}
                >
                  {disabled ? "Envoyé" : "Envoyer"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </div>
    </ErrorWrapper>
  ) : (
    <ErrorWrapper className="lost">
      <img src="/404.jpg" alt="404" />
      <div>
        <div>
          <h1>404</h1>
          <p>
            <strong>La page que vous recherchez n'existe pas ou plus.</strong>
          </p>
        </div>
        <div>
          <p>Vous êtes perdu(e) ?</p>
          <Link href="/" type="primary">
            <Button>Revenir à la page d'accueil</Button>
          </Link>
        </div>
      </div>
    </ErrorWrapper>
  );
}
