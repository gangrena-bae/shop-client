import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Context } from "../..";
import { Col, Dropdown, Row, CloseButton } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  createDevice,
  fetchBrands,
  fetchDevices,
  fetchTypes,
} from "../../http/deviceAPI";
import { observer } from "mobx-react-lite";

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices().then((data) => device.setDevices(data.rows));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", device.selectedBrand.id);
    formData.append("typeId", device.selectedType.id);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" as={Col}>
            <DropdownButton
              id="dropdown-basic-button"
              title={device.selectedType.name || "Выберите тип"}
              className="mt-2 mb-2"
            >
              {device.types.map((type) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <DropdownButton
              id="dropdown-basic-button"
              title={device.selectedBrand.name || "Выберите тип"}
              className="mt-2 mb-2"
            >
              {device.brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <Form.Control
              placeholder="Название"
              autoFocus
              className="mt-2 mb-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control
              placeholder="Цена (Указывать валюту не нужно)"
              autoFocus
              className="mt-2 mb-2"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              type="number"
            />
            <Form.Control
              placeholder="Изображение"
              autoFocus
              className="mt-2 mb-2"
              type="file"
              onChange={selectFile}
            />
          </Form.Group>
          <hr />
          <Button variant={"outline-primary"} onClick={addInfo}>
            Добавить характеристику
          </Button>
          {info.map((i) => (
            <Row key={i.number}>
              <Col>
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  placeholder="Название характеристики"
                  autoFocus
                  className="mt-2 mb-2"
                />
              </Col>
              <Col>
                <Form.Control
                  value={i.description}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  placeholder="Описание характеристики"
                  autoFocus
                  className="mt-2 mb-2"
                />
              </Col>
              <Col>
                <CloseButton
                  onClick={() => removeInfo(i.number)}
                  className="mt-2 mb-2"
                />
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={addDevice}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
