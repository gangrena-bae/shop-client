import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { fetchTypes, deleteType } from "../../http/deviceAPI";

const DeleteType = ({ show, onHide }) => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    fetchTypes()
      .then((response) => {
        setTypes(response);
      })
      .catch((error) => {
        console.error("Error fetching types:", error);
      });
  }, []);

  const handleDelete = async () => {
    if (selectedType) {
      try {
        await deleteType(selectedType.id);
        setTypes(types.filter((type) => type.id !== selectedType.id));
        setSelectedType(null);
      } catch (error) {
        console.error("Error deleting type:", error);
      }
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Выберите категорию для удаления</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {types.map((type) => (
          <div key={type.id}>
            <input
              type="radio"
              id={type.id}
              name="type"
              value={type.name}
              checked={selectedType && selectedType.id === type.id}
              onChange={() => setSelectedType(type)}
            />
            <label htmlFor={type.id}>{type.name}</label>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteType;
