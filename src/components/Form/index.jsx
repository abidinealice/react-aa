import axios from "axios";
import { useState } from "react";
import { useLanguageContext } from "../../utils/Context/languageContext";
import {
  ContactForm,
  ContactFormField,
  ContactFormText,
  ContactFormBtn,
} from "../../styles/contact";

function Form() {
  //Translation
  const { t } = useLanguageContext();

  //API URL
  const urlAPI = "http://localhost:8080/api/form";

  //Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //Text above form
  const sentence = t("contactText2");
  const [msg, setMsg] = useState();

  //Form field
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(urlAPI, formData);
      console.log("Form data send successfuly:", response.data);
      setMsg(t("contactText3"));
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submisssion form data");
    }
  };

  return (
    <div>
      <ContactFormText sx={{ paddingBottom: "10px" }}>
        {msg ? msg : sentence}
      </ContactFormText>
      <ContactForm onSubmit={handleSubmit}>
        <ContactFormField
          variant="filled"
          label={t("contactForm1")}
          onChange={handleChange}
          name="name"
          value={name}
          InputProps={{ disableUnderline: true }}
          sx={{}}
          required
        ></ContactFormField>
        <ContactFormField
          variant="filled"
          label={t("contactForm2")}
          onChange={handleChange}
          name="email"
          value={email}
          InputProps={{ disableUnderline: true, type: "email" }}
          sx={{}}
          required
        ></ContactFormField>
        <ContactFormField
          InputProps={{ disableUnderline: true }}
          sx={{}}
          rows={4}
          variant="filled"
          multiline
          label={t("contactForm3")}
          onChange={handleChange}
          name="message"
          value={message}
          required
        ></ContactFormField>
        <ContactFormBtn type="submit">{t("contactForm4")}</ContactFormBtn>
      </ContactForm>
    </div>
  );
}

export default Form;
