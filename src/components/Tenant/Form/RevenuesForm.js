import "aos/dist/aos.css";
import { Form, Checkbox} from 'antd';
import "react-inputs-validation/lib/react-inputs-validation.min.css";

export default function RevenuesForm({formInput, setFormInput}) {

  function onChange(values){
    console.log(values)
    setFormInput({...formInput, garant:values})
  }

  const options = [
    { label: 'Je n’ai en ai pas', value: 'Je n’ai en ai pas' },
    { label: 'J’ai une personne physique', value: 'J’ai une personne physique' },
    { label: 'VISALE', value: 'VISALE' },
    { label: 'Autre', value: 'Autre' },
  ];

  return (
    <div><Form.Item
      label="Possibilités de garants"
      name="garant"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Veuillez renseigner vos possibilité de garant.",
        },
      ]}
      >
      <Checkbox.Group options={options} onChange={onChange} />
      </Form.Item> 
    </div>
  );
}
