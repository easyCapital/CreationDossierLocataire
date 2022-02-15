import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const TenantWrapper = styled.div`

.signIn{
  min-height:100vh;
  height: 100% ;
}
.form{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tabs{
  margin-left: 10%;
}
 
.ant-input{
  height: 38px;
}

.ant-tabs-content{
  padding-top: 15px;
}

.hover-pointer:hover{
  cursor: pointer;
}

.center{
  text-align: center;
}
.ant-tabs-nav-wrap{
  padding: 10px 50px;
}

.page_o{
  display: block;
  text-align: center;
  padding: 0px 100px;
}
.inputs .ant-row{
  display: flex;
  .ant-col:first-child{
    flex: 2; 
    margin-left: 100px;
  }
  .ant-col:last-child{
    flex: 1;
  }
}

.btns{

  display: flex;
  justify-content: space-between;
  padding: 0px 100px;

  div{
    > div{
      margin-left: 0px;
    }
  }

}

  .ant-upload .ant-btn{
    background: #005fc3;
    max-width: 70%;
    padding: 0px 50px;
  }

  .upload{
    padding 0px 30px;
  }
.steps-p{
  margin-left: 90px;

}
  .withAddon{
    width: 60%;
  }
  .noAccountWrapper {
    text-align: center;
  }
  .signIn {
    display: flex;  
    border-radius: 40px;
    text-align: center;
    background: white;
    .gauche {
      flex: 2;
      background: white;
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      margin: 0px;

      .title {
        font-size: 40px;
        padding-top: 25px;
        color: black;
        font-weight: bold;
        margin-top: 50px;
        margin-bottom: 0px;
      }
      .subtitle {
        font-size: 40px;
        color: #005fc3;
        font-weight: bold;
        position: relative;
        bottom: 20px;
      }
      .txt {
        color: #718096;
        margin-bottom: 30px;
      }
      .form {
        text-align: left;
        .bottomButton {
          font-size: 30px;
          height: 50px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 70px;
          padding-right: 70px;
          padding-top: 30px;
          padding-bottom: 30px;
          font-size: 35px;
          color: white;
          &.ant-btn-primary {
            margin-top: 0px;
            font-size: 24px;
            border-radius: 15px;
            width: 400px;
            padding: 10px;
          }
        }
      }
      .passwordless {
        display: flex;
        margin-top: 80px;
        margin-bottom: 80px;
        margin-left: 220px;

        max-width: 600px;
        svg {
          flex: 1;
          height: 50px;
          width: 50px;
        }
        p {
          flex: 5;
        }
      }
    }
    .droite {
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      flex: 1;
      background: #4ca6e2;
      padding-top: 360px;
      padding-bottom: 300px;
      text-align: center;
      color: white;

      .hello {
        font-size: 45px;
        font-weight: bold;
      }
      .txt {
        font-size: 20px;
      }
      .ant-btn {
        margin-top: 15px;
        border-radius: 20px;
        margin-right: auto;
        margin-left: auto;
        height: 50px;
        font-size: 25px;
      }

      .t1 {
        position: absolute;
        top: 300px;
        right: 200px;
        height: 0;
        width: 0;
        border: solid #4ca6e2;
        border-width: 100px 100px 40px 100px;
        border-left-color: #7ebde8;
      }
      .t2 {
        position: absolute;
        top: 700px;
        right: 380px;
        height: 0;
        width: 0;
        border: 50px solid #4ca6e2;
        border-bottom-color: #7ebde8;
      }
      .cercle {
        position: absolute;
        top: 700px;
        right: 300px;
        height: 70px;
        width: 70px;
        border-radius: 35px;
        background-color: #7ebde8;
      }
    }
  }
  .alreadyConnected{
    text-align:center;
    margin-top:400px;
    font-size:40px;
  }
  .mailSent{  
    font-size:30px;
    font-weight:bold;
    margin-top:30%;
    :first-line{
      font-size:40px;
    }
  }
  
  @media (min-width: 900px){


    .inputsnap_loyer{
      margin-left: 100px;
    }

    #garant_0{
      width: 700px;
    }
    .center .inputs div{
       .ant-col-6{
          width: 1400px;
        }
        .ant-col-13{
          margin-left: 0px;
        }
    }

    .rightText{
      margin-right: 50px;
      text-align: justify;
    }
    h2{
      font-size: 19px;
      margin-right: 5%;
      align-text: justify;
    }
    .mailItem{
      display: flex;
      flex-direction: row;
      margin-left: 2px;
    } 
    .wrapperInput{
      margin-left: 18%; 
    }
    .wrapperInputs{
      margin-left: 206px; 
    } 
    .nameItem{
      margin-left: 9px;
    }
    .mailItem{
      margin-bottom: 0px;
      margin-left: 44px;
    }
    .mobileItem{
      margin-bottom: 0px;
      margin-left: 10px;
    }
    .nameItem{
      margin-bottom: 0px;
    }
    .lastnameItem{
      margin-bottom: 0px;
      margin-left: 45px;
    }

    .currentForm {
      display: flex;
      flex-direction: column;
      //align-items: center;
    
      // > div {
      //   display: flex;
      // }
    
      // .ant-form-item-control .ant-form-item-control-input {
      //   display: flex;
      // }
    
       .ant-form-item-control {
        .ant-form-item-control-input-content {
          display: flex;
          flex-direction: row;
          .ant-form-item {
            width: 100%;
          }
          > div { 
            flex: 1;
          }
        }
      }
    }

     .formWrapper{
       display: flex;
       flex-wrap: wrap;
       .tabWrapper{
         flex: 4;
         margin-top: 100px;
       }
       .text{
         flex: 1.5;
         display: flex;
         flex-direction: column;
         justify-content: center;
       }
     }
     .last-p{
     }
     
  }
  @media (max-width: 810px) {

    .wrapperInputs{
      > div{
        > div{
          margin-left: 99px;
        }
      }
    }

    .nameItem{
      margin-left: 91px;
    }

    .lastnameItem{
      margin-left: 118px;
    }

    .bottomButton{
      left: 30%;
    }

    .mailItem{
      display: flex;
      flex-direction: row;
      margin-left: 2px;
    } 
    .mailItem{
      margin-bottom: 0px;
    }
    nameItem{
      margin-bottom: 0px;
    }
    .lastnameItem{
      margin-bottom: 0px;
      margin-left: 45px;
    }
    .Headerstyle__HeaderWrapper-sc-henjy6-0{
      padding-bottom: 0px;
    }
    .btns{

      display: inline;
      padding: 0px 100px;
    
    }
    .btns{
      div:first-child{
        right: 10%;
      }
    }
    .text{
      display: none;
    }
    
    .ant-col label{
      font-size: 18px;
    }
    
    .gauche {
      margin-top: 100px;
      text-align: center;
      margin: 0px 40px;
      margin-right: 40px;
      .title {
        font-size: 30px;
        font-weight: bold;
        color: black;
        margin-bottom:80px;
      }
      .txt{
        margin-top:20px;
        margin-bottom:20px;
      }
      .ant-form-item-control-input-content {
        .ant-btn {
          margin-left: auto;
          margin-right: auto;
          margin-top: 0px;
        }
      }
      .passwordless{
        svg{
          height:40px;
          width:40px;
        }
      }
    }
  }
  .ant-steps {
    padding 0px 100px;
  }

  ant-btn{
    margin-top: 0px;
  }
  .ant-checkbox-group-item{
    font-size: 15px;
  }


  @media (max-width: 375px) {
    .lastnameItem{
      margin-left: 0px;
    }
    .wrapperInputs{
      > div{
        > div{
          margin-left: 0px;
        }
      }
    }

    .nameItem{
      margin-left: 0px;
    }
  }

`;
