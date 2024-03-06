import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row, Alert } from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import { Context } from "../index";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device.devices && device.devices.length > 0 ? (
        device.devices.map((device) => (
          <DeviceItem key={device.id} device={device} />
        ))
      ) : (
        <Alert variant="info">Нет устройств для отображения</Alert>
      )}
    </Row>
  );
});

export default DeviceList;
