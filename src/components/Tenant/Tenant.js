import { useEffect, useState } from "react";
import { Form, Button, Steps } from "antd";
import FirstForm from "./Form/FirstForm";
import SecondForm from "./Form/SecondForm";
import ThirdForm from "./Form/ThirdForm";
import RevenuesForm from "./Form/RevenuesForm";
import { Tabs } from "antd";
import GarantForm from "./Form/GarantForm";
import {PlusOutlined} from "@ant-design/icons";
import disableScroll from 'disable-scroll';

export default function Tenant() {
  const [formInput, setFormInput] = useState({});
  const [display, setDisplay] = useState(1);
  const [folder, setFolder] = useState(0);
  const [counter, setCounter] = useState(0);
  const [ammount, setAmmount] = useState(1);
  const [i, seti] = useState(1)
  disableScroll.on(); // prevent scrolling


  function getTitle(index){
    return formInput[index] != null
               ? (formInput[index].first_name == null
                   ? "Prenom"
                   : formInput[index].first_name) +
                 " " +
                 (formInput[index].last_name == null
                   ? "Nom"
                   : formInput[index].last_name) +
                 "\n" +
                 (formInput[index].statut_gl == null
                   ? " "
                   : formInput[index].statut_gl)
               : "Nouveau Dossier"
  }

  function getContent(index){
    return <>
    <Steps current={display - 1} className="steps-p">
             <Step title="Projet" onClick={() => showDisplay(1,)} className="hover-pointer" />
             <Step title="Ressources" onClick={() => showDisplay(2)} className="hover-pointer" />
             <Step title="Garants" onClick={() => showDisplay(3)} className="hover-pointer" />
             <Step
               title="Justificatifs"
               onClick={() => showDisplay(4)  }
             />
           </Steps>
           <br />
           {getForm(index)}
    </>
  }

  const [panes, setPanes] = useState([
    {key:0}
  ])

  const { Step } = Steps;
  const { TabPane } = Tabs;

  function add(){
    seti(i+1)
    panes.push({key:i});
  }
  function remove(){
    setAmmount(ammount-1);
  }

  function editPanes(targetKey, action){
    if (action == "add"){
      seti(i+1)
      add();
    }
    if (action == "remove"){
      setPanes(panes.slice)
    }
  }

  function showDisplay(value){
    if(!formInput[folder]) formInput[folder] = {};
    if (formInput[folder].displayDone >= value-1) setDisplay(value)
  }

  function setDisplayDone(value){
    setFormInput((formInput) => {
      if(!formInput[folder]) formInput[folder] = {};
      formInput[folder].displayDone = value;
      return {...formInput};
    })
  }

  const handleUserRegister = () => {
    setDisplayDone(display)
    setDisplay(display + 1);
  };

  function prev() {
    setDisplay(display - 1);
  }

  useEffect(() => {
    console.log(formInput);
  }, [formInput]);

  useEffect(() => {
    console.log("folder", folder);
  }, [folder]);

  function addTab() {
    setFormInput((formInput) => {
      if (!formInput[counter + 1]) formInput[counter + 1] = {};
      formInput[counter + 1].first_name = "Nouveau";
      formInput[counter + 1].last_name = "Dossier";
      return { ...formInput };
    });
    setCounter(counter + 1);
  }

  function getForm(foldersss) {
    return (
      <>
        {display == 1 && (
          <FirstForm
            formInput={formInput}
            setFormInput={setFormInput}
            current={foldersss}
          />
        )}
        {display == 2 && (
          <RevenuesForm
            formInput={formInput}
            setFormInput={setFormInput}
            current={foldersss}
          />
        )}
        {display == 3 &&
          formInput[foldersss] &&
          formInput[foldersss].statut_gl &&
          (formInput[foldersss].statut_gl == "Locataire" ? (
            <SecondForm
              formInput={formInput}
              setFormInput={setFormInput}
              current={foldersss}
            />
          ) : (
            <GarantForm
              formInput={formInput}
              setFormInput={setFormInput}
              current={foldersss}
            />
          ))
          }
        {display == 4 && (
          <ThirdForm
            formInput={formInput}
            setFormInput={setFormInput}
            current={foldersss}
          />
        )}
      </>
    );
  }

  return (
    
    <Form
    
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 13 }}
      onFinish={handleUserRegister}
    >
      <div className="formss">
        <div className="tabss">
      {display > 0 && (
        <Tabs
          className="tabs"
          type="editable-card"
          onChange={(e) => {
            setDisplay(1);
            setFolder(e);
            console.log("FOLDER: " + folder)
            console.log("NEW FOLDER: " + e)
          }}
          onEdit={
            editPanes
          }
        >
        {console.log(panes)}
          {panes.map(pane => (
             <TabPane tab={getTitle(pane.key)} key={pane.key} closable={false}>
               {getContent(pane.key)}
             </TabPane>
        ))
            }
        </Tabs>
      )}
      </div>
      <div className="text">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Curabitur iaculis dui libero, a eleifend dolor mollis sed.  </h2>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Curabitur iaculis dui libero, a eleifend dolor mollis sed.  </h2>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Curabitur iaculis dui libero, a eleifend dolor mollis sed.  </h2>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Curabitur iaculis dui libero, a eleifend dolor mollis sed.  </h2>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Curabitur iaculis dui libero, a eleifend dolor mollis sed.  </h2>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Curabitur iaculis dui libero, a eleifend dolor mollis sed.  </h2>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Curabitur iaculis dui libero, a eleifend dolor mollis sed.  </h2>
      </div>
      </div>
      <div className="btns">  
        {display >= 2 && (
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="success" onClick={prev} className="bottom_button">
              Retour
            </Button>
          </Form.Item>
        )}
        {display <= 3 && (
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button
              type="success"
              onClick={handleUserRegister}
              className="bottom_button"
            >
              Suivant
            </Button>
          </Form.Item>
        )}
        {display == 4 && (
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="success" htmlType="submit" className="bottom_button">
              Envoyer
            </Button>
          </Form.Item>
        )}
      </div>
    </Form>
  );
}
