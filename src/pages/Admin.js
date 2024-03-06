import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import DeleteType from "../components/modals/DeleteType";
import DeleteBrand from "../components/modals/DeleteBrand";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [typedeleteVisible, setTypeDeleteVisible] = useState(false);
  const [branddeleteVisible, setBrandDeleteVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        variant={"outline-dark"}
        className="mt-2"
        onClick={() => setTypeVisible(true)}
      >
        Добавить категорию
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2"
        onClick={() => setTypeDeleteVisible(true)}
      >
        Удалить категорию
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2"
        onClick={() => setBrandVisible(true)}
      >
        Добавить бренд
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2"
        onClick={() => setBrandDeleteVisible(true)}
      >
        Удалить бренд
      </Button>
      <Button
        variant={"outline-dark"}
        className="mt-2"
        onClick={() => setDeviceVisible(true)}
      >
        Добавить устройство
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
      <DeleteType
        show={typedeleteVisible}
        onHide={() => setTypeDeleteVisible(false)}
      />
      <DeleteBrand
        show={branddeleteVisible}
        onHide={() => setBrandDeleteVisible(false)}
      />
    </Container>
  );
};

export default Admin;
