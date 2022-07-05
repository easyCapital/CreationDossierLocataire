import { useEffect, useState } from "react";
import { Form, Input, Button, Modal, Alert } from "antd";
import { useRouter } from "next/router";
import Connexion from "../../../containers/Connexion/Connexion";
import { LoginAction } from "../../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
  const [form] = Form.useForm();
  const selector = useSelector((state) => state.userAuth);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selector?.authResponse?.message == "Unauthorized.") {
      setError(
        "L'e-mail et le mot de passe que vous avez renseignés ne correspondent pas."
      );
      setIsSubmitting(false);
    }
  }, [selector]);

  const handleUserLogin = () => {
    setIsSubmitting(true);
    dispatch(LoginAction(form.getFieldsValue(), router));
  };

  return (
    <Connexion>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 13 }}
        onFinish={handleUserLogin}
        initialValues={{ email: "", password: "" }}
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
          <Input name="email" type="text" placeholder="exemple@exemple.com" />
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
          <Input name="password" type="password" />
        </Form.Item>
        <div className="buttons">
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            Me connecter
          </Button>
          <Button>
            <a href="/signup">Pas encore de compte</a>
          </Button>
        </div>
        {error && <Alert description={error} type="error" />}
      </Form>
    </Connexion>
  );
}
