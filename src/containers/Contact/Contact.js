import { Button, Form, Input, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import HttpService from "../../services/HttpService";
import { ContactWrapper } from "./Contact.style";

export default function Contact({ isDesktop }) {
  const [sendMailLoading, setSendMailLoading] = useState(false);
  const router = useRouter();

  const handleSendMail = (values) => {
    setSendMailLoading(true);
    const http = new HttpService();
    http
      .postData(values, "send-email")
      .then((response) => {
        console.log(response);
        message.success(response);
        setSendMailLoading(false);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      })
      .catch((response) => {
        message.error(response);
        setSendMailLoading(false);
      });
  };

  return (
    <ContactWrapper>
      {isDesktop && (
        <div className="left">
          <Link href="/">
            <img src="/passloc-logo.png" alt="Passloc Logo" />
          </Link>
        </div>
      )}
      <div className="right">
        <div className="description">
          <p>
            Nous nous efforçons de vous répondre dans les meilleurs délais !
          </p>
        </div>
        <Form onFinish={handleSendMail}>
          <Form.Item
            type="email"
            name="email"
            rules={[
              { required: true, message: "Veuillez spécifier votre e-mail." },
              {
                type: "email",
                message: "Veuillez spécifier un e-mail valide.",
              },
            ]}
          >
            <Input placeholder="E-mail" />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[
              {
                required: true,
                message: "Veuillez spécifier le sujet de votre demande.",
              },
            ]}
          >
            <Input placeholder="Sujet" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: "Veuillez rédiger un message.",
              },
            ]}
          >
            <Input.TextArea placeholder="Corps du texte" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={sendMailLoading}>
              Envoyer ma demande
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ContactWrapper>
  );
}
