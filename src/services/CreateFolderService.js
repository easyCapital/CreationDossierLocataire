import HttpService from "./HttpService";

export const CreateFolder = (request = null) => {
  const http = new HttpService();
  http.postData(request, "folders").then((response) => {
    window.location.href = "/folder/" + response.data.folder.slug;
  });
};
