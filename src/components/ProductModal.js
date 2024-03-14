import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { fetchBrands, fetchTypes, fetchOneDevice } from "../http/deviceAPI";
import {
  updateDeviceName,
  updateDeviceDescription,
  updateDevicePrice,
  updateDeviceInfo,
} from "../http/deviceAPI";

const ProductModal = ({ show, onHide, product }) => {
  const [brandName, setBrandName] = useState("");
  const [typeName, setTypeName] = useState("");
  const [device, setDevice] = useState({
    info: [],
    stock: true,
  });
  const [editing, setEditing] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedInfo, setEditedInfo] = useState({});

  useEffect(() => {
    if (product) {
      setEditedName(product.name);
      setEditedDescription(product.description);
      setEditedPrice(product.price);

      fetchBrands().then((brands) => {
        const brand = brands.find((brand) => brand.id === product.brandId);
        if (brand) {
          setBrandName(brand.name);
        }
      });

      fetchTypes().then((types) => {
        const type = types.find((type) => type.id === product.typeId);
        if (type) {
          setTypeName(type.name);
        }
      });

      fetchOneDevice(product.id).then((data) => {
        setDevice(data);
      });
    }
  }, [product]);

  const handleEdit = (field) => {
    setEditing(field);
  };

  const handleSave = async (field) => {
    if (field === "name") {
      await updateDeviceName(product.id, editedName);
    } else if (field === "description") {
      await updateDeviceDescription(product.id, editedDescription);
    } else if (field === "price") {
      await updateDevicePrice(product.id, editedPrice);
    } else if (field.startsWith("info")) {
      const infoIndex = parseInt(field.split("-")[1]);
      const updatedInfo = {
        ...device.info[infoIndex],
        description: editedInfo[device.info[infoIndex].id], // Исправлен доступ к description
      };
      const updatedInfoResponse = await updateDeviceInfo(
        device.info[infoIndex].id,
        updatedInfo.title,
        updatedInfo.description
      );
      if (updatedInfoResponse.message === "Info updated successfully") {
        const updatedInfoList = device.info.map((item, index) =>
          index === infoIndex ? updatedInfoResponse.info : item
        );
        setDevice({ ...device, info: updatedInfoList });
      } else {
        // Обработка ошибки, если не удалось обновить информацию
      }
    }
    setEditing(null); // Сброс состояния редактирования после сохранения
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product ? product.name : "No Name"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {product && (
          <Card>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Название:</Form.Label>
                  {editing === "name" ? (
                    <Form.Control
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    <div className="d-flex justify-content-between align-items-center">
                      <Card.Text className="me-2">{product.name}</Card.Text>
                      <Button
                        variant="outline-primary"
                        onClick={() => handleEdit("name")}
                      >
                        Редактировать
                      </Button>
                    </div>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Описание:</Form.Label>
                  {editing === "description" ? (
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                    />
                  ) : (
                    <div className="d-flex justify-content-between align-items-center">
                      <Card.Text className="me-2">
                        {product.description}
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        onClick={() => handleEdit("description")}
                      >
                        Редактировать
                      </Button>
                    </div>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Цена:</Form.Label>
                  {editing === "price" ? (
                    <Form.Control
                      type="number"
                      value={editedPrice}
                      onChange={(e) => setEditedPrice(e.target.value)}
                    />
                  ) : (
                    <div className="d-flex justify-content-between align-items-center">
                      <Card.Text className="me-2">{product.price}</Card.Text>
                      <Button
                        variant="outline-primary"
                        onClick={() => handleEdit("price")}
                      >
                        Редактировать
                      </Button>
                    </div>
                  )}
                </Form.Group>
                <Card.Text>Бренд: {brandName}</Card.Text>
                <Card.Text>Категория: {typeName}</Card.Text>
                {device.info.map((info, index) => (
                  <Form.Group key={info.id} className="mb-3">
                    <Form.Label>{info.title}:</Form.Label>
                    {editing === `info-${index}` ? (
                      <Form.Control
                        type="text"
                        value={editedInfo[info.id] || ""}
                        onChange={(e) =>
                          setEditedInfo({
                            ...editedInfo,
                            [info.id]: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <div className="d-flex justify-content-between align-items-center">
                        <Card.Text className="me-2">
                          {info.description}
                        </Card.Text>
                        <Button
                          variant="outline-primary"
                          onClick={() => handleEdit(`info-${index}`)}
                        >
                          Редактировать
                        </Button>
                      </div>
                    )}
                  </Form.Group>
                ))}
              </Form>
            </Card.Body>
          </Card>
        )}
      </Modal.Body>
      <Modal.Footer>
        {editing && (
          <Button variant="primary" onClick={() => handleSave(editing)}>
            Сохранить
          </Button>
        )}
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
