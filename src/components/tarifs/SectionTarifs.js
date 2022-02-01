import { SectionTarifsWrapper } from "./SectionTarifs.style";
import Link from "next/link";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { BiCheckCircle } from "react-icons/bi";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { Button, Switch, Collapse } from "antd";

export default function SectionTarifs() {
  const [checked, setChecked] = useState(true);
  const { Panel } = Collapse;
  const [collapse1, setCollapse1] = useState(0);
  const [collapse2, setCollapse2] = useState(0);
  const [collapse3, setCollapse3] = useState(0);
  const [collapse4, setCollapse4] = useState(0);
  const [collapse5, setCollapse5] = useState(0);
  const [collapse6, setCollapse6] = useState(0);
  const [collapse7, setCollapse7] = useState(0);
  const [collapse8, setCollapse8] = useState(0);
  const [collapse9, setCollapse9] = useState(0);
  function handleChange1() {
    setCollapse1(collapse1 == 0 ? 1 : 0);
  }
  function handleChange2() {
    setCollapse2(collapse2 == 0 ? 1 : 0);
  }
  function handleChange3() {
    setCollapse3(collapse3 == 0 ? 1 : 0);
  }
  function handleChange4() {
    setCollapse4(collapse4 == 0 ? 1 : 0);
  }
  function handleChange5() {
    setCollapse5(collapse5 == 0 ? 1 : 0);
  }
  function handleChange6() {
    setCollapse6(collapse6 == 0 ? 1 : 0);
  }
  function handleChange7() {
    setCollapse7(collapse7 == 0 ? 1 : 0);
  }
  function handleChange8() {
    setCollapse8(collapse8 == 0 ? 1 : 0);
  }
  function handleChange9() {
    setCollapse9(collapse9 == 0 ? 1 : 0);
  }
  function onChange(checked) {
    setChecked(checked == true ? true : false);
  }

  return (
    <SectionTarifsWrapper>
      <div className="switch">
        <Switch
          checkedChildren="mensuel"
          unCheckedChildren="annuel"
          defaultChecked
          onChange={onChange}
        />
      </div>
      <div className="economie">
        {checked == true ? (
          <span>économisez deux mois en passant à l'abonnement annuel</span>
        ) : (
          <span>
            2 mois offerts <br />
          </span>
        )}
      </div>

      <table>
        <tbody>
          <tr>
            <td className="case1_1"></td>
            <td className="case_ligne1" id="col1">
              <div className="ligne1">Basique</div>
              <div className="ligne2">{checked == true ? "0€" : "0€"}</div>
              <div className="ligne3">
                par {checked == true ? "mois" : "an"}
              </div>
            </td>
            <td className="case_ligne1" id="col2">
              <div className="ligne1">Essentielle</div>
              <div className="ligne2">{checked == true ? "7€" : "70€"}</div>
              <div className="ligne3">
                par {checked == true ? "mois" : "an"}
              </div>
            </td>
            <td className="case_ligne1" id="col3">
              <div className="ligne1">Premium</div>
              <div className="ligne2">{checked == true ? "12€" : "120€"}</div>
              <div className="ligne3">
                par {checked == true ? "mois" : "an"}
              </div>
            </td>
          </tr>

          <tr>
            <td id="td_col1">
              <Collapse accordion onChange={handleChange1}>
                <Panel header="Agrégation globale"></Panel>
              </Collapse>
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
          </tr>
          {collapse1 === 1 && (
            <>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de suivre vos comptes externes en un seul
                          endroit
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Agrégation de vos comptes
                    </a>
                  </Dropdown>
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet d'ajouter vos biens immobiliers
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Ajout de votre patrimoine
                    </a>
                  </Dropdown>
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet d'avoir une vision globale de la famille
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Suivi de votre famille
                    </a>
                  </Dropdown>
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
            </>
          )}

          <tr>
            <td id="td_col1">
              <Collapse accordion onChange={handleChange2}>
                <Panel header="Analyse"></Panel>
              </Collapse>
            </td>
            <td className="orange">
              <BiCheckCircle />
            </td>
            <td className="orange">
              <BiCheckCircle />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
          </tr>
          {collapse2 === 1 && (
            <>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de calculer l'impôt et l'impact fiscal de
                          chaque revenu
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Analyse fiscale
                    </a>
                  </Dropdown>
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet d'avoir une vision globale de vos actifs
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Analyse diversification
                    </a>
                  </Dropdown>
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de connaitre le risque moyen de son patrimoine
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Calcul du risque
                    </a>
                  </Dropdown>
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de suivre l'évolution passée de votre
                          patrimoine
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Evolution de vos actifs
                    </a>
                  </Dropdown>
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>

              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de connaitre la rentabilité passée de vos
                          investissements - renta d'un bien immo avec crédit
                          sans crédit
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Rendement de vos actifs
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>

              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de faire une estimation de la retraite
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Estimer ma retraite
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>

              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de calculer mon besoin de trésorerie mensuelle
                          sans le prêt RP et sans les enfants
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Estimation besoin de trésorerie
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>

              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de calculer les droits de succession dans la
                          situation actuelle
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Estimation droits de succession
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>

              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de calculer l'endettement que chaque actif
                          représente au global
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Estimation de mon taux d'endettement
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
            </>
          )}

          <tr>
            <td id="td_col1">
              <Collapse accordion onChange={handleChange3}>
                <Panel header="Alertes"></Panel>
              </Collapse>
            </td>
            <td className="orange">
              <BiCheckCircle />
            </td>
            <td className="orange">
              <BiCheckCircle />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
          </tr>
          {collapse3 === 1 && (
            <>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={<Menu></Menu>}
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Renégocier vos taux de prêts
                    </a>
                  </Dropdown>
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={<Menu></Menu>}
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Renégocier vos assurances emprunteurs
                    </a>
                  </Dropdown>
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de connaitre l'impact d'un décès (coût & part
                          destinée à chaque héritier)
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Estimation coût décès
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de connaitre le rendement de votre actif
                          immobilier
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Rentabilité d'un investissement immobilier
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>

              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de connaitre le rendement de votre actif
                          immobilier
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Rentabilité d'un investissement financier
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>

              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet d'afficher une baisse supérieure à 10% d'un
                          actif (notamment financier)
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Risque financier
                    </a>
                  </Dropdown>
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>

              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de mettre en avant un biais diversication
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Risque diversification
                    </a>
                  </Dropdown>
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
            </>
          )}

          <tr>
            <td id="td_col1">
              <Collapse accordion onChange={handleChange4}>
                <Panel header="Projections"></Panel>
              </Collapse>
            </td>
            <td className="no">
              <ImCross />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
          </tr>
          {collapse4 === 1 && (
            <>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Simulation d'investissement - Calcul TRI
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Investissement immobilier
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Simulation d'investissement - Calcul TRI
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Investissement financier
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Affichage graphique des avantages / inconvénients
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Donation entre époux
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Calcul économie / optimisation offerte
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Donation aux enfants
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>

              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={<Menu></Menu>}
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Acheter ou louer
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>

              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={<Menu></Menu>}
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Où placer X €
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>

              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={<Menu></Menu>}
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Mariage / Pacs / Divorce
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
            </>
          )}

          <tr>
            <td id="td_col1">
              <Collapse accordion onChange={handleChange5}>
                <Panel header="Gestion des documents"></Panel>
              </Collapse>
            </td>
            <td className="no">
              <ImCross />
            </td>
            <td className="no">
              <ImCross />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
          </tr>
          {collapse5 === 1 && (
            <>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Simplifie le suivi dans le temps de toute ses
                          opérations
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Affectation d'une dépense à un bien
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
            </>
          )}

          <tr>
            <td id="td_col1">
              <Collapse accordion onChange={handleChange6}>
                <Panel header="Aide comptable"></Panel>
              </Collapse>
            </td>
            <td className="no">
              <ImCross />
            </td>
            <td className="no">
              <ImCross />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
          </tr>
          {collapse6 === 1 && (
            <>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Si agrégation de votre compte, permet d'affecter une
                          dépense à un bien avec ajout du document justificatif
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Affectation d'une dépense à un bien
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de sauvergarder les calculs liés à votre
                          déclaration
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Préparation de votre déclaration
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
            </>
          )}

          <tr>
            <td id="td_col1">
              <Collapse accordion onChange={handleChange7}>
                <Panel header="Aide financement"></Panel>
              </Collapse>
            </td>
            <td className="no">
              <ImCross />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
          </tr>
          {collapse7 === 1 && (
            <>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet d'aider à trouver le meilleur crédit par soi
                          même
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Générer votre présentation d'investissement
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
            </>
          )}

          <tr>
            <td id="td_col1">
              <Collapse accordion onChange={handleChange8}>
                <Panel header="Partage"></Panel>
              </Collapse>
            </td>
            <td className="no">
              <ImCross />
            </td>
            <td className="no">
              <ImCross />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
          </tr>
          {collapse8 === 1 && (
            <>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item>
                          Permet de donner accès (temporaire) à tout ou partie
                          de sa situation à son expert, notaire, comptable,
                          avocat etc
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Partage tout ou partie avec un expert
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
            </>
          )}

          <tr>
            <td id="td_col1">
              <Collapse accordion onChange={handleChange9}>
                <Panel header="Support "></Panel>
              </Collapse>
            </td>
            <td className="orange">
              <BiCheckCircle />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
            <td className="yes">
              <BiCheckCircle />
            </td>
          </tr>
          {collapse9 === 1 && (
            <>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item></Menu.Item>
                      </Menu>
                    }
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Souscription assistée par un conseiller
                    </a>
                  </Dropdown>
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={<Menu></Menu>}
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Conseiller dédié 
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
              <tr>
                <td id="td_col1">
                  <Dropdown
                    overlay={<Menu></Menu>}
                    trigger={["hover", "click"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Support Prioritaire
                    </a>
                  </Dropdown>
                </td>
                <td className="no">
                  <ImCross />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
                <td className="yes">
                  <BiCheckCircle />
                </td>
              </tr>
            </>
          )}

          <tr className="last_lign">
            <td></td>
            <td id="col1">
              <Button id="col1">Choisir</Button>
            </td>
            <td id="col2">
              <Button id="col2">Choisir</Button>
            </td>
            <td id="col3">
              <Button id="col3">Choisir</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </SectionTarifsWrapper>
  );
}
