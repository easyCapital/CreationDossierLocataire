import HttpService from "./HttpService";

export const CreateFolder = () => {
  const http = new HttpService();
  http.postData(null, "folders").then((response) => {
    console.log(response);
    window.location.href = "/folder/" + response.data.folder.slug;
  });
};
