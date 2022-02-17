export default class HttpService {
  url = "https://app.easycapital.fr/api";
  postData = async (item, added_url, tokenId = "", pdf = false) => {
    const token = await localStorage.getItem(tokenId);
    const requestOptions = this.postRequestOptions(token, item, pdf);
    return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
      response.json()
    );
  };

  getData = async (added_url, tokenId = "") => {
    const token = await localStorage.getItem(tokenId);
    const requestOptions = this.getRequestOptions(token);
    return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
      response.json()
    );
  };

  getRequestOptions = (token) => {
    let requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
        "Cache-Control": "private"
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
}
