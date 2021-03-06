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
  const [form] = Form.useForm();
  const initFormValues = {
    ...(folder.activity?.type == "employee"
      ? {
          net_monthly_salary_before_deduction_1:
            folder.net_monthly_salary_before_deduction_1,
          net_monthly_salary_before_deduction_2:
            folder.net_monthly_salary_before_deduction_2,
          net_monthly_salary_before_deduction_3:
            folder.net_monthly_salary_before_deduction_3,
        }
      : {}),
    is_fiscally_attached:
      folder.is_fiscally_attached == null
        ? folder.activity?.type == "student"
          ? true
          : false
        : folder.is_fiscally_attached == "1"
        ? true
        : false,
    annual_income_tax_1: folder.annual_income_tax_1,
    annual_income_tax_2: folder.annual_income_tax_2,
    other_monthly_incomes: folder.other_monthly_incomes,
    current_rent_amount: folder.current_rent_amount,
  };
  const [isFormFinished, setIsFormFinished] = useState();
  const [fieldsToFill, setFieldsToFill] = useState([]);

  useEffect(() => {
    let ok = true;
    fieldsToFill.forEach((e) => {
      if (form.getFieldValue(e) == null) ok = false;
    });
    setIsFormFinished(ok);
  }, [fieldsToFill]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    setFieldsToFill([
      ...(folder.activity?.type == "employee"
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
      ...(folder.housing_situation == "tenant" ? ["current_rent_amount"] : []),
    ]);
  }, [folder]);

  const onValuesChange = (changedValues) => {
    setFieldsToFill([
      ...(folder.activity?.type == "employee"
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
      ...(folder.housing_situation == "tenant" ? ["current_rent_amount"] : []),
    ]);

    const fieldName = Object.keys(changedValues)[0];

    const data = {
      [fieldName]: changedValues[fieldName],
    };

    let url = "folders/" + folder.slug;
    new HttpService().putData(data, url).then((res) => {
      if (res.success) {
      } else {
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
            {(values, formInstance) => {
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
                        folder.activity_id == 18
                          ? "Pension de retraite"
                          : "Salaire net mensuel avant pr??l??vement"
                      }
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
                            >
                              <InputNumber pattern="[0-9]*" inputMode="numeric" step={1} />
                            </Form.Item>
                          );
                        })}
                      </Space>
                    </Form.Item>
                  )}
                  {arePreviousItemsFilled("is_fiscally_attached", values) ? (
                    <Form.Item
                      label={
                        <p style={{ margin: 0 }}>
                          ??tes-vous rattach?? fiscalement ?? vos parents ?<br />
                          <Popover
                            content={
                              <p>
                                Pour savoir si vous ??tes ou non rattach?? ?? la
                                d??claration de vos parents,
                                <br /> il suffit de savoir si vous d??clarez vous
                                m??me des revenus sur impots.gouv.fr.
                                <br /> Si ??a ne vous parle pas, alors vous ??tes
                                encore rattach??s ?? vos parents.
                              </p>
                            }
                            trigger="click"
                          >
                            <i className="mean">Qu'est ce que ??a veut dire ?</i>
                          </Popover>
                        </p>
                      }
                      name="is_fiscally_attached"
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
                      label={"Imp??ts sur le revenu annuel"}
                      name="annual_income_tax"
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
                            >
                              <InputNumber pattern="[0-9]*" inputMode="numeric" step={1} />
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
                            onClick={() =>
                              form.setFieldsValue({
                                ...form.getFieldsValue(),
                                other_monthly_incomes: 0,
                              })
                            }
                          >
                            Aucun
                          </Button>
                        </label>
                      }
                      name="other_monthly_incomes"
                    >
                      <InputNumber pattern="[0-9]*" inputMode="numeric" />
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled(
                    "current_rent_amount",
                    values,
                    fieldsToFill
                  ) && folder.housing_situation == "tenant" ? (
                    <Form.Item
                      label={"Montant du loyer actuel"}
                      name="current_rent_amount"
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
