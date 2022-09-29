import { Button, Form, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import HttpService from "../../services/HttpService";
import { ContactWrapper } from "./Contact.style";

export default function Contact({
  isDesktop,
  requiresEmail = true,
  header = "Nous nous efforçons de vous répondre dans les meilleurs délais !",
  buttonText,
  isBugReport = false,
  onSuccess,
  textAreaPlaceholder = "Corps du texte",
}) {
  const [sendMailLoading, setSendMailLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSendMail = (values) => {
    values.requiresEmail = requiresEmail;
    values.isBugReport = isBugReport;
    setSendMailLoading(true);
    const http = new HttpService();
    http
      .postData(values, "send-email")
      .then((response) => {
        message.success(response);
        setSendMailLoading(false);
        form.resetFields();
        onSuccess();
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
          <p>{header}</p>
        </div>
        <Form onFinish={handleSendMail} form={form}>
          {requiresEmail && (
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
          )}
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
            <Input.TextArea placeholder={textAreaPlaceholder} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={sendMailLoading}>
              {buttonText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ContactWrapper>
  );
}
