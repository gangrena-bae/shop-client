import React, { useContext } from "react";
import { Card, Col, Button, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const DeviceItem = observer(({ device }) => {
  const { cart } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Col md={3} className="mt-2">
      <Card border="primary">
        <Card.Img
          width={150}
          height={150}
          thumbnail
          variant="top"
          src={process.env.REACT_APP_API_URL + device.img}
          className="mt-3 object-fit-contain"
        />
        <Card.Body>
          <Card.Title>{device.name}</Card.Title>

          <Card.Subtitle className="mb-2 text-muted">
            {new Intl.NumberFormat("ru-RU", {
              style: "currency",
              currency: "RUB",
              currencyDisplay: "narrowSymbol",
            }).format(device.price)}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            <Stack direction="horizontal" gap={3}>
              <Button
                variant="outline-primary"
                onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
              >
                Открыть
              </Button>
              <Button
                className="ms-auto"
                variant="outline-primary"
                onClick={() => cart.addItem(device)}
              >
                +
              </Button>
            </Stack>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
});

export default DeviceItem;
