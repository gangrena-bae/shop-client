import React, { useContext, useState } from "react";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";
import { observer } from "mobx-react-lite";
import { ListGroupItem} from "react-bootstrap";


const TypeBar = observer(() => {
  const { device } = useContext(Context);
  const [radioValue, setRadioValue] = useState("");

  const handleTypeClick = (type) => {
    if (type.id === radioValue) {
      device.setSelectedType(null);
      setRadioValue("");
    } else {
      device.setSelectedType(type);
      setRadioValue(type.id);
    }
  };

  return (
    <div>
      <ListGroup vertical className="mt-2">
        {device.types.map((type) => (
          <ListGroupItem
            action
            key={type.id}
            active={type.id === radioValue}
            onClick={() => handleTypeClick(type)}
          >
            {type.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
});

export default TypeBar;
