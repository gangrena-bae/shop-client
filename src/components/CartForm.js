import React, { useContext, useState } from "react";
import {
  Button,
  Form,
  Modal,
  Row,
  Col,
  FloatingLabel,
  Alert,
} from "react-bootstrap"; // Импортируем Alert
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { createOrder } from "../http/cartApi";

const CartForm = observer(({ handleClose }) => {
  const { cart } = useContext(Context);
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
    } else {
      const orderData = {
        firstName,
        lastName,
        city,
        phone,
        email,
        type,
        totalCost: cart.totalCost,
        cartList: JSON.stringify(cart.items),
      };

      try {
        await createOrder(orderData);
        setModalMessage("Заказ успешно создан!");
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          handleClose(); // Закрываем корзину после показа сообщения
        }, 2000); // Закрываем модальное окно через 2 секунды
      } catch (error) {
        setModalMessage("Ошибка при создании заказа.");
        setShowModal(true);
      }
    }
    setValidated(true);
  };

  return (
    <>
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
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Статус заказа</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default CartForm;
