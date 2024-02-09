import React, { useContext } from "react";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup className="mt-2">
      {device.brands.map((brand) => (
        <ListGroup.Item
          action
          key={brand.id}
          active={brand.id === device.setSelectedBrand.id}
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default BrandBar;
