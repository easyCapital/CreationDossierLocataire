import { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { useRouter } from "next/router";
import HttpService from "../../../services/HttpService";
import Connexion from "../../../containers/Connexion/Connexion";
import { getCookie } from "cookies-next";

export default function SignUp(props) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const registerFromEmail = (credentials) => {
    const http = new HttpService();
    let signupUrl = "register";
    return http
      .postData(credentials, signupUrl)
      .then((info) => {
        console.log(info);
        if (info.success) {
          router.push("/signin");
          return;
        }
        const emailError = info.data.email[0];

        if (emailError) {
          setError(info.data.email[0]);
        } else {
          setError("Veuillez vérifier vos informations.");
        }

        setIsSubmitting(false);

        return info;
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
        return error;
      });
  };

  const [form] = Form.useForm();

  const handleUserRegister = () => {
    setIsSubmitting(true);
    registerFromEmail(form.getFieldsValue());
  };

  useEffect(() => {
    if (getCookie("creatingFolder")) {
      form.setFieldsValue({ email: getCookie("creatingFolder") });
    }
  }, []);

  return (
    <Connexion {...props}>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 13 }}
        onFinish={handleUserRegister}
      >
        <Form.Item
          label="E-mail"
          name="email"
          hasFeedback
          rules={[
            {
              type: "email",
              message: "Veuillez renseigner une adresse e-mail valide.",
            },
            {
              required: true,
              message: "Veuillez renseigner votre email.",
            },
          ]}
        >
          <Input placeholder="exemple@exemple.com" />
        </Form.Item>
        <Form.Item
          label="Mot de passe"
          name="password"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez entrer votre mot de passe.",
            },
            {
              min: 6,
              message: "Veuillez entrer un mot de passe plus long.",
            },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          label="Confirmer le mot de passe"
          name="confirm_password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Veuillez confirmer votre mot de passe.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("Les mots de passe ne correspondent pas.")
                );
              },
            }),
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          name="accept_conditions"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error(
                        "Vous devez accepter les conditions générales d'utilisation."
                      )
                    ),
            },
          ]}
          wrapperCol={{
            offset: 4,
            span: 13,
          }}
        >
          <Checkbox>
            J'accepte les{" "}
            <a href="/traitement-des-donnees" target="_blank">
              conditions générales d'utilisation
            </a>
            .
          </Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            Créer mon compte
          </Button>
        </Form.Item>
        {error && (
          <Alert
            description={error}
            type="error"
            showIcon
            closable
            afterClose={() => setError(null)}
          />
        )}
        <Form.Item
          wrapperCol={{ offset: 4, span: 16 }}
          className="noAccountWrapper"
        >
          Vous avez un compte ? <a href="/signin">Me connecter</a>
        </Form.Item>
      </Form>
    </Connexion>
  );
}
