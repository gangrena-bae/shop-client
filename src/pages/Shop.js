import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchTypes, fetchBrands, fetchDevices } from "../http/deviceAPI";
import Pages from "../components/Pages";
import SearchBar from "../components/SearchBar";
import "./Shop.css"; // В начале файла Shop.js

const Shop = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(
      device.selectedType?.id,
      device.selectedBrand?.id,
      device.page,
      8
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device.selectedType, device.selectedBrand, device.page]);

  const handleSearch = (searchTerm) => {
    fetchDevices(null, null, 1, 8, searchTerm).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  };

  return (
    <Container>
      <Row>
        <SearchBar onSearch={handleSearch} />
      </Row>
      <Row className="mt-3">
        <Col md={2}>
          <TypeBar />
          <BrandBar />
        </Col>
        <Col md={10}>
          <DeviceList devices={device.devices} />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
