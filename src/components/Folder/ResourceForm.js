import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Form,
  InputNumber,
  message,
  Popover,
  Radio,
  Space,
} from "antd";
import { FormWrapper } from "./Form.style";
import { useEffect, useState } from "react";
import moment from "moment";
import HttpService from "../../services/HttpService";
import vos_ressources from "../../../public/forms/vos_ressources.jpg";
import vos_ressources_2 from "../../../public/forms/vos_ressources_2.webp";
import Image from "next/image";

export default function ResourceForm({
  arePreviousItemsFilled,
  validateMessages,
  folder,
  handleCurrentStepChanged,
  isDesktop,
}) {
  useEffect(() => console.log(folder));

  const [form] = Form.useForm();
  const initFormValues = {
    ...(folder.person.activity?.type == "employee"
      ? {
          net_monthly_salary_before_deduction_1:
            folder.net_monthly_salary_before_deduction_1,
          net_monthly_salary_before_deduction_2:
            folder.net_monthly_salary_before_deduction_2,
          net_monthly_salary_before_deduction_3:
            folder.net_monthly_salary_before_deduction_3,
        }
      : {}),
    children_in_charge: folder.children_in_charge,
    is_fiscally_attached:
      folder.is_fiscally_attached == null
        ? folder.person.activity?.type == "student"
          ? true
          : false
        : folder.is_fiscally_attached == "1"
        ? true
        : false,
    annual_income_tax_1: folder.person.annual_income_tax_1,
    annual_income_tax_2: folder.person.annual_income_tax_2,
    other_monthly_incomes: folder.person.other_monthly_incomes ?? 0,
    rent_amount: folder.person.rent_amount,
  };
  const [isFormFinished, setIsFormFinished] = useState();
  const [fieldsToFill, setFieldsToFill] = useState([]);

  useEffect(() => {
    let ok = true;
    fieldsToFill.forEach((e) => {
      console.log(e, form.getFieldValue(e));
      if (form.getFieldValue(e) === null) ok = false;
    });
    setIsFormFinished(ok);
  }, [fieldsToFill]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    setFieldsToFill([
      ...(folder.person.activity?.type == "employee"
        ? [
            "net_monthly_salary_before_deduction_1",
            "net_monthly_salary_before_deduction_2",
            "net_monthly_salary_before_deduction_3",
          ]
        : []),
      "is_fiscally_attached",
      ...(!form.getFieldValue("is_fiscally_attached")
        ? ["annual_income_tax_1", "annual_income_tax_2"]
        : []),
      "other_monthly_incomes",
      ...(folder.person.housing_situation == "tenant" ? ["rent_amount"] : []),
    ]);
  }, [folder]);

  const onValuesChange = (changedValues) => {
    setFieldsToFill([
      ...(folder.person.activity?.type == "employee"
        ? [
            "net_monthly_salary_before_deduction_1",
            "net_monthly_salary_before_deduction_2",
            "net_monthly_salary_before_deduction_3",
          ]
        : []),
      "is_fiscally_attached",
      ...(!form.getFieldValue("is_fiscally_attached")
        ? ["annual_income_tax_1", "annual_income_tax_2"]
        : []),
      "other_monthly_incomes",
      ...(folder.person.housing_situation == "tenant" ? ["rent_amount"] : []),
    ]);

    const fieldName = Object.keys(changedValues)[0];

    const data = {
      [fieldName]: changedValues[fieldName],
    };

    let url = "folders/" + folder.slug;
    new HttpService().putData(data, url).then((res) => {
      if (!res.success) {
        message.error(res.message);
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FormWrapper className="reverse">
      <div className="arrows left">
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          onClick={() => handleCurrentStepChanged(false)}
        />
      </div>
      <div className="content">
        <div>
          <Form
            form={form}
            initialValues={initFormValues}
            layout={"vertical"}
            validateMessages={validateMessages}
            onValuesChange={onValuesChange}
          >
            {(values) => {
              return (
                <>
                  <p className="stepTitle">
                    03 <span>Vos ressources</span>
                  </p>
                  {fieldsToFill.includes(
                    "net_monthly_salary_before_deduction_1"
                  ) && (
                    <Form.Item
                      label={
                        folder.person.activity_id == 18
                          ? "Pension de retraite"
                          : "Salaire net mensuel avant prélèvement"
                      }
                      required={true}
                    >
                      <Space align="baseline">
                        {[3, 2, 1].map((e) => {
                          const date = capitalizeFirstLetter(
                            moment()
                              .subtract(e, "month")
                              .startOf("month")
                              .format("MMMM")
                          );
                          return (
                            <Form.Item
                              label={date}
                              name={"net_monthly_salary_before_deduction_" + e}
                              key={"date" + e}
                              required={true}
                            >
                              <InputNumber
                                pattern="[0-9]*"
                                inputMode="numeric"
                                step={1}
                              />
                            </Form.Item>
                          );
                        })}
                      </Space>
                    </Form.Item>
                  )}
                  {arePreviousItemsFilled("children_in_charge", values) ? (
                    <Form.Item
                      label="Enfants à charge"
                      name="children_in_charge"
                    >
                      <InputNumber
                        pattern="[0-9]*"
                        inputMode="numeric"
                        step={1}
                        max={99}
                      />
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled("is_fiscally_attached", values) ? (
                    <Form.Item
                      label={
                        <p style={{ margin: 0 }}>
                          Êtes-vous rattaché fiscalement à vos parents ?<br />
                          <Popover
                            content={
                              <p>
                                Pour savoir si vous êtes ou non rattaché à la
                                déclaration de vos parents,
                                <br /> il suffit de savoir si vous déclarez vous
                                même des revenus sur impots.gouv.fr.
                                <br /> Si ça ne vous parle pas, alors vous êtes
                                encore rattachés à vos parents.
                              </p>
                            }
                            trigger="click"
                          >
                            <i className="mean">Qu'est ce que ça veut dire ?</i>
                          </Popover>
                        </p>
                      }
                      name="is_fiscally_attached"
                      required={true}
                    >
                      <Radio.Group>
                        <Radio value={true}>Oui</Radio>
                        <Radio value={false}>Non</Radio>
                      </Radio.Group>
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled(
                    "annual_income_tax_1",
                    values,
                    fieldsToFill
                  ) && !form.getFieldValue("is_fiscally_attached") ? (
                    <Form.Item
                      label={"Impôts sur le revenu annuel"}
                      name="annual_income_tax"
                      required={true}
                    >
                      <Space align="baseline">
                        {[2, 1].map((e) => {
                          const date = moment()
                            .subtract(e, "year")
                            .startOf("year")
                            .format("YYYY");
                          return (
                            <Form.Item
                              label={date}
                              name={"annual_income_tax_" + e}
                              key={e}
                              required={true}
                            >
                              <InputNumber
                                pattern="[0-9]*"
                                inputMode="numeric"
                                step={1}
                              />
                            </Form.Item>
                          );
                        })}
                      </Space>
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled(
                    "other_monthly_incomes",
                    values,
                    fieldsToFill
                  ) ? (
                    <Form.Item
                      label={
                        <label>
                          Autre(s) revenu(s) net(s) mensuel(s){" "}
                          <Button
                            onClick={() => {
                              form.setFieldsValue({
                                ...form.getFieldsValue(),
                                other_monthly_incomes: 0,
                              });
                            }}
                          >
                            Aucun
                          </Button>
                        </label>
                      }
                      name="other_monthly_incomes"
                      required={true}
                    >
                      <InputNumber pattern="[0-9]*" inputMode="numeric" />
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled(
                    "rent_amount",
                    values,
                    fieldsToFill
                  ) && folder.person.housing_situation == "tenant" ? (
                    <Form.Item
                      label={"Montant du loyer actuel"}
                      name="rent_amount"
                      required={true}
                    >
                      <InputNumber pattern="[0-9]*" inputMode="numeric" />
                    </Form.Item>
                  ) : null}
                </>
              );
            }}
          </Form>
        </div>
        <div className="picture">
          <span>
            <Image
              id="vos_ressources"
              src={isDesktop ? vos_ressources : vos_ressources_2}
              alt="Vos ressources"
              placeholder="blur"
              priority
            />
          </span>
        </div>
      </div>
      <div className="arrows right">
        {(isFormFinished || !isDesktop) && (
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            onClick={
              isFormFinished ? () => handleCurrentStepChanged(true) : null
            }
            className={isFormFinished ? "" : "disabled"}
          />
        )}
      </div>
    </FormWrapper>
  );
}
