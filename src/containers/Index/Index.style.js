import styled from "styled-components";

export const IndexWrapper = styled.div`

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
    margin: 10px 600px;
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
`;
