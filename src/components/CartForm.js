import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Context } from "../index";
import { createOrder } from "../http/cartApi";

const CartForm = observer(() => {
  const { cart } = useContext(Context);
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const cartList = cart.items.map((item) => item.name);
  const productList = cartList.join(", ");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Создаем объект для отправки данных
      const orderData = {
        firstName,
        lastName,
        city,
        phone,
        email,
        type,
        totalCost: cart.totalCost,
        // Формируем список товаров как строку JSON
        cartList: JSON.stringify(
          cart.items.map((item) => ({
            name: item.name,
            count: item.count,
            price: item.price,
          }))
        ),
      };

      console.log(orderData); // Для проверки, что данные сформированы правильно
      createOrder(orderData); // Предполагается, что createOrder может обрабатывать такой формат
    }
    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            required
            value={firstName}
            type="text"
            placeholder="Имя"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            required
            value={lastName}
            type="text"
            placeholder="Фамилия"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-2">
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Город</Form.Label>
          <Form.Control
            value={city}
            type="text"
            placeholder="Город"
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom04">
          <Form.Label>Телефон</Form.Label>
          <Form.Control
            value={phone}
            type="number"
            placeholder="Телефон"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mb-2">
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
        <FloatingLabel label="Лицо">
          <Form.Select onChange={(e) => setType(e.target.value)}>
            <option value="1">Частное</option>
            <option value="2">Юридическое</option>
          </Form.Select>
        </FloatingLabel>
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

export default CartForm;
