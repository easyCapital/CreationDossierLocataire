import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Input, Button, Modal } from "antd";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { useRouter } from "next/router";
import HttpService from "../../../services/HttpService";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const login = (credentials) => {
    const http = new HttpService();
    let loginUrl = "login";
    return http
      .postData(credentials, loginUrl)
      .then((data) => {
        console.log(data)
        if (data["success"]){
          router.push("/tenant")
          return;
        }
        Modal.error({
          title: "Erreur de connexion",
          content: "Vérifiez le nom d'utilisateur et le mot de passe",
        });
        return data;
      })
      .catch((error) => {
        console.log(error)
        return error;
      });
  };
  

  const handleUserLogin = () => {
    const fields = {
      email: email,
      password: password,
    };
    login(fields)
  };

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 13 }}
      onFinish={handleUserLogin}
    >
      <Form.Item
        label="E-mail"
        name="email"
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
        rules={[
          {
            required: true,
            message: "Veuillez entrer votre mot de passe.",
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
      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="success" htmlType="submit">
          Me connecter
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary">
          <a href="/signup">Pas encore de compte</a>
        </Button>
      </Form.Item>
    </Form>
  );
}
