// import React, { useState, useContext } from "react";
// import { Form, FormControl, Button } from "react-bootstrap";
// import { Context } from "../index";

// const SearchBar = () => {
//   const { device } = useContext(Context);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = () => {
//     device.searchDevicesByName(searchTerm); // Вызываем функцию поиска из контекста
//   };

//   return (
//     <Form inline>
//       <FormControl
//         type="text"
//         placeholder="Поиск по названию"
//         className="mr-sm-2"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <Button variant="outline-success" onClick={handleSearch}>
//         Искать
//       </Button>
//     </Form>
//   );
// };

// export default SearchBar;
