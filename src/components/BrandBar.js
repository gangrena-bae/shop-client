import React, { useContext } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ButtonGroup size="lg" className="mb-2">
      {device.brands.map((brand) => (
        <Button key={brand.id} className="p-3"
        onClick={() => device.setSelectedBrand(brand)}>
          {brand.name}
        </Button>
      ))}
    </ButtonGroup>
  );
});

export default BrandBar;
