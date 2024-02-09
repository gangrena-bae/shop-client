import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Context } from "../index";
import { createSpecial } from "../http/specialApi";

const SpecialOrder = observer(() => {
  const { cart } = useContext(Context);
  const [validated, setValidated] = useState(false);
  const [name, setFirstName] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("text", text);
      console.log(Object.fromEntries(formData));
      createSpecial(formData);
    }
    setValidated(true);
  };
  // Сам себя переиграл и отказался от этой хуйни
  // {
  //   cart.items.map((item, index) => formData.append(`${index}`, item.name));
  // }
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            required
            value={name}
            type="text"
            placeholder="Имя"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom05">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            value={email}
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Обращение</Form.Label>
          <Form.Control
            rows={3}
            required
            value={text}
            as="textarea"
            placeholder="Опишите ваше обращение"
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Form.Group className="mb-2">
        <Form.Check
          required
          label="Подтверждение"
          feedback="Необходимо подтверждение перед отправкой"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Сделать заказ</Button>
    </Form>
  );
});

export default SpecialOrder;
