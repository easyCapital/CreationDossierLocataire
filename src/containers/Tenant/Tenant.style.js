import styled from "styled-components";

// black : #101820;
//jaune : #FFA400;
//vert : #2CC84D;
//bleu : #4ca6e2;

export const ConnexionWrapper = styled.div`

.margin-bottom-0{
  margin-bottom: 0px;
  padding-left: 10px;
}
.margin-bottom-0:hover{
  cursor: grab;
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
    margin-left: 50px;
  }
}

.btns{
  display: flex;
  justify-content: space-between;
  padding: 0px 80px;
  
  div:first-child{
    position: relative;
    right: 17px;
  }

}

  .ant-upload .ant-btn{
    background: rgb(88, 223, 115);
    max-width: 70%;
  }

  .upload{
    padding 0px 30px;
  }

  .withAddon{
    width: 60%;
  }
  .noAccountWrapper {
    text-align: center;
  }
  .signIn {
    margin-top: 120px;
    display: flex;
    margin-left: 200px;
    margin-right: 200px;
    box-shadow: 0.2px -0.2px gray, -0.1em -0.1em 3em #a4adba;
    border-radius: 40px;
    text-align: center;
    .gauche {
      flex: 2;
      background: white;
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;

      .title {
        font-size: 40px;
        color: #ffa400;
        font-weight: bold;
        margin-top: 150px;
      }
      .subtitle {
        font-size: 25px;
        color: #ffa400;
        font-weight: bold;
        margin-bottom: 50px;
      }
      .txt {
        color: #718096;
        margin-bottom: 30px;
      }
      .form {
        text-align: left;
        .ant-btn {
          font-size: 30px;
          height: 50px;
          margin-top: 50px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 100px;
          padding-right: 100px;
          padding-top: 35px;
          padding-bottom: 35px;
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
  .cercleBack {
    position: absolute;
    height: 300px;
    width: 300px;
    border-radius: 200px;
    z-index: -1;
  }
  #c1 {
    background-color: #ffa400;
    top: 700px;
    right: 100px;
  }
  #c2 {
    background-color: #2cc84d;
    top: 170px;
    left: 100px;
  }
  .carre {
    position: absolute;
    background-color: #4ca6e2;
    top: 800px;
    left: 100px;
    height: 300px;
    width: 300px;
    z-index: -1;
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
  

  @media (max-width: 800px) {
    .gauche {
      margin-top: 100px;
      text-align: center;
      .title {
        font-size: 30px;
        font-weight: bold;
        color: #ffa400;
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

`;
