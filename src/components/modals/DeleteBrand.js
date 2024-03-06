import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { fetchBrands, deleteBrand } from "../../http/deviceAPI";

const DeleteBrand = ({ show, onHide }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    fetchBrands()
      .then((response) => {
        setBrands(response);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

  const handleDelete = async () => {
    if (selectedBrand) {
      try {
        await deleteBrand(selectedBrand.id);
        setBrands(brands.filter((brand) => brand.id !== selectedBrand.id));
        setSelectedBrand(null);
      } catch (error) {
        console.error("Error deleting brand:", error);
      }
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Список брендов</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {brands.map((brand) => (
            <div key={brand.id}>
              <input
                name="brand"
                value={brand.name}
                type="radio"
                key={brand.id}
                id={brand.id}
                onChange={() => setSelectedBrand(brand)}
                checked={selectedBrand && selectedBrand.id === brand.id}
              />
              <label htmlFor={brand.id}>{brand.name}</label>
            </div>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Удалить выбранный бренд
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteBrand;
