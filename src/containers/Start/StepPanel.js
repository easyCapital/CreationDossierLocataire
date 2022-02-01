import React, { useState } from "react";
import { Button, Steps, Checkbox, Progress } from "antd";
import { StepPanelWrapper } from "./StepPanel.style";
import update from "react-addons-update";
import { MdNavigateNext } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import "antd/dist/antd.css";
import { List } from "antd";
import ReactDragListView from "react-drag-listview";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { MdRemoveCircle } from "react-icons/md";
import Link from "next/link";

const StepPanel = (props) => {
  const { maxStep, setMaxStep, themes, setThemes } = props;

  const [activeStep, setActiveStep] = useState(0);

  const [start, setStart] = useState(false);
  const [tag1, setTag1] = useState(true);
  const [tag2, setTag2] = useState(true);
  const [tag3, setTag3] = useState(true);
  const [tag4, setTag4] = useState(true);
  const [tag5, setTag5] = useState(true);
  const [tag6, setTag6] = useState(true);
  const tag1Name = "Réduire mes impôts";
  const tag2Name = "Préparer ma retraite";
  const tag3Name = "Diversifier mes actifs";
  const tag4Name = "Placer un capital";
  const tag5Name = "Épargner chaque mois";
  const tag6Name = "Connaitre les frais de transmission";

  function onChange1(e) {
    if (!tag1) {
      let remove = themes.indexOf("tag1");
      setThemes(themes.filter((_, i) => i !== remove));
    } else {
      setThemes([...themes, "tag1"]);
    }
    setTag1(!tag1);

    console.log(themes);
  }

  function onChange2(e) {
    if (!tag2) {
      let remove = themes.indexOf("tag2");
      setThemes(themes.filter((_, i) => i !== remove));
    } else {
      setThemes([...themes, "tag2"]);
    }
    setTag2(!tag2);

    console.log(themes);
  }
  function onChange3(e) {
    if (!tag3) {
      let remove = themes.indexOf("tag3");
      setThemes(themes.filter((_, i) => i !== remove));
    } else {
      setThemes([...themes, "tag3"]);
    }
    setTag3(!tag3);

    console.log(themes);
  }
  function onChange4(e) {
    if (!tag4) {
      let remove = themes.indexOf("tag4");
      setThemes(themes.filter((_, i) => i !== remove));
    } else {
      setThemes([...themes, "tag4"]);
    }
    setTag4(!tag4);

    console.log(themes);
  }

  function onChange5(e) {
    if (!tag5) {
      let remove = themes.indexOf("tag5");
      setThemes(themes.filter((_, i) => i !== remove));
    } else {
      setThemes([...themes, "tag5"]);
    }
    setTag5(!tag5);

    console.log(themes);
  }

  function onChange6(e) {
    if (!tag6) {
      let remove = themes.indexOf("tag6");
      setThemes(themes.filter((_, i) => i !== remove));
    } else {
      setThemes([...themes, "tag6"]);
    }
    setTag6(!tag6);

    console.log(themes);
  }

  function up(index) {
    var temp1 = themes[index];
    var temp2 = themes[index - 1];
    setThemes(
      update(themes, {
        [index - 1]: {
          $set: temp1,
        },
        [index]: {
          $set: temp2,
        },
      })
    );
  }
  function down(index) {
    var temp1 = themes[index];
    var temp2 = themes[index + 1];
    setThemes(
      update(themes, {
        [index + 1]: {
          $set: temp1,
        },
        [index]: {
          $set: temp2,
        },
      })
    );
  }

  function next() {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    if (activeStep === maxStep) {
      const nextMaxStep = maxStep + 1;
      setMaxStep(nextMaxStep);
    }
    console.log(maxStep);
  }

  function prev() {
    const prevStep = activeStep - 1;
    setActiveStep(prevStep);
  }

  function handleClick(step) {
    if (step <= maxStep) {
      setActiveStep(step);
    }
  }

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };

  function onDragEnd(fromIndex, toIndex) {
    if (toIndex < 0) return;
    const items = [...themes];
    const item = items.splice(fromIndex, 1)[0];
    items.splice(toIndex, 0, item);
    setThemes(items);
    console.log(themes);
  }

  if (!start)
    return (
      <StepPanelWrapper>
        <div className="titreChoosing">Choisissez ce qui vous intéresse</div>
        <div className="choosingTheme">
          <div className="themeContainer">
            {tag1 === true && (
              <div className="theme">
                <div className="ligne" onClick={onChange1}>
                  <div className="title">{tag1Name}</div>
                  <IoMdAddCircle />
                </div>
              </div>
            )}
            {tag2 === true && (
              <div className="theme">
                <div className="ligne" onClick={onChange2}>
                  <div className="title">{tag2Name}</div>
                  <IoMdAddCircle />
                </div>
              </div>
            )}
            {tag3 === true && (
              <div className="theme">
                <div className="ligne" onClick={onChange3}>
                  <div className="title">{tag3Name}</div>
                  <IoMdAddCircle />
                </div>
              </div>
            )}
            {tag4 === true && (
              <div className="theme">
                <div className="ligne" onClick={onChange4}>
                  <div className="title">{tag4Name}</div>
                  <IoMdAddCircle />
                </div>
              </div>
            )}
            {tag5 === true && (
              <div className="theme">
                <div className="ligne" onClick={onChange5}>
                  <div className="title">{tag5Name}</div>
                  <IoMdAddCircle />
                </div>
              </div>
            )}
            {tag6 === true && (
              <div className="theme">
                <div className="ligne" onClick={onChange6}>
                  <div className="title">{tag6Name}</div>
                  <IoMdAddCircle />
                </div>
              </div>
            )}
          </div>
          <div className="droite">
            <ReactDragListView
              nodeSelector=".ant-list-item.draggble"
              onDragEnd={onDragEnd}
            >
              <List
                size="small"
                bordered
                dataSource={themes}
                renderItem={(item, index) => {
                  const draggble =
                    item !== "Racing car sprays burning fuel into crowd.";
                  return (
                    <List.Item className={draggble ? "draggble" : ""}>
                      {item === "tag1" && (
                        <div className="theme">
                          <div className="ligne" onClick={onChange1}>
                            <div className="title">{tag1Name}</div>
                            <MdRemoveCircle className="removeIcon" />
                          </div>
                        </div>
                      )}
                      {item === "tag2" && (
                        <div className="theme">
                          <div className="ligne" onClick={onChange2}>
                            <div className="title">{tag2Name}</div>
                            <MdRemoveCircle className="removeIcon" />
                          </div>
                        </div>
                      )}
                      {item === "tag3" && (
                        <div className="theme">
                          <div className="ligne" onClick={onChange3}>
                            <div className="title">{tag3Name}</div>
                            <MdRemoveCircle className="removeIcon" />
                          </div>
                        </div>
                      )}
                      {item === "tag4" && (
                        <div className="theme">
                          <div className="ligne" onClick={onChange4}>
                            <div className="title">{tag4Name}</div>
                            <MdRemoveCircle className="removeIcon" />
                          </div>
                        </div>
                      )}
                      {item === "tag5" && (
                        <div className="theme">
                          <div className="ligne" onClick={onChange5}>
                            <div className="title">{tag5Name}</div>
                            <MdRemoveCircle className="removeIcon" />
                          </div>
                        </div>
                      )}
                      {item === "tag6" && (
                        <div className="theme">
                          <div className="ligne" onClick={onChange6}>
                            <div className="title">{tag6Name}</div>
                            <MdRemoveCircle className="removeIcon" />
                          </div>
                        </div>
                      )}

                      <div className="fleches">
                        {index !== 0 && (
                          <Button onClick={() => up(index)}>
                            <AiOutlineArrowUp />
                          </Button>
                        )}
                        {index !== themes.length - 1 && (
                          <Button onClick={() => down(index)}>
                            <AiOutlineArrowDown />
                          </Button>
                        )}
                      </div>
                    </List.Item>
                  );
                }}
              />
            </ReactDragListView>
          </div>
        </div>

        <Button onClick={() => setStart(true)} className="Go">
          Commencer la simulation
        </Button>
      </StepPanelWrapper>
    );
  else
    return (
      <StepPanelWrapper style={{ display: "flex" }}>
        <div className="gauche">
          <Steps
            current={activeStep}
            direction="vertical"
            style={{ width: 400 }}
          >
            {props.steps.map((item) => (
              <Steps.Step
                key={item.title}
                className="title_step"
                title={item.title}
                onClick={() => handleClick(item.step - 1)}
              />
            ))}
          </Steps>
        </div>

        <div className="droite">
          <Mobile>
            <Progress percent={((activeStep + 1) * 100) / 7} />
          </Mobile>


          {props.steps.map((item) => (
            <div
              className={`steps-content ${
                item.step !== activeStep + 1 && "hidden"
              }`}
            >
              {item.content}
            </div>
          ))}
        </div>
        <div className="steps-action">
          {activeStep > 0 && (
            <Button
              style={{ margin: "0 8px" }}
              onClick={() => prev()}
              className="retour"
            >
              Retour
            </Button>
          )}
          {activeStep < props.steps.length - 1 && (
            <Button type="primary" className="suivant" onClick={() => next()}>
              Suivant <MdNavigateNext />
            </Button>
          )}

          {activeStep === props.steps.length - 1 && (
            <Button type="primary" className="terminer" htmlType="submit">
              <Link href="/espaceHomePageNew"> 
                Terminer
              </Link>
            </Button>
          )}
        </div>
      </StepPanelWrapper>
    );
};

export { StepPanel };
