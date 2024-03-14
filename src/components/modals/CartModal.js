import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import {
  CloseButton,
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

  const groupedItems = cart.items.reduce((acc, item) => {
    const existingItem = acc.find(
      (groupedItem) => groupedItem.item.name === item.name
    );
    if (existingItem) {
      existingItem.count++;
    } else {
      acc.push({ item, count: 1 });
    }
    return acc;
  }, []);

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
          {cart.items.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            <ListGroup as="ol">
              {groupedItems.map((groupedItem, index) => (
                <ListGroupItem
                  key={index}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      {groupedItem.item.name} (добавлено {groupedItem.count}{" "}
                      шт.)
                    </div>
                    {new Intl.NumberFormat("ru-RU", {
                      style: "currency",
                      currency: "RUB",
                      currencyDisplay: "narrowSymbol",
                    }).format(groupedItem.item.price * groupedItem.count)}
                  </div>
                  <CloseButton
                    className="ms-auto"
                    onClick={() =>
                      cart.removeItem(cart.items.indexOf(groupedItem.item))
                    }
                  />
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
          <CartForm />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
});

export default Cart;
