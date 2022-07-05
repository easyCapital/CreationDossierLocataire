import { useState } from "react";
import { Form, Input, Button, Modal, message } from "antd";
import { useRouter } from "next/router";
import HttpService from "../../../services/HttpService";
import Connexion from "../../../containers/Connexion/Connexion";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  const router = useRouter();

  const registerFromEmail = (credentials) => {
    const http = new HttpService();
    let signupUrl = "register";
    return http
      .postData(credentials, signupUrl)
      .then((data) => {
        console.log(data);
        if (data["success"]) {
          router.push("/signin");
          return;
        }
        message.error("Mail ou mot de passe incorrect !");

        return data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };
  const handleUserRegister = () => {
    const fields = {
      email: email,
      password: password,
      confirm_password: password_confirmation,
    };
    registerFromEmail(fields);
  };

  return (
    <Connexion>
      <Form
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
              message: "Veuillez renseigner une adresse e-mail correcte.",
            },
            {
              required: true,
              message: "Veuillez renseigner votre email.",
            },
          ]}
        >
          <Input
            id={"email"}
            name="email"
            type="text"
            value={email}
            placeholder="exemple@exemple.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
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
          <Input
            id={"password"}
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item
          label="Confirmer le mot de passe"
          name="password_confirmation"
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
          <Input
            id={"password_confirmation"}
            name="password_confirmation"
            type="password"
            value={password_confirmation}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Créer mon compte
          </Button>
        </Form.Item>
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
