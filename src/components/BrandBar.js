import React, { useContext, useState } from "react";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

// const BrandBar = observer(() => {
//   const { device } = useContext(Context);
//   return (
//     <ListGroup className="mt-2">
//       {device.brands.map((brand) => (
//         <ListGroup.Item
//           action
//           key={brand.id}
//           active={brand.id === device.setSelectedBrand.id}
//           onClick={() => device.setSelectedBrand(brand)}
//         >
//           {brand.name}
//         </ListGroup.Item>
//       ))}
//     </ListGroup>
//   );
// });
const BrandBar = observer(() => {
  const { device } = useContext(Context);
  const [activeBrandId, setActiveBrandId] = useState(null);

  return (
    <ListGroup className="mt-2">
      {device.brands.map((brand) => (
        <ListGroup.Item
          action
          key={brand.id}
          active={brand.id === activeBrandId}
          onClick={() => {
            device.setSelectedBrand(brand);
            setActiveBrandId(brand.id);
          }}
        >
          {brand.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default BrandBar;
