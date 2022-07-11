import { Alert } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HttpService from "../services/HttpService";

export default function confirmEmailPage() {
  const router = useRouter();
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (router?.query?.token) {
      new HttpService()
        .postData(router.query, "confirm-email")
        .then((response) => {
          setSuccess(response);
        });
    }
  }, [router]);

  return success ? (
    <div>
      <Alert
        style={{ marginTop: "100px", width: "80%", marginLeft: "10%" }}
        type={success.success ? "success" : "error"}
        message={success.message}
      />
    </div>
  ) : null;
}
