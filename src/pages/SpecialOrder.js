import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Context } from "../index";
import { createSpecial } from "../http/specialApi";
import "./SpecialOrderStyles.css";
import ContactElement from "../components/ContactElement";
import { ReactComponent as PhoneIcon } from "../components/icons/phone-outgoing-svgrepo-com.svg";
import { ReactComponent as Pin } from "../components/icons/pin.svg";
import { ReactComponent as Mail } from "../components/icons/mail.svg";
import { ReactComponent as Telegram } from "../components/icons/telegram.svg";
import { ReactComponent as Whatsapp } from "../components/icons/whatsapp.svg";
import { ReactComponent as Viber } from "../components/icons/viber.svg";
import Footer from "../components/Footer";

const SpecialOrder = observer(() => {
  const { cart } = useContext(Context);
  const [validated, setValidated] = useState(false);
  const [name, setFirstName] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("text", text);

      try {
        await createSpecial(formData);
        setSuccessMessage("Обращение успешно отправлено.");
        setErrorMessage(""); // Clear any previous error messages
      } catch (error) {
        setErrorMessage(
          "Ошибка при отправке обращения. Пожалуйста, попробуйте снова."
        );
        setSuccessMessage(""); // Clear any previous success messages
      }
    }
    setValidated(true);
  };

  return (
    <>
      <Container className="my-5">
        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <Row>
          <Col md={4}>
            <div className="con-group">
              <ContactElement
                icon={<PhoneIcon />}
                title="Телефон"
                description="+7 (999) 999-99-99"
              />
              <ContactElement
                icon={<Pin />}
                title="Адрес"
                description="Москва, Россия"
              />
              <ContactElement
                icon={<Mail />}
                title="Электронная почта"
                description="info@example.com"
              />
              <ContactElement
                icon={<Whatsapp />}
                title="WhatsApp"
                description="+7 (999) 999-99-99"
              />
              <ContactElement
                icon={<Viber />}
                title="Viber"
                description="+7 (999) 999-99-99"
              />
              <ContactElement
                icon={<Telegram />}
                title="Telegram"
                description="+7 (999) 999-99-99"
              />
            </div>
          </Col>
          <Col md={8}>
            <div className="main-form">
              <h2 className="form-title">Оставьте заявку</h2>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Имя"
                      value={name}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="validationCustom05">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="validationCustom02">
                  <Form.Label>Обращение</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    placeholder="Опишите ваше обращение"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Подтверждаю"
                    feedback="Необходимо подтверждение перед отправкой"
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Button type="submit">Отправить</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
});

export default SpecialOrder;
