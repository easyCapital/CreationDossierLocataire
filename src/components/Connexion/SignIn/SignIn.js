import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Form, Input, Button, Modal, Alert } from "antd";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import { useRouter } from "next/router";
import Connexion from "../../../containers/Connexion/Connexion";
import { LoginAction } from "../../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const selector = useSelector((state) => state.userAuth);
  const router = useRouter();
  const dispatch = useDispatch();
const [error, setError] = useState("");
useEffect(() => {
    if (selector?.authResponse?.message == "Unauthorized.") {
      setError(
        "L'e-mail et le mot de passe que vous avez entré ne correspondent pas."
      );
    }
  }, [selector]);
  const handleUserLogin = () => {
    const fields = {
      email: email,
      password: password,
    };
    dispatch(LoginAction(fields, router))
  };

  return (
    <Connexion>
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
        {error && (
        <Alert description={error} type="error" />
      )}
      </Form>
    </Connexion>
  );
}
