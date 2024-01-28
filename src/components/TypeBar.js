import React, { useContext } from "react";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from "mobx-react-lite";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div>
      <ListGroup>
        {device.types.map((type) => (
          <ListGroup.Item
            action
            active={type.id === device.setSelectedType.id}
            onClick={() => device.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
});

export default TypeBar;
