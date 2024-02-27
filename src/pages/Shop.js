import React, { useContext, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import Pages from "../components/Pages";
import SearchBar from "../components/SearchBar";

const Shop = observer(() => {
  const { device } = useContext(Context);
  const [filteredDevices, setFilteredDevices] = useState([]);

  const handleSearch = (searchTerm) => {
    const filtered = device.devices.filter((d) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDevices(filtered);
  };

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(null, null, 1, 8).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
      setFilteredDevices(data.rows); // Устанавливаем все товары при загрузке
    });
  }, []);

  useEffect(() => {
    fetchDevices(
      device.selectedType?.id,
      device.selectedBrand?.id,
      device.page,
      8
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={2}>
          {/* <SearchBar onSearch={handleSearch} /> */}
          <TypeBar />
          {/* <Button variant="secondary" onClick={handleResetType}>
            Сбросить тип
          </Button> */}
          <BrandBar />
          {/* <Button variant="secondary" onClick={handleResetBrand}>
            Сбросить бренд
          </Button> */}
        </Col>
        <Col md={10}>
          <DeviceList devices={filteredDevices} />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
