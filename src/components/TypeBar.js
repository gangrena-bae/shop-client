import React, { useContext, useState } from "react";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from "mobx-react-lite";
import { ButtonGroup, ListGroupItem, ToggleButton } from "react-bootstrap";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  const [radioValue, setRadioValue] = useState("");

  return (
    <div>
      <ListGroup vertical>
        {device.types.map((type) => (
          <ListGroupItem
            action
            key={type.id}
            active={type.id === radioValue}
            onClick={() => {
              device.setSelectedType(type);
              setRadioValue(type.id);
            }}
          >
            {type.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
});

export default TypeBar;
