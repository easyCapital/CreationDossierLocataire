import { Button, message, notification } from "antd";
import HttpService from "./HttpService";

export function CreateFolder(request = null) {
  const http = new HttpService();
  http.postData(request, "folders").then((response) => {
    window.location.href = "/folder/" + response.data.folder.slug;
  });
}

export function HandleGeneratePdf(folder) {
  if (folder.user.email_verified_at) {
    window.open(process.env.API_URL + "generatePdf/" + folder.slug, "_blank");
  } else {
    SendEmailVerificationNotification(folder);
  }
}

export function SendEmailVerificationNotification(folder) {
  notification.info({
    message: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>
          Vous devez valider votre adresse email avant de pouvoir générer le
          PDF.
        </p>
        <Button onClick={() => SendValidationMail(folder)} type="primary">
          Renvoyer le mail de validation
        </Button>
      </div>
    ),
  });
}

function SendValidationMail(folder) {
  new HttpService()
    .postData({ email: folder.user.email }, "send-confirmation-mail")
    .then((res) => {
      if (res.success) {
        message.success("Mail envoyé");
      } else {
        message.error("Nous avons rencontré une erreur");
      }
    })
    .catch((e) => console.log(e));
}
