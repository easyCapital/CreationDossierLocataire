import { useEffect, useState } from "react";
import { Form, Button, Steps } from "antd";
import FirstForm from "./Form/FirstForm";
import SecondForm from "./Form/SecondForm";
import ThirdForm from "./Form/ThirdForm";
import InitForm from "./Form/IniitForm";
import RevenuesForm from "./Form/RevenuesForm";
import { Tabs } from 'antd';

export default function Tenant() {

  const [formInput, setFormInput] = useState({});
  const [display, setDisplay] = useState(1);
  const [folder, setFolder] = useState(1);
  const { Step } = Steps;
  const { TabPane } = Tabs;

  const handleUserRegister = () => {
    if (display == 1){
      
    }
      setDisplay(display+1)
      console.log(formInput)
  };

  function prev(){
    setDisplay(display-1)
  }

  useEffect(() => {
    console.log(formInput);
  }, [formInput]);

  useEffect(() => {
    console.log("folder", folder);
  }, [folder]);

  function getTabs(){

    {

      Array(5).fill(undefined).map((e, i) => {
        return <>
         <TabPane tab="Tab 1" key={i}>
         <Steps current={display-1} >
          <Step title="Mon projet" onClick={() => setDisplay(1)}/>
          <Step title="Mes garants" onClick={() => setDisplay(2)}/>
          <Step title="Mes revenus" onClick={() => setDisplay(3)}/> 
          <Step title="Mes justificatifs" onClick={() => setDisplay(4)}/>
        </Steps>
        <br/>
        {() => getForm(i)}
          </TabPane>
        </>
      })

    }
  }

  function getForm(foldersss){
    console.log(foldersss)
    return <>
      {display == 1 && <FirstForm formInput={formInput} setFormInput={setFormInput}  current={foldersss}/>}
      {display == 2 && <SecondForm formInput={formInput} setFormInput={setFormInput} current={foldersss}/>}
      {display == 3 && <RevenuesForm formInput={formInput} setFormInput={setFormInput} current={foldersss}/>}
      {display == 4 && <ThirdForm formInput={formInput} setFormInput={setFormInput}  current={foldersss}/>}
    </>;

  }

  return (

    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 13 }}
      onFinish={handleUserRegister}
    >
      {}
      {display > 0 &&
      
      <Tabs onChange={setFolder}>
         {

          Array(5).fill(undefined).map((e, i) => {
            return <>
            <TabPane tab={(formInput[i] == null ? 'Prenom' : formInput[i].first_name ) + " " + (formInput[i] == null ? 'Nom' : formInput[i].last_name ) } key={i}>
            <Steps current={display-1} >
              <Step title="Mon projet" onClick={() => setDisplay(1)}/>
              <Step title="Mes garants" onClick={() => setDisplay(2)}/>
              <Step title="Mes revenus" onClick={() => setDisplay(3)}/> 
              <Step title="Mes justificatifs" onClick={() => setDisplay(4)}/>
            </Steps>
            <br/>
            {display == 1 && <FirstForm formInput={formInput} setFormInput={setFormInput}  current={i}/>}
            {display == 2 && <SecondForm formInput={formInput} setFormInput={setFormInput} current={i}/>}
            {display == 3 && <RevenuesForm formInput={formInput} setFormInput={setFormInput} current={i}/>}
            {display == 4 && <ThirdForm formInput={formInput} setFormInput={setFormInput}  current={i}/>}
              </TabPane>
            </>
          })

          }
      </Tabs>
      } 
     
      <div className="btns">
      {display >= 1 &&  <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="success" onClick={prev}>
          Retour
        </Button>
      </Form.Item>}
      {display <= 3 &&<Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="success" onClick={handleUserRegister}>
          Suivant
        </Button>
      </Form.Item>}
      {display == 4 &&<Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="success" htmlType="submit">
          Envoyer
        </Button>
      </Form.Item>}
      
      </div>
    </Form>
  );
}
