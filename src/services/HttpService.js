export default class HttpService {
  url = "https://app.passloc.fr/api";
  postData = async (item, added_url, tokenId = "", pdf = false) => {
    const token = await localStorage.getItem("user-token");
    const requestOptions = this.postRequestOptions(token, item, pdf);
    return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
      response.json()
    );
  };

  getData = async (added_url, file = false) => {
    const token = await localStorage.getItem("user-token");
    const requestOptions = this.getRequestOptions(token);
    return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
      file ? response : response.json()
    );
  };

  putData = async (item, added_url, tokenId, pdf = false) => {
    const token = await localStorage.getItem("user-token");
    const requestOptions = this.putRequestOptions(token, item, pdf);
    return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
      response.json()
    );
  };

  deleteData = async (added_url, file = false) => {
    const token = await localStorage.getItem("user-token");
    const requestOptions = this.deleteRequestOptions(token);
    return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
      file ? response : response.json()
    );
  };

  getRequestOptions = (token) => {
    let requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
        "Cache-Control": "private",
        Accept: "application/json",
      },
    };
    return requestOptions;
  };

  postRequestOptions = (token, item) => {
    let requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "GET, POST, OPTIONS",
      },
      body: JSON.stringify(item),
    };

    return requestOptions;
  };
  putRequestOptions = (token, item) => {
    let requestOptions = {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "GET, POST, OPTIONS",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    };
    return requestOptions;
  };
  deleteRequestOptions = (token, item) => {
    let requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "GET, POST, OPTIONS",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    };
    return requestOptions;
  };
  postFileData = async (item, added_url) => {
    const token = await localStorage.getItem("user-token");
    const requestOptions = this.postFileRequestOptions(token, item);
    return fetch(this.url + "/" + added_url, requestOptions).then(
      (response) => response
    );
  };

  postFileRequestOptions = (token, item) => {
    let requestOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "GET, POST, OPTIONS",
      },
      body: item,
    };

    return requestOptions;
  };
}
