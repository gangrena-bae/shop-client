import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  Col,
  Row,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            className="object-fit-contain"
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>

        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>Характеристики</h2>
            <ListGroup>
              {device.info.map((info) => (
                <ListGroupItem key={info.id}>
                  {info.title}: {info.description}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Row>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>{device.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {device.brand}
              </Card.Subtitle>
              <Card.Text>
                {new Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                  currencyDisplay: "narrowSymbol",
                }).format(device.price)}
              </Card.Text>
              <Button variant="outline-primary">Добавить в корзину</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DevicePage;
