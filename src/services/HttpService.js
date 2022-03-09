export default class HttpService {
  url = "http://passloc.fr/api";
  postData = async (item, added_url, tokenId = "", pdf = false) => {
    const token = await localStorage.getItem("user-token");
    const requestOptions = this.postRequestOptions(token, item, pdf);
    return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
      response.json()
    );
  };

  getData = async (added_url) => {
    const token = await localStorage.getItem("user-token");
    const requestOptions = this.getRequestOptions(token);
    return fetch(this.url + "/" + added_url, requestOptions).then((response) =>
      response.json()
    );
  };

  putData = async (item, added_url, tokenId, pdf = false) => {
    console.log("token | " + tokenId)
    const requestOptions = this.putRequestOptions(tokenId, item, pdf);
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
        "Cache-Control": "private",
        "Accept": "application/json"
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
    console.log("token// " + token)
    console.log("token//" + localStorage.getItem("user-token"))
    let requestOptions = {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Method": "GET, POST, OPTIONS",
        "Accept": "application/json"
      },
      body: JSON.stringify(item),
    };
    return requestOptions;
  };
}
