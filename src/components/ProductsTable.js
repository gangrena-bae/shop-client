import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Context } from "../index";
import { deleteDevice, fetchDevices, fetchBrands, fetchTypes } from "../http/deviceAPI";
import ProductModal from "./ProductModal";

const ProductsTable = observer(() => {
  const { device } = useContext(Context);
  const [sortDirection, setSortDirection] = useState("asc");
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetchDevices(null, null, 1, 10000).then((data) => {
      device.setDevices(data.rows);
      fetchBrands().then((brandsData) => {
        setBrands(brandsData);
      });
      fetchTypes().then((typesData) => {
        setTypes(typesData);
      });
    });
  }, [device]);

  const sortById = () => {
    const sortedDevices = [...device.devices].sort((a, b) => {
      return sortDirection === "asc" ? a.id - b.id : b.id - a.id;
    });
    device.setDevices(sortedDevices);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setShowConfirmModal(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteDevice(selectedProduct.id);
      alert("Продукт успешно удален");
      setShowConfirmModal(false);
      fetchDevices(null, null, 1, 10000).then((data) => {
        device.setDevices(data.rows);
      });
    } catch (error) {
      console.error("Ошибка при удалении продукта:", error);
      alert("Произошла ошибка при попытке удаления продукта");
      setShowConfirmModal(false);
    }
  };

  const getBrandNameById = (brandId) => {
    const brand = brands.find((brand) => brand.id === brandId);
    return brand ? brand.name : "Unknown";
  };

  const getTypeNameById = (typeId) => {
    const type = types.find((type) => type.id === typeId);
    return type ? type.name : "Unknown";
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Название</th>
            <th style={{ cursor: "pointer" }} onClick={sortById}>
              ID
            </th>
            <th>Бренд</th>
            <th>Категория</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {device.devices.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.id}</td>
              <td>{getBrandNameById(product.brandId)}</td>
              <td>{getTypeNameById(product.typeId)}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleEditClick(product)}
                >
                  Редактировать
                </Button>
                &nbsp;
                <Button
                  variant="danger"
                  onClick={() => handleDeleteClick(product)}
                >
                  Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ProductModal
        show={showModal}
        onHide={handleCloseModal}
        product={selectedProduct}
      />
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Подтверждение удаления</Modal.Title>
        </Modal.Header>
        <Modal.Body>Вы действительно хотите удалить этот продукт?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Отмена
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
});

export default ProductsTable;