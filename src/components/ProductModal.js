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
  updateDeviceImage,
  updateAdditionalFiles,
  updateDeviceBrand,
  updateDeviceType,
} from "../http/deviceAPI";

const ProductModal = ({ show, onHide, product }) => {
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState("");
  const [selectedTypeId, setSelectedTypeId] = useState("");
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
  const [imageFile, setImageFile] = useState(null);
  const [additionalFiles, setAdditionalFiles] = useState(null);

  useEffect(() => {
    if (product) {
      // Установка начальных значений для редактирования
      setSelectedBrandId(product.brandId);
      setSelectedTypeId(product.typeId);
      fetchOneDevice(product.id).then((data) => {
        setDevice(data);
      });
    }
    // Загрузка доступных брендов и типов
    fetchBrands().then((data) => setBrands(data));
    fetchTypes().then((data) => setTypes(data));
  }, [product]);

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

  const handleUpdateImage = async () => {
    if (!imageFile || imageFile.length === 0) {
      alert("Выберите файлы изображений.");
      return;
    }
    const formData = new FormData();
    // Добавляем каждый выбранный файл в formData
    Array.from(imageFile).forEach((file) => {
      formData.append("img", file); // Используйте "img" вместо "images[${index}]"
    });
    try {
      const response = await updateDeviceImage(product.id, formData); // Убедитесь, что API поддерживает этот формат
      alert("Изображение успешно обновлено.");
      onHide(); // Закрыть модальное окно
    } catch (error) {
      alert("Ошибка при загрузке изображения: " + error.message);
    }
  };

  const handleUpdateAdditionalFiles = async () => {
    if (!additionalFiles || additionalFiles.length === 0) {
      alert("Выберите дополнительные файлы.");
      return;
    }
    const formData = new FormData();
    // Добавляем каждый выбранный файл в formData
    Array.from(additionalFiles).forEach((file) => {
      formData.append("additionalFiles", file);
    });

    try {
      const response = await updateAdditionalFiles(product.id, formData); // Предполагается, что у вас есть такой метод
      alert("Дополнительные файлы успешно обновлены.");
      onHide(); // Закрыть модальное окно
    } catch (error) {
      alert("Ошибка при загрузке дополнительных файлов: " + error.message);
    }
  };

  const handleSave = async (field) => {
    try {
      switch (field) {
        case "brand":
          await updateDeviceBrand(product.id, selectedBrandId);
          break;
        case "type":
          await updateDeviceType(product.id, selectedTypeId);
          break;
        case "name":
          await updateDeviceName(product.id, editedName);
          break;
        case "description":
          await updateDeviceDescription(product.id, editedDescription);
          break;
        case "price":
          await updateDevicePrice(product.id, editedPrice);
          break;
        case field.match(/^info-\d+$/)?.input: // Проверяем, соответствует ли field шаблону "info-индекс"
          const infoIndex = parseInt(field.split("-")[1], 10);
          const infoToUpdate = device.info[infoIndex];
          if (!infoToUpdate) {
            console.error("Info to update not found.");
            return;
          }
          const updatedInfo = await updateDeviceInfo(infoToUpdate.id, {
            title: infoToUpdate.title,
            description: editedInfo[infoToUpdate.id],
          });
          // Обновляем локальное состояние устройства
          setDevice((prevDevice) => ({
            ...prevDevice,
            info: prevDevice.info.map((item, index) =>
              index === infoIndex ? updatedInfo : item
            ),
          }));
          break;
        default:
          console.error("Unknown field to update:", field);
      }
      console.log(`${field} updated successfully.`);
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
    } finally {
      setEditing(null); // Сброс состояния редактирования после сохранения
    }
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
                <Form.Group className="mb-3">
                  <Form.Label>Бренд:</Form.Label>
                  <Form.Select
                    value={selectedBrandId}
                    onChange={(e) => {
                      setSelectedBrandId(e.target.value);
                      setEditing("brand"); // Установка состояния редактирования при изменении бренда
                    }}
                  >
                    {brands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Тип:</Form.Label>
                  <Form.Select
                    value={selectedTypeId}
                    onChange={(e) => {
                      setSelectedTypeId(e.target.value);
                      setEditing("type"); // Установка состояния редактирования при изменении типа
                    }}
                  >
                    {types.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Изображение:</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    onChange={(e) => setImageFile(e.target.files)} // Сохраняем FileList
                  />
                </Form.Group>
                {imageFile && (
                  <Button variant="primary" onClick={() => handleUpdateImage()}>
                    Загрузить изображение
                  </Button>
                )}
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
                <Form.Group className="mb-3">
                  <Form.Label>Дополнительные файлы:</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    onChange={(e) => setAdditionalFiles(e.target.files)} // Сохраняем FileList
                  />
                </Form.Group>
                {additionalFiles && (
                  <Button
                    variant="primary"
                    onClick={handleUpdateAdditionalFiles}
                  >
                    Загрузить дополнительные файлы
                  </Button>
                )}
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
