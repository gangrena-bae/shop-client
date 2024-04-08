import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Form,
  Modal,
  Row,
  Col,
  Dropdown,
  CloseButton,
} from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import { observer } from "mobx-react-lite";
import { Context } from "../../index"; // Проверьте правильность пути
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]); // Используем массив для хранения информации об изображениях
  const [info, setInfo] = useState([]);
  const [stock, setStock] = useState(true);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, [device]);

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

  const addImage = () => {
    setImages([...images, { file: null, number: Date.now() }]);
  };

  const changeImage = (file, number) => {
    setImages(
      images.map((img) => (img.number === number ? { ...img, file } : img))
    );
  };

  const removeImage = (number) => {
    setImages(images.filter((img) => img.number !== number));
  };

  const handleStockChange = (e) => {
    setStock(e.target.checked);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("brandId", device.selectedBrand.id);
    formData.append("typeId", device.selectedType.id);
    formData.append("info", JSON.stringify(info));
    formData.append("stock", stock);
    formData.append("description", description);
    images.forEach(({ file }) => {
      if (file) {
        formData.append("img", file);
      }
    });
    createDevice(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить товар</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Форма для добавления товара */}
          <DropdownButton
            id="dropdown-type-button"
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
            id="dropdown-brand-button"
            title={device.selectedBrand.name || "Выберите бренд"}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 mb-2"
          />
          <Form.Control
            placeholder="Цена"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-2 mb-2"
          />
          <Form.Check
            type="switch"
            id="stock-switch"
            label="В наличии"
            checked={stock}
            onChange={handleStockChange}
            className="mt-2 mb-2"
          />
          <Form.Control
            placeholder="Описание"
            as="textarea"
            rows={3}
            value={description}
            onChange={handleDescriptionChange}
            className="mt-2 mb-2"
          />
          {images.map((img, index) => (
            <Row key={img.number}>
              <Col>
                <Form.Control
                  type="file"
                  onChange={(e) => changeImage(e.target.files[0], img.number)}
                  className="mt-2 mb-2"
                />
              </Col>
              <Col xs={1}>
                <CloseButton
                  className="mt-2"
                  onClick={() => removeImage(img.number)}
                />
              </Col>
            </Row>
          ))}
          <Button
            variant="outline-primary"
            onClick={addImage}
            className="mt-2 mb-2"
          >
            Добавить изображение
          </Button>
          <hr />
          <Button
            variant="outline-primary"
            onClick={addInfo}
            className="mt-2 mb-2"
          >
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
                  className="mt-2 mb-2"
                />
              </Col>
              <Col xs={1}>
                <CloseButton
                  className="mt-2"
                  onClick={() => removeInfo(i.number)}
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
