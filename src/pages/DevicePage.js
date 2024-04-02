import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Carousel,
  Image,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";
import { Context } from "../index";
import Accordion from "react-bootstrap/Accordion";
import "./DevicePageStyles.css";

const DevicePage = () => {
  const [device, setDevice] = useState({
    info: [],
    brands: "",
    type: "",
    stock: true,
    img: [],
    additionalFiles: [],
  });
  const { id } = useParams();
  const { cart } = useContext(Context);

  useEffect(() => {
    console.log("useEffect запущен, ID устройства:", id);

    fetchOneDevice(id).then((data) => {
      console.log("Данные получены от API:", data);

      let images = [];
      // Проверяем, является ли data.img массивом
      if (data.img && Array.isArray(data.img)) {
        console.log("Поле img существует и является массивом:", data.img);
        images = data.img; // Прямое присвоение, так как img уже массив
      } else {
        console.log("Поле img отсутствует или не является массивом");
      }

      setDevice({ ...data, img: images });
    });
  }, [id]);

  // Добавлен лог для проверки состояния device после его обновления
  useEffect(() => {
    console.log("Текущее состояние device:", device);
  }, [device]);

  // Добавлен лог для проверки состояния device после его обновления
  useEffect(() => {
    console.log("Текущее состояние device:", device);
  }, [device]);

  return (
    <>
      <div className="device_info">
        <div className="left_side">
          <Carousel variant="dark">
            {device.img.map((imgUrl, index) => (
              <Carousel.Item key={index}>
                <Image
                  thumbnail
                  fluid
                  className="d-block w-100"
                  src={`${process.env.REACT_APP_API_URL}${imgUrl}`}
                  alt={`Изображение устройства ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="right_side">
          <h1 className="device_name">{device.name}</h1>
          <h2 className="device_price">
            {new Intl.NumberFormat("ru-RU", {
              style: "currency",
              currency: "RUB",
              currencyDisplay: "narrowSymbol",
            }).format(device.price)}
          </h2>
          {device.stock ? <p>Есть в наличии</p> : <p>Под заказ</p>}
          <h3>Характеристики:</h3>
          <ListGroup>
            {device.info.map((info) => (
              <ListGroupItem key={info.id}>
                {info.title}: {info.description}
              </ListGroupItem>
            ))}
          </ListGroup>
          <p>
            {device.brands} - {device.type}
          </p>
          <Button
            className="mt-3"
            variant="outline-primary"
            onClick={() => cart.addItem(device)}
          >
            Добавить в корзину
          </Button>
        </div>
      </div>

      <div className="description">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Описание</Accordion.Header>
            <Accordion.Body>{device.description}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Как купить</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Дополнительные файлы и техническая документация
            </Accordion.Header>
            <Accordion.Body>
              {device.additionalFiles && device.additionalFiles.length > 0 ? (
                device.additionalFiles.map((file, index) => (
                  <Button
                    key={index}
                    className="m-2"
                    variant="primary"
                    href={`${process.env.REACT_APP_API_URL}${file}`} // Предполагается, что file содержит поле url
                    download
                  >
                    Скачать {file.name || `Файл ${index + 1}`}
                  </Button>
                ))
              ) : (
                <p>Дополнительные файлы отсутствуют.</p>
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Описание бренда</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default DevicePage;
