import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import CartForm from "../CartForm";

const Cart = observer(() => {
  const { cart } = useContext(Context);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Нет необходимости менять логику группировки, так как CartStore уже обрабатывает количество
  const groupedItems = cart.items; // Прямое использование items из CartStore

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Корзина:{" "}
        {new Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "RUB",
          currencyDisplay: "narrowSymbol",
        }).format(cart.totalCost)}
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Корзина</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {groupedItems.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            <ListGroup as="ol">
              {groupedItems.map((item, index) => (
                <ListGroupItem
                  key={item.id} // Используем уникальный ID в качестве ключа
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.name}</div>
                    {new Intl.NumberFormat("ru-RU", {
                      style: "currency",
                      currency: "RUB",
                      currencyDisplay: "narrowSymbol",
                    }).format(item.price * item.count)}
                  </div>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      onClick={() => cart.decrementItem(item.id)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.count}</span>
                    <Button
                      variant="outline-secondary"
                      onClick={() => cart.incrementItem(item.id)}
                    >
                      +
                    </Button>
                  </div>
                </ListGroupItem>
              ))}
              <ListGroupItem className="fw-bold mb-2">
                <Row>
                  <Col>Общая стоимость:</Col>
                  <Col className="justify-content-end">
                    {new Intl.NumberFormat("ru-RU", {
                      style: "currency",
                      currency: "RUB",
                      currencyDisplay: "narrowSymbol",
                    }).format(cart.totalCost)}
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          )}
          <CartForm handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
});

export default Cart;
