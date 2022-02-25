import styled from "styled-components";

export const IndexWrapper = styled.div`


.footer{
  display: flex;
  justify-content: space-between;
  margin: 10px 50px;
}

.main .steps{

  display: flex;
  justify-content: center;
  
  .column{
    align-text: center;
    padding: 0px 100px;
    width: 500px;
    h3{
      margin: 0 auto;
      color: #005fc3;
      margin-top: 40px;
      font-size: 30px;
    }
    h4{
      margin: 0 auto;
    }
  }
}
.top{
  padding-top: 5%;
  height: 100vh;
}
.upper{
  margin-top: 150px;
  text-align: center;
  h2{
    font-size: 60px;
  }
  .seconds{
    position: relative;
    bottom: 45px;
    color: #005fc3;
  }
  h3{
    font-size: 20px;
    margin: 10px 500px;
    position: relative;
    bottom: 45px;
  }
  .btns{
    display: flex;
  }
}

.btns_2{
  margin-top: 60px;
}
.home_btn{
  margin: 10px 20px;
  font-size: 18px;
  padding: 30px 22px;
  background: #005fc3;
  position: relative;
  bottom: 45px;
}

.home_btn:first-child{
  background: #a1a1a1;
}

@media screen and (max-width: 1500px)
{
  .upper{
    margin-top: 150px;
    text-align: center;
    h2{
      font-size: 60px;
    }
    .seconds{
      position: relative;
      bottom: 45px;
      color: #005fc3;
    }
    h3{
      font-size: 20px;
      margin: 10px 100px;
      position: relative;
      bottom: 45px;
    }
    .btns{
      display: flex;
    }
  }
  
  .btns_2{
    margin-top: 60px;
  }
  .home_btn{
    margin: 10px 20px;
    font-size: 18px;
    padding: 30px 22px;
    background: #005fc3;
    position: relative;
    bottom: 45px;
  }
  
}

@media screen and (max-width: 1400px){

  .main .steps{
    display: flex;
    padding: 0px 100px; 
    flex: wrap;
    .column{
      flex: wrap;
    }
  }


}


@media screen and (max-width: 1100px){

  .main .steps{
    display: block;
    .column{
      h3{
        margin-top: 50px;
      }
    }
  }
}

@media screen and (max-width: 580px)
{
  .upper{
    margin-top: 150px;
    text-align: center;
    h3{
      font-size: 20px;
      margin: 10px 10px;
    }
  }

  .home_btn{
    margin: 100px 2px;
    font-size: 18px;
  }
  .home_btn:last-child{
    position: relative;
    top: 50px;
    right: 120px;
  }
  .home_btn:first-child{
    position: relative;
    left: 150px;
  }
  
}


@media screen and (max-width: 480px)
{
  .btns{
    display: block;
  }
  .home_btn{
    position: absolute;
    top: 800px;
    left: 167px;
    right: 160px;
  }
}


.tarif{
  h3{
    margin: 0;
  }
  display: flex;
  > div{
    width: 50%;
  }
}

.inlineblock{
  display: flex;
  justify-content: center;
}

`;
