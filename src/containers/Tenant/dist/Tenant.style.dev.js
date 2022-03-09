"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TenantWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n.signIn{\n  min-height:100vh;\n  height: 100% ;\n}\n.form{\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.tabs{\n  margin-left: 10%;\n}\n \n.ant-input{\n  height: 38px;\n}\n\n.ant-tabs-content{\n  padding-top: 15px;\n}\n\n.hover-pointer:hover{\n  cursor: pointer;\n}\n\n.center{\n  text-align: center;\n}\n.ant-tabs-nav-wrap{\n  padding: 10px 50px;\n}\n\n.page_o{\n  display: block;\n  text-align: center;\n  padding: 0px 100px;\n}\n.inputs .ant-row{\n  display: flex;\n  .ant-col:first-child{\n    flex: 2; \n    margin-left: 100px;\n  }\n  .ant-col:last-child{\n    flex: 1;\n  }\n}\n\n.btns{\n\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 100px;\n\n  div{\n    > div{\n      margin-left: 0px;\n    }\n  }\n\n}\n\n  .ant-upload .ant-btn{\n    background: #005fc3;\n    max-width: 70%;\n    padding: 0px 50px;\n  }\n\n  .upload{\n    padding 0px 30px;\n  }\n.steps-p{\n  margin-left: 90px;\n\n}\n  .withAddon{\n    width: 60%;\n  }\n  .noAccountWrapper {\n    text-align: center;\n  }\n  .signIn {\n    display: flex;  \n    border-radius: 40px;\n    text-align: center;\n    background: white;\n    .gauche {\n      flex: 2;\n      background: white;\n      border-top-left-radius: 40px;\n      border-bottom-left-radius: 40px;\n      border-top-right-radius: 40px;\n      border-bottom-right-radius: 40px;\n      margin: 0px;\n\n      .title {\n        font-size: 40px;\n        padding-top: 25px;\n        color: black;\n        font-weight: bold;\n        margin-top: 50px;\n        margin-bottom: 0px;\n      }\n      .subtitle {\n        font-size: 40px;\n        color: #005fc3;\n        font-weight: bold;\n        position: relative;\n        bottom: 20px;\n      }\n      .txt {\n        color: #718096;\n        margin-bottom: 30px;\n      }\n      .form {\n        text-align: left;\n        .bottomButton {\n          font-size: 30px;\n          height: 50px;\n          margin-left: auto;\n          margin-right: auto;\n          padding-left: 70px;\n          padding-right: 70px;\n          padding-top: 30px;\n          padding-bottom: 30px;\n          font-size: 35px;\n          color: white;\n          &.ant-btn-primary {\n            margin-top: 0px;\n            font-size: 24px;\n            border-radius: 15px;\n            width: 400px;\n            padding: 10px;\n          }\n        }\n      }\n      .passwordless {\n        display: flex;\n        margin-top: 80px;\n        margin-bottom: 80px;\n        margin-left: 220px;\n\n        max-width: 600px;\n        svg {\n          flex: 1;\n          height: 50px;\n          width: 50px;\n        }\n        p {\n          flex: 5;\n        }\n      }\n    }\n    .droite {\n      border-top-right-radius: 40px;\n      border-bottom-right-radius: 40px;\n      flex: 1;\n      background: #4ca6e2;\n      padding-top: 360px;\n      padding-bottom: 300px;\n      text-align: center;\n      color: white;\n\n      .hello {\n        font-size: 45px;\n        font-weight: bold;\n      }\n      .txt {\n        font-size: 20px;\n      }\n      .ant-btn {\n        margin-top: 15px;\n        border-radius: 20px;\n        margin-right: auto;\n        margin-left: auto;\n        height: 50px;\n        font-size: 25px;\n      }\n\n      .t1 {\n        position: absolute;\n        top: 300px;\n        right: 200px;\n        height: 0;\n        width: 0;\n        border: solid #4ca6e2;\n        border-width: 100px 100px 40px 100px;\n        border-left-color: #7ebde8;\n      }\n      .t2 {\n        position: absolute;\n        top: 700px;\n        right: 380px;\n        height: 0;\n        width: 0;\n        border: 50px solid #4ca6e2;\n        border-bottom-color: #7ebde8;\n      }\n      .cercle {\n        position: absolute;\n        top: 700px;\n        right: 300px;\n        height: 70px;\n        width: 70px;\n        border-radius: 35px;\n        background-color: #7ebde8;\n      }\n    }\n  }\n  .alreadyConnected{\n    text-align:center;\n    margin-top:400px;\n    font-size:40px;\n  }\n  .mailSent{  \n    font-size:30px;\n    font-weight:bold;\n    margin-top:30%;\n    :first-line{\n      font-size:40px;\n    }\n  }\n  \n  @media (min-width: 900px){\n\n    .loyerActuel{\n      margin-left: 100px;\n    }\n    .inputsnap_loyer{\n      margin-left: 100px;\n    }\n\n    #garant_0{\n      width: 700px;\n    }\n    .center .inputs div{\n       .ant-col-6{\n          width: 1400px;\n        }\n        .ant-col-13{\n          margin-left: 0px;\n        }\n    }\n\n    .rightText{\n      margin-right: 50px;\n      text-align: justify;\n    }\n    h2{\n      font-size: 19px;\n      margin-right: 5%;\n      align-text: justify;\n    }\n    .mailItem{\n      display: flex;\n      flex-direction: row;\n      margin-left: 2px;\n    } \n    .wrapperInput{\n      margin-left: 18%; \n    }\n    .wrapperInputs{\n      margin-left: 206px; \n    } \n    .nameItem{\n      margin-left: 9px;\n    }\n    .mailItem{\n      margin-bottom: 0px;\n      margin-left: 44px;\n    }\n    .mobileItem{\n      margin-bottom: 0px;\n      margin-left: 10px;\n    }\n    .nameItem{\n      margin-bottom: 0px;\n    }\n    .lastnameItem{\n      margin-bottom: 0px;\n      margin-left: 45px;\n    }\n\n    .currentForm {\n      display: flex;\n      flex-direction: column;\n    \n       .ant-form-item-control {\n        .ant-form-item-control-input-content {\n          display: flex;\n          flex-direction: row;\n          .ant-form-item {\n            width: 100%;\n          }\n          > div { \n            flex: 1;\n          }\n        }\n      }\n    }\n\n     .formWrapper{\n       display: flex;\n       flex-wrap: wrap;\n       .tabWrapper{\n         flex: 4;\n         margin-top: 100px;\n       }\n       .text{\n         flex: 1.5;\n         display: flex;\n         flex-direction: column;\n         justify-content: center;\n       }\n     }\n     .last-p{\n     }\n     \n  }\n  @media (max-width: 899px) {\n\n    .ant-tabs-nav{\n      margin-top: 150px;\n    }\n  }\n  @media (max-width: 810px) {\n\n    .ant-tabs-nav{\n      margin-top: 150px;\n    }\n\n    .wrapperInputs{\n      > div{\n        > div{\n          margin-left: 99px;\n        }\n      }\n    }\n\n    .nameItem{\n      margin-left: 91px;\n    }\n\n    .lastnameItem{\n      margin-left: 118px;\n    }\n\n    .bottomButton{\n      left: 30%;\n    }\n\n    .mailItem{\n      display: flex;\n      flex-direction: row;\n      margin-left: 2px;\n    } \n    .mailItem{\n      margin-bottom: 0px;\n    }\n    nameItem{\n      margin-bottom: 0px;\n    }\n    .lastnameItem{\n      margin-bottom: 0px;\n      margin-left: 45px;\n    }\n    .Headerstyle__HeaderWrapper-sc-henjy6-0{\n      padding-bottom: 0px;\n    }\n    .btns{\n\n      display: inline;\n      padding: 0px 100px;\n    \n    }\n    .btns{\n      div:first-child{\n        right: 10%;\n      }\n    }\n    .text{\n      display: none;\n    }\n    \n    .ant-col label{\n      font-size: 18px;\n    }\n    \n    .gauche {\n      margin-top: 100px;\n      text-align: center;\n      margin: 0px 40px;\n      margin-right: 40px;\n      .title {\n        font-size: 30px;\n        font-weight: bold;\n        color: black;\n        margin-bottom:80px;\n      }\n      .txt{\n        margin-top:20px;\n        margin-bottom:20px;\n      }\n      .ant-form-item-control-input-content {\n        .ant-btn {\n          margin-left: auto;\n          margin-right: auto;\n          margin-top: 0px;\n        }\n      }\n      .passwordless{\n        svg{\n          height:40px;\n          width:40px;\n        }\n      }\n    }\n  }\n  .ant-steps {\n    padding 0px 100px;\n  }\n\n  ant-btn{\n    margin-top: 0px;\n  }\n  .ant-checkbox-group-item{\n    font-size: 15px;\n  }\n\n\n  @media (max-width: 375px) {\n    .lastnameItem{\n      margin-left: 0px;\n    }\n    .wrapperInputs{\n      > div{\n        > div{\n          margin-left: 0px;\n        }\n      }\n    }\n\n    .nameItem{\n      margin-left: 0px;\n    }\n  }\n\n  .itemloyer{\n    margin-left: 130px;\n    .ant-col-13 div div span span input{\n      width: 700px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;
var TenantWrapper = _styledComponents["default"].div(_templateObject());

exports.TenantWrapper = TenantWrapper;