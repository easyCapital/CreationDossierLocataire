import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, InputNumber, message, Radio, Space } from "antd";
import { FormWrapper } from "./Form.style";
import { useEffect, useState } from "react";
import moment from "moment";
import HttpService from "../../services/HttpService";
import vos_ressources from "../../../public/forms/vos_ressources.jpg";
import Image from "next/image";

export default function ResourceForm({
  arePreviousItemsFilled,
  validateMessages,
  user,
  handleCurrentStepChanged,
  activities,
}) {
  const [form] = Form.useForm();
  const isStudent = (activity) => {
    return activities.find((e) => e.id === activity)?.type == "student";
  };
  const initFormValues = {
    net_monthly_salary_before_deduction_1:
      user.net_monthly_salary_before_deduction_1,
    net_monthly_salary_before_deduction_2:
      user.net_monthly_salary_before_deduction_2,
    net_monthly_salary_before_deduction_3:
      user.net_monthly_salary_before_deduction_3,
    is_fiscally_attached:
      user.is_fiscally_attached == null
        ? isStudent()
          ? true
          : false
        : user.is_fiscally_attached == "1"
        ? true
        : false,
    annual_income_tax_1: user.annual_income_tax_1,
    annual_income_tax_2: user.annual_income_tax_2,
    other_monthly_incomes: user.other_monthly_incomes,
    current_rent_amount: user.current_rent_amount,
  };
  const [isFormFinished, setIsFormFinished] = useState();
  const [fieldsToFill, setFieldsToFill] = useState(
    Object.keys(initFormValues ?? {})
  );

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

  const onValuesChange = (changedValues) => {
    setFieldsToFill([
      "net_monthly_salary_before_deduction_1",
      "net_monthly_salary_before_deduction_2",
      "net_monthly_salary_before_deduction_3",
      "is_fiscally_attached",
      ...(!form.getFieldValue("is_fiscally_attached")
        ? ["annual_income_tax_1", "annual_income_tax_2"]
        : []),
      "other_monthly_incomes",
      ...(user.housing_situation == "tenant" ? ["current_rent_amount"] : []),
    ]);

    const fieldName = Object.keys(changedValues)[0];

    const data = {
      [fieldName]: changedValues[fieldName],
    };

    let url = "users/" + user.id;
    new HttpService().putData(data, url).then((res) => {
      if (res.success) {
      } else {
        message.error(res.message);
      }
    });
  };

  return (
    <FormWrapper>
      <div>
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
                  <Form.Item
                    label={
                      user.activity_id == 18
                        ? "Pension de retraite"
                        : "Salaire net mensuel avant prélèvement"
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
                            <InputNumber step={1} />
                          </Form.Item>
                        );
                      })}
                    </Space>
                  </Form.Item>
                  {arePreviousItemsFilled("is_fiscally_attached", values) ? (
                    <Form.Item
                      label={"Êtes-vous rattaché fiscalement à vos parents ?"}
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
                      label={"Impôts sur le revenu annuel"}
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
                              <InputNumber step={1} />
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
                      label={"Autre(s) revenu(s) net(s) mensuel(s)"}
                      name="other_monthly_incomes"
                    >
                      <InputNumber />
                    </Form.Item>
                  ) : null}
                  {arePreviousItemsFilled(
                    "current_rent_amount",
                    values,
                    fieldsToFill
                  ) && user.housing_situation == "tenant" ? (
                    <Form.Item
                      label={"Montant du loyer actuel"}
                      name="current_rent_amount"
                    >
                      <InputNumber />
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
              src={vos_ressources}
              alt="Vos ressources"
              placeholder="blur"
              priority
            />
          </span>
        </div>
      </div>
      <div>
        {isFormFinished && (
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            onClick={() => handleCurrentStepChanged(true)}
          />
        )}
      </div>
    </FormWrapper>
  );
}
